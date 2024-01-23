import { rubiksCubeModel } from 'js/model/rubiksCubeModel'
import { deg2rad, eulerToQuaternion } from 'js/utils/angle'
import { isInBackFace, isInDownFace, isInFrontFace, isInLeftFace, isInRightFace, isInUpFace, isInEquatorFace, isInMiddleFace, isInStandingFace } from 'js/model/predicates'
import { createIdentityMat4, mat4Multiply, mat4FromQuat, getMatrix4FromDom, applyQuaternionToMat4, mat4ToRotation } from 'js/utils/mat4'
import { generateScrambleSequence } from 'js/utils/scrambler'
import { updateButtonDisplay } from 'js/inputs/buttons'

const cubes_infos = []
const queue_moves = []
let cubes_in_transition = 0
let lineIsMoving = false
let lineDragged = false
const initCube = function () {
  var cubes = document.querySelectorAll(".cube_container");
  cubes.forEach((cube, index) => {
    setCubeInfos(cube.dataset.posInit, cube)
    setRotate3DMiniCube(0, 0, 0, cube, index)
    cube.addEventListener("transitionend", finishTransition);
  })
}

const resetCube = function () {
  if (!isMoving() && !lineDragged)
    resetMiniCube()
}

const getRubiksCube = function () {
  return document.querySelector(".rubiks_cube");
}

const resetMiniCube = function () {
  var cubes = document.querySelectorAll(".cube_container");
  cubes.forEach((cube, index) => {
    setCubeInfos(cube.dataset.posInit, cube)
    setRotate3DMiniCube(0, 0, 0, cube, index)
  })
  cubes_in_transition = 0
  updateButtonDisplay(true)
}

const getCubeByPosition = function (position) {
  return cubes_infos[position].cube
}

const isMoving = function () {
  //console.log(cubes_in_transition)
  if (cubes_in_transition < 0) {
    cubes_in_transition = 0
  }
  return cubes_in_transition != 0
}
const finishTransition = function () {
  cubes_in_transition -= 1
  if(cubes_in_transition == 0){
    lineIsMoving = false
  }
  
  if(queue_moves.length == 0 && cubes_in_transition == 0 && lineIsMoving == false ){
    updateButtonDisplay(isSolved())
  }
  
  startNextMove()

}

const dragCubeStarted = function (isLine) {
  var rubiks_cubes = getRubiksCube()
  rubiks_cubes.classList.add("drag-cube")
  if (isLine) {
    lineDragged = true
  }
}

const dragCubeEnded = function () {
  var rubiks_cubes = getRubiksCube()
  rubiks_cubes.classList.remove("drag-cube")
  if (lineDragged) {
    lineDragged = false
  }
}

const dragLineStarted = function (isLine) {
  var rubiks_cubes = getRubiksCube()
  rubiks_cubes.classList.add("drag-line")
  if (isLine) {
    lineDragged = true
  }
}

const dragLineEnded = function () {
  var rubiks_cubes = getRubiksCube()
  rubiks_cubes.classList.remove("drag-line")
  if (lineDragged) {
    lineDragged = false
  }
}

const startNextMove = function () {
  if (queue_moves.length > 0 && !isMoving() && !lineDragged) {
    move(queue_moves[0])
  }
}

const setCubeInfos = function (pos, cube) {
  cube.dataset.pos = pos
  cubes_infos[pos] = { cube, pos }
}
const setRotate = function (rotateX, rotateY, el) {
  rotateX = Math.abs(rotateX) > 90 ? Math.sign(rotateX) * 90 : rotateX
  rubiksCubeModel.rotateX = rotateX;
  rubiksCubeModel.rotateY = rotateY;
  el.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateZ(0)";
}

const setRotate3DMiniCube = function (rotX, rotY, rotZ, el, index) {
  cubes_in_transition += 1
  var mat4 = getMatrix4FromDom(el)
  var quat = eulerToQuaternion(deg2rad(rotX), deg2rad(rotY), deg2rad(rotZ))
  applyQuaternionToMat4(mat4, quat)
  applyMat4TransformToStyle(el, mat4)
}

