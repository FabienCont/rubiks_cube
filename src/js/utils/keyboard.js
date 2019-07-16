import {addRotate} from 'js/cubeController';
import {keynames} from './keynames.js';

const initKeyboard=function (codes, inputs) {


    function keydown(event) {
        const code = event.keyCode;
        //console.log(code);
        switch (keynames[code]) {
            case 'UP':

            var rubiksCube=document.querySelector(".rubiks_cube");
            addRotate(6, 0, rubiksCube);


            break;

            case 'DOWN':

            var rubiksCube=document.querySelector(".rubiks_cube");
            addRotate(-6, 0, rubiksCube);


            break;

            case 'RIGHT':

            var rubiksCube=document.querySelector(".rubiks_cube");
            addRotate(0, 6, rubiksCube);


            break;

            case 'LEFT':

            var rubiksCube=document.querySelector(".rubiks_cube");
            addRotate(0, -6, rubiksCube);


            break;

        }

      //  event.preventDefault();

    }

    window.addEventListener('keydown', keydown);


}

// exports current module as an object
export {initKeyboard};
