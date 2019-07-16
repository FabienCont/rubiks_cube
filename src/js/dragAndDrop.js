import {setTranslate,setRotate,setRotate3DMiniCube} from 'js/cubeController' ;
import {rubiksCubeModel} from 'js/model/rubiksCubeModel' ;
import {Vect3} from 'js/utils/vect' ;
import {findCubeLines} from "js/model/find";
var initDragAndDrop=function(){
    var scene_container =document.querySelector(".scene_container");
    var rubiks_cubes=document.querySelectorAll(".rubiks_cube");
    var rubiks_cube_mini_cubes=[];
    var rubiks_cube_mini_cubes_position= [];
    for(var i=0; i<rubiks_cubes.length;i++){

        rubiks_cube_mini_cubes_position.push(document.querySelectorAll(".cube_container_position"));
      rubiks_cube_mini_cubes.push(document.querySelectorAll(".cube_container"));
    }
    var mode="rotate";
    var noLogic=false;
    var rotateMiniCube=undefined;
    var rotateMiniCubeIndex= -1;
    var active = false;
    var cubeLines=[];
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    scene_container.addEventListener("touchstart", dragStart, false);
    scene_container.addEventListener("touchend", dragEnd, false);
    scene_container.addEventListener("touchmove", drag, false);

    scene_container.addEventListener("mousedown", dragStart, false);
    scene_container.addEventListener("mouseup", dragEnd, false);
    scene_container.addEventListener("mousemove", drag, false);

    function dragStart(e) {

      if (e.target === scene_container|| scene_container.contains(e.target)  ) {
        active = true;

        for(var i=0; i<rubiks_cubes.length;i++){
          for(var c=0; c<rubiks_cube_mini_cubes_position[i].length;c++){
                if(e.target === rubiks_cube_mini_cubes_position[i][c] || rubiks_cube_mini_cubes_position[i][c].contains(e.target)){
                 rotateMiniCube=rubiks_cube_mini_cubes[i][c]
                 rotateMiniCubeIndex= c;
                 break;
               }
            }
            if(rotateMiniCube) break;
          }


       if( rotateMiniCube && rotateMiniCubeIndex!=-1){
         var deepCopyrubiksCubeModel= JSON.parse(JSON.stringify(rubiksCubeModel));
         xOffset=0;
         yOffset=0;
         cubeLines =findCubeLines(rotateMiniCubeIndex);
        }else if(mode === "rotate"){
          xOffset=rubiksCubeModel.rotateY;
          yOffset=-rubiksCubeModel.rotateX;
        }else {
          xOffset=0;
          yOffset=0;
        }

        if (e.type === "touchstart") {
          initialX = e.touches[0].clientX - xOffset;
          initialY = e.touches[0].clientY - yOffset;
        } else {
          initialX = e.clientX - xOffset;
          initialY = e.clientY - yOffset;
        }

      }
    }

    function dragEnd(e) {
      console.log("dragEnd");
      setTimeout(function(){
      for(var i=0;i<cubeLines.length;i++){

        for(var c=0;c<cubeLines[i].line.length;c++){

          //setRotate3DMiniCube(-currentY, currentX, 0 , rotateMiniCube,cubeLines[i].line[c]);
            for(var r=0; r<rubiks_cubes.length;r++){

              setRotate3DMiniCube(0, 0, 0 , rubiks_cube_mini_cubes[r][cubeLines[i].line[c]],cubeLines[i].line[c]);

            }

          }
        }
      initialX = currentX;
      initialY = currentY;

      active = false;
      rotateMiniCube=undefined;
      rotateMiniCubeIndex= -1;
      cubeLines=[];
    },200);


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
        if(mode=="translate"){
          for(var i=0; i<rubiks_cubes.length;i++){
            setTranslate(currentX, currentY, rubiks_cubes[i]);
          }
        }else if(rotateMiniCube && noLogic){
          console.log(currentX,currentY);
          var rotateX=-currentY;
          var rotateY=currentX;

          for(var i=0;i<cubeLines.length;i++){

          for(var c=0;c<cubeLines[i].line.length;c++){

          //setRotate3DMiniCube(-currentY, currentX, 0 , rotateMiniCube,cubeLines[i].line[c]);
            for(var r=0; r<rubiks_cubes.length;r++){

              setRotate3DMiniCube(rotateX, rotateY, 0 , rubiks_cube_mini_cubes[r][cubeLines[i].line[c]],cubeLines[i].line[c]);

            }

          }
        }

        }else if(rotateMiniCube){
        /*  var vectCubeRotate=Vect3.create(rubiksCubeModel.rotateX,rubiksCubeModel.rotateY,0);
          var vectDrag=Vect3.create(currentX,currentY,0);
          var normalizeMiniCubeVect = Vect3.rotate(vectDrag,vectCubeRotate);*/
          console.log(currentX,currentY);
          var oldAxis= axis;
          var lineAxis=[];
          var axis=undefined;
          if(Math.abs(currentX)>6 || Math.abs(currentY)>6){

            if(Math.abs(currentX)-Math.abs(currentY)<7){
              axis="Z";
            }else if(Math.abs(currentX)>Math.abs(currentY)){
              axis="X";
            }
            else if(Math.abs(currentX)<Math.abs(currentY)){
              axis ="Y";
            }

          }
          if(axis){
            lineAxis=cubeLines.find((element)=>{
              return element.axis==axis;
            }).line;
          }
          console.log(axis)


          for(var i=0;i<cubeLines.length;i++){
            if(oldAxis!= axis && axis != cubeLines[i].axis){

              for(var c=0;c<cubeLines[i].line.length;c++){

              //setRotate3DMiniCube(-currentY, currentX, 0 , rotateMiniCube,cubeLines[i].line[c]);
                for(var r=0; r<rubiks_cubes.length;r++){
                  if(!lineAxis.indexOf(rubiks_cube_mini_cubes[r][cubeLines[i].line[c]])!=-1){
                    //setRotate3DMiniCube(0, 0, 0 , rubiks_cube_mini_cubes[r][cubeLines[i].line[c]],cubeLines[i].line[c]);
                  }

                }

              }
            }

            if(!axis || axis == cubeLines[i].axis ){
              //console.log(axis)

                var rotateX=-currentY;
                var rotateY=currentX;
              if(axis){
                if(axis=="X"){
                    rotateY=0;
                }else if(axis=="Y"){
                    rotateX=0;
                }
              }
              for(var c=0;c<cubeLines[i].line.length;c++){

              //setRotate3DMiniCube(-currentY, currentX, 0 , rotateMiniCube,cubeLines[i].line[c]);
                for(var r=0; r<rubiks_cubes.length;r++){

                  setRotate3DMiniCube(rotateX, rotateY, 0 , rubiks_cube_mini_cubes[r][cubeLines[i].line[c]],cubeLines[i].line[c]);

                }

              }
            }
          }

          //test with normalizeMiniCubeVect not working
          //setRotate3DMiniCube(normalizeMiniCubeVect.x, normalizeMiniCubeVect.y,normalizeMiniCubeVect.z, rotateMiniCube,0);
        }else {
          for(var i=0; i<rubiks_cubes.length;i++){
            setRotate(-currentY, currentX, rubiks_cubes[i]);
          }
        }
      }
    }
}



export {initDragAndDrop};
