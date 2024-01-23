import { isMoving, setRotate, addRotate, getCubeByPosition, setRotate3DMiniCube } from 'js/cubeController';
import { rubiksCubeModel } from 'js/model/rubiksCubeModel';
import { findCubeLines } from "js/model/find";
import { getMatrix4FromDom, mat4ToRotation } from 'js/utils/mat4';
import { dragLineEnded, dragLineStarted, dragCubeEnded, dragCubeStarted } from 'js/cubeController';

var initDragAndDrop = function () {
  var scene_container = document.querySelector(".scene_container");
  var rubiks_cubes = document.querySelector(".rubiks_cube");

  var rubiks_cube_mini_cubes_position = document.querySelectorAll(".cube_container_position");

  var rotateMiniCube = undefined;
  var rotateMiniCubeIndex = -1;
  var active = false;
  var cubeLines = [];
  var currentX;
  var currentY;
  var initialX;
  var initialY;
  var xOffset = 0;
  var yOffset = 0;
  var axis
  var savedCubesTransform = []
  var dragLine = false;

  scene_container.addEventListener("touchstart", dragStart, false);
  scene_container.addEventListener("touchend", dragEnd, false);
  scene_container.addEventListener("touchmove", drag, false);

  scene_container.addEventListener("mousedown", dragStart, false);
  scene_container.addEventListener("mouseup", dragEnd, false);
  scene_container.addEventListener("mousemove", drag, false);

  function applySavedPos() {
    if (!axis) return
    var indices = cubeLines.find(line => axis == line.axis).line;
    savedCubesTransform = indices.forEach((indexCube, index) => {
      let cube = getCubeByPosition(indexCube)
      var rotation = mat4ToRotation(savedCubesTransform[index])
      setRotate3DMiniCube(rotation.x, rotation.y, rotation.z, cube, indexCube)
    })
  }

  function savePosLine() {
    var indices = cubeLines.find(line => axis == line.axis).line;
    savedCubesTransform = indices.map(index => {
      let cube = getCubeByPosition(index)
      return getMatrix4FromDom(cube)
    })
  }

  function dragStart(e) {

    if (active == false && (e.target === scene_container || scene_container.contains(e.target))) {
      active = true;

      if (!isMoving()) {
        for (var c = 0; c < rubiks_cube_mini_cubes_position.length; c++) {
          if (e.target === getCubeByPosition(c) || rubiks_cube_mini_cubes_position[c].contains(e.target)) {
            rotateMiniCube = getCubeByPosition(c)
            rotateMiniCubeIndex = rotateMiniCube.dataset.pos;
            break;
          }
        }
      }

      if (rotateMiniCube && rotateMiniCubeIndex != -1 && !isMoving() && false) {
        dragLine = true
        xOffset = 0;
        yOffset = 0;
        cubeLines = findCubeLines(rotateMiniCubeIndex);
        dragLineStarted(true)
      } else {
        dragCubeStarted(false)
        xOffset = rubiksCubeModel.rotateY;
        yOffset = -rubiksCubeModel.rotateX;
      }
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }

      
      return false;
    }
    e.preventDefault();
  }

  function dragEnd(e) {
    if (active) {
      dragLine = false
      dragLineEnded()
      dragCubeEnded()
      applySavedPos()
      axis = undefined
      initialX = currentX;
      initialY = currentY;
      savedCubesTransform = []
      active = false;
      rotateMiniCube = undefined;
      rotateMiniCubeIndex = -1;
      cubeLines = [];
      
      e.preventDefault();
      return false;

    }
  }

  function drag(e) {
    if (active) {

      e.preventDefault();

      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;
      if (!dragLine) {
        setRotate(-currentY, currentX, rubiks_cubes);
        return false
      }

      /*  var vectCubeRotate=Vect3.create(rubiksCubeModel.rotateX,rubiksCubeModel.rotateY,0);
        var vectDrag=Vect3.create(currentX,currentY,0);
        var normalizeMiniCubeVect = Vect3.rotate(vectDrag,vectCubeRotate);*/
      console.log(currentX, currentY);
      var lineAxis = [];

      if (axis) {
        lineAxis = cubeLines.find((element) => {
          return element.axis == axis;
        }).line

      } else if (Math.abs(currentX) > 6 || Math.abs(currentY) > 6) {
        if (Math.abs(currentX) - Math.abs(currentY) < 7) {
          axis = "Z";
        } else if (Math.abs(currentX) > Math.abs(currentY)) {
          axis = "X";
        }
        else if (Math.abs(currentX) < Math.abs(currentY)) {
          axis = "Y";
        }

        if (axis) savePosLine()
      }

      if (!axis) return false

      console.log("AXIS:", axis)
      var line = cubeLines.find(line => axis == line.axis).line;
      var rotateX = -currentY;
      var rotateY = currentX;
      var axisFilter = [0, 0, 0]
      var power = 0
      var limit = 2.2
      if (axis == "X") {
        axisFilter[1] = 1
        power = Math.min(Math.max(-limit, rotateY), limit)
      } else if (axis == "Y") {
        axisFilter[0] = 1
        power = Math.min(Math.max(-limit, rotateY), limit)
      } else if (axis == "Z") {
        axisFilter[0] = 1
        power = Math.min(Math.max(-limit, rotateX), limit)
      }

      //console.log(rotateX, rotateY)
      //console.log("POWER", power)
      for (var c = 0; c < line.length; c++) {
        var index = line[c]
        addRotate(power * axisFilter[0], power * axisFilter[1], power * axisFilter[2], getCubeByPosition(index), false);
      }
      return false
    }
  }
}



export { initDragAndDrop };
