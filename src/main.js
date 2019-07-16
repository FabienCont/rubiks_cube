import './scss/main.scss';
import {registerServiceWorker} from 'js/serviceWorker';
import {initDragAndDrop} from 'js/dragAndDrop';
import {initKeyboard} from 'js/utils/keyboard';
import {setTranslate,setRotate} from 'js/cubeController';

registerServiceWorker();
initDragAndDrop();
initKeyboard();

var rubiksCubes=document.querySelectorAll(".rubiks_cube");

for(var i =0;i<rubiksCubes.length;i++){
  setRotate(-30, 28, rubiksCubes[i]);
}

window.test=function (){
  var rubiksCubes=document.querySelectorAll(".cube_container");
  for(var i =0;i<10;i++){
    rubiksCubes[i].style.transform="rotateY(90deg)";
  }
}

//setTimeout(test,1500)
