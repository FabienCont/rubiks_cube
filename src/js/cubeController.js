import {rubiksCubeModel} from 'js/model/rubiksCubeModel'
import {Vect3} from 'js/utils/vect'

const setTranslate =function (xPos, yPos, el) {
 el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

const setRotate = function(rotateX,rotateY,el){
  rubiksCubeModel.rotateX=rotateX;
  rubiksCubeModel.rotateY=rotateY;
  el.style.transform = "rotateX("+ rotateX +"deg) rotateY("+ rotateY+"deg) translateZ(0)";

}

const setRotate3DMiniCube = function(rotateX,rotateY,rotateZ,el,index){

  rubiksCubeModel.childCubes[index].rotateX=rotateX;
  rubiksCubeModel.childCubes[index].rotateY=rotateY;
  rubiksCubeModel.childCubes[index].rotateZ=rotateZ;

  el.style.transform = "rotateX("+ rotateX +"deg) rotateY("+ rotateY+"deg)  rotateZ("+ rotateZ+"deg) translateZ(0)";
}


const addRotate = function(rotX,rotY,el){

  rubiksCubeModel.rotateX+=rotX;
  rubiksCubeModel.rotateY+=rotY;

  el.style.transform = "rotateX("+ rubiksCubeModel.rotateX +"deg) rotateY("+ rubiksCubeModel.rotateY+"deg) translateZ(0)";
}

function getTransform (elem) {
    var matrix = parseMatrix(getComputedStyle(elem, null).transform),
        rotateY = Math.asin(-matrix.m13),
        rotateX,
        rotateZ;


    if (Math.cos(rotateY) !== 0) {
        rotateX = Math.atan2(matrix.m23, matrix.m33);
        rotateZ = Math.atan2(matrix.m12, matrix.m11);
    } else {
        rotateX = Math.atan2(-matrix.m31, matrix.m22);
        rotateZ = 0;
    }
    return {
        rotate: { x: rotateX, y: rotateY, z: rotateZ },
        translate: { x: matrix.m41, y: matrix.m42, z: matrix.m43 }
    };
}

export {setTranslate,setRotate,addRotate,setRotate3DMiniCube};
