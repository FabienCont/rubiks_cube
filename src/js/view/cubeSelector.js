const getSceneContainer =function(){
  return document.querySelector(".scene_container");
}

const getRubiksCubesByNumber= function(sceneContainer,number){
  var suffix="";
  if (number) suffix="_"+number;
  return sceneContainer.querySelector(".rubiks_cube"+suffix);
}

const getRubiksCubes= function(,sceneContainer){
  return sceneContainer.querySelectorAll(".rubiks_cube");
}

const getMiniCubes=function(cube){
  return cube.querySelectorAll(".cube_container");
}

const getMiniCubesPositionContainer=function(cube){
  cube.querySelectorAll(".cube_container_position");
}

const getMiniCubePositionContainerId=function(cube,id){
  return cube.querySelectorAll(".cube_container_position")[id+1];
}

const getMiniCubePositionContainerByParent=function(miniCube){
  miniCube.querySelector(".cube_container_position");
}

const getMiniCubePositionContainerByPosition=function(cube,position){
  cube.querySelector(".cube_container_position_"+position);
}

const getMiniCubeFaces=function(miniCubeContainer){
  miniCubeContainer.querySelectorAll(".cube_face");
}

export {getSceneContainer,
getRubiksCubesByNumber,
getRubiksCubes,
getMiniCubes,
getMiniCubesPositionContainer,
getMiniCubePositionContainerByParent,
getMiniCubePositionContainerByPosition,
getMiniCubeFaces}