const addRotate = function (rotX, rotY, rotZ, el, countTransition = true) {
  if (countTransition) cubes_in_transition += 1
  var mat4 = getMatrix4FromDom(el)
  var quat = eulerToQuaternion(deg2rad(rotX), deg2rad(rotY), deg2rad(rotZ))
  var mat4Rotation = mat4FromQuat(createIdentityMat4(), quat)
  var mat4Rotated = createIdentityMat4()
  mat4Rotated = mat4Multiply(mat4Rotated, mat4Rotation, mat4)
  applyMat4TransformToStyle(el, mat4Rotated)

  return mat4Rotated;
}

const applyMat4TransformToStyle = function (el, mat4) {
  // Extract individual components
  const m11 = mat4[0];
  const m12 = mat4[1];
  const m13 = mat4[2];
  const m14 = mat4[3];
  const m21 = mat4[4];
  const m22 = mat4[5];
  const m23 = mat4[6];
  const m24 = mat4[7];
  const m31 = mat4[8];
  const m32 = mat4[9];
  const m33 = mat4[10];
  const m34 = mat4[11];
  const m41 = mat4[12];
  const m42 = mat4[13];
  const m43 = mat4[14];
  const m44 = mat4[15];
  el.style.transform = `matrix3d(${m11}, ${m12}, ${m13}, ${m14}, ${m21}, ${m22}, ${m23}, ${m24}, ${m31}, ${m32}, ${m33}, ${m34}, ${m41}, ${m42}, ${m43}, ${m44})`;
}

function isSolved() {
  let solved = true

  let cube = cubes_infos[0].cube
  var rotationFirstCube = mat4ToRotation(getMatrix4FromDom(cube))
  var quat = eulerToQuaternion(deg2rad(rotationFirstCube.x), deg2rad(rotationFirstCube.y), deg2rad(rotationFirstCube.z))
  var mat4Rotation = mat4FromQuat(createIdentityMat4(), quat)

  for (let i = 0; i < cubes_infos.length; i++) {
    let cubeInfo = cubes_infos[i]
    let  mat4=getMatrix4FromDom(cubeInfo.cube)
    let mat4Rotated = mat4Multiply(createIdentityMat4(),mat4,mat4Rotation)
    let  rotate = mat4ToRotation(mat4Rotated)
    if (Math.round(rotate.x) != 0 || Math.round(rotate.y) != 0 || Math.round(rotate.z) != 0) {
          solved = false;
          break
    }
  }
  return solved
}

const rotateTablePosCounterClockwise = [
  2,
  5,
  8,
  1,
  -1,
  7,
  0,
  3,
  6,
]

const rotateTablePosClockwise = [
  6,
  3,
  0,
  7,
  -1,
  1,
  8,
  5,
  2
]

const getRotateTable = (sign) => {
  if (sign == 1) {
    return rotateTablePosClockwise
  }
  else {
    return rotateTablePosCounterClockwise
  }
}

const updatePos = function (movedCubes, sign) {
  const rotateTable = getRotateTable(sign)
  let cubeNewPosInfos = []
  for (let i = 0; i < movedCubes.length; i++) {

    if (i == 4) {
      continue;
    }

    var cubeInfo = movedCubes[i]
    var index_rotation = rotateTable[i]
    cubeNewPosInfos.unshift({ index: i, pos: movedCubes[index_rotation].pos })
  }

  for (let cubeNewPosInfo of cubeNewPosInfos) {
    var cubeInfo = movedCubes[cubeNewPosInfo.index]
    setCubeInfos(cubeNewPosInfo.pos, cubeInfo.cube)
  }
}

const getCubeByPredicates = function (predicate) {
  let cubes_found = []
  cubes_infos.forEach((cube_info, index) => {
    if (predicate(index)) {
      cubes_found.push({ pos: index, cube: cube_info.cube })
    }
  })
  return cubes_found
}


const centerCube = function () {
  var rubiksCube = document.querySelector(".rubiks_cube");
  setRotate(-35, -45, rubiksCube);
}

