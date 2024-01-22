import { move,centerCube,scramble,resetCube } from 'js/cubeController';
import { solve } from 'js/utils/solver';
export const initClickButtons = () => {
    initClickMove()
    initClickScramble()
    initClickCenter()
    initClickReset()
    //initClickSolve()
}

export const updateButtonDisplay = function(isSolved){
    let scrambel = document.querySelector(".btn_scramble")
    let reset = document.querySelector(".btn_reset")
        
    if (isSolved){
        show(scrambel)
        hide(reset)
    }else{
        show(reset)
        hide(scrambel)
    }
}

const hide = function(elem){
    if (!elem.classList.contains("hide")) elem.classList.add("hide")
}

const show = function (elem){
    if (elem.classList.contains("hide"))elem.classList.remove("hide")
}
const addEventListenerToNode = function (node, eventHandler) {
    node.addEventListener("touchstart", eventHandler, false);
    node.addEventListener("mousedown", eventHandler, false);
}

const initClickMove = () => {
    let nodes = document.querySelectorAll(".btn_move")
    nodes.forEach(node => {
        addEventListenerToNode(node, clickMove)
    })
}

const initClickReset = () => {
    let node = document.querySelector(".btn_reset")
    addEventListenerToNode(node, clickReset)
}

const initClickSolve = () => {
    let node = document.querySelector(".btn_solve")
    addEventListenerToNode(node, clickSolve)
}

const initClickCenter = () => {
    let node = document.querySelector(".btn_center")
    addEventListenerToNode(node, clickCenter)
}

const initClickScramble = () => {
    let node = document.querySelector(".btn_scramble")
    addEventListenerToNode(node, clickScramble)
}

const block_event = function (event) {
    event.stopPropagation()
    event.preventDefault()
    return false;
}

const clickReset = function(event){
    resetCube()
    return block_event(event)
}

const clickSolve = function (event) {
    solve()
    return block_event(event)
}

const clickCenter = function (event) {
    centerCube(event)
    return block_event(event)
}

const clickMove = function (event) {
    move(event.target.dataset.id)
    return block_event(event)
}

const clickScramble = function (event) {
    scramble(event)
    return block_event(event)
}