import './scss/main.scss';
import { registerServiceWorker } from 'js/serviceWorker';
import { initDragAndDrop } from 'js/inputs/dragAndDrop';
import { initClickButtons } from 'js/inputs/buttons';
import { initKeyboard } from 'js/inputs/keyboard';
import { initCube,centerCube } from 'js/cubeController';

registerServiceWorker();
initDragAndDrop();
initKeyboard();
initClickButtons();
initCube();
centerCube()