const move = function(move){
  if (lineDragged) {
    return
  }
  if (isMoving()) {
    queue_moves.push(move);
    return
  }
  let sign = 1
  if (move.length > 0) {
    if (move[1] === "'") {
      sign = -1
    } else if (move[1] === "2") {
      var currentMove = queue_moves.shift()
      queue_moves.unshift(move[0])
      queue_moves.unshift(currentMove)
    }
  }
  let letter = move[0]
  if(letter === 'X' || letter === 'Y' ||letter === 'Z'){
    rotateCube(move,sign)
  }else{
    moveLine(move,sign)
  }
  queue_moves.shift()
}

const moveLine = function (move,sign) {
  let { newPosDico, signToUpdatePos } = computeSimpleMove(move, sign)
  updatePos(newPosDico, signToUpdatePos)
  lineIsMoving = true
}

const rotateCube = function (move,sign) {
  let computedMoves = computeSimpleRotation(move,sign)
  computedMoves.forEach((moveComputed)=> {
    let { newPosDico, signToUpdatePos } = moveComputed
    updatePos(newPosDico, signToUpdatePos)
  })
}

const rotateCubesbyPredicate = function (predicate, x, y, z) {
  let newPosDico = []
  var cubesInfos = getCubeByPredicates(predicate)
  cubesInfos.forEach(cubesInfo => {
    addRotate(x, y, z, cubesInfo.cube)
    newPosDico.push(cubesInfo)
  })
  return newPosDico
}

const computeSimpleRotation = function(move,sign){
  var moveComputed = []

  switch (move[0]) {
    //Like R
    case "X":
      moveComputed.push(computeSimpleMove("R",sign))
      moveComputed.push(computeSimpleMove("M'",-sign))
      moveComputed.push(computeSimpleMove("L'",-sign))
      break;
    //Like U
    case "Y":
      moveComputed.push(computeSimpleMove("U",sign))
      moveComputed.push(computeSimpleMove("E",sign))
      moveComputed.push(computeSimpleMove("D'",-sign))
      break;
    //Like F
    case "Z":
      moveComputed.push(computeSimpleMove("F",sign))
      moveComputed.push(computeSimpleMove("S",sign))
      moveComputed.push(computeSimpleMove("B'",-sign))
      break;
  }
  return moveComputed
}
const computeSimpleMove = function (move, sign) {
  let newPosDico = []
  switch (move[0]) {
    //UP
    case "U":
      newPosDico = rotateCubesbyPredicate(isInUpFace, 0, -90 * sign, 0)
      break;
    //DOWN
    case "D":
      newPosDico = rotateCubesbyPredicate(isInDownFace, 0, 90 * sign, 0)
      sign = sign * -1
      break;
    //FRONT
    case "F":
      newPosDico = rotateCubesbyPredicate(isInFrontFace, 0, 0, 90 * sign)
      sign = sign * -1
      break;
    //BACK
    case "B":
      newPosDico = rotateCubesbyPredicate(isInBackFace, 0, 0, -90 * sign)
      break;
    //RIGHT
    case "R":
      newPosDico = rotateCubesbyPredicate(isInRightFace, 90 * sign, 0, 0)
      sign = sign * -1
      break;
    //LEFT
    case "L":
      newPosDico = rotateCubesbyPredicate(isInLeftFace, -90 * sign, 0, 0)
      break;
    //MIDDLE
    case "M":
      newPosDico = rotateCubesbyPredicate(isInMiddleFace, -90 * sign, 0, 0)
      break;
    //EQUATOR
    case "E":
      newPosDico = rotateCubesbyPredicate(isInEquatorFace, 0, -90 * sign, 0)
      break;
    //STANDING
    case "S":
      newPosDico = rotateCubesbyPredicate(isInStandingFace, 0, 0, 90 * sign)
      sign = sign * -1
      break;
  }
  return { newPosDico, signToUpdatePos:sign }
}

const scramble = function () {
  if (lineDragged) {
    return
  }
  var sequence = generateScrambleSequence(21)
  addSequence(sequence)
}

const addSequence = function (sequence) {
  for (let move of sequence) {
    queue_moves.push(move)
  }
  startNextMove()
}
export { initCube, resetCube, getCubeByPosition, setRotate, dragLineEnded, dragLineStarted,dragCubeEnded, dragCubeStarted, addRotate, centerCube, scramble, setRotate3DMiniCube, move, isMoving, addSequence };
