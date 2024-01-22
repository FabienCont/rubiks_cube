import { addRotate, move } from 'js/cubeController';
import { keymap } from 'js/utils/keymap.js';

export const initKeyboard = function () {

    function keydown(event) {
        const code = event.key;
        if (!keymap[code]) return
        switch (keymap[code]) {
            case 'UP':
                var rubiksCube = document.querySelector(".rubiks_cube");
                addRotate(25, 0, 0, rubiksCube);
                break;
            case 'DOWN':
                var rubiksCube = document.querySelector(".rubiks_cube");
                addRotate(-25, 0, 0, rubiksCube);
                break;
            case 'RIGHT':
                var rubiksCube = document.querySelector(".rubiks_cube");
                addRotate(0, 25, 0, rubiksCube);
                break;
            case 'LEFT':
                var rubiksCube = document.querySelector(".rubiks_cube");
                addRotate(0, -25, 0, rubiksCube);
                break;
            default:
                move(keymap[code] + (isShiftPressed(event) ? "'" : ""))
                break;
        }
    }

    window.addEventListener('keydown', keydown);


}

const isShiftPressed = function (event) {
    return event.shiftKey
}
