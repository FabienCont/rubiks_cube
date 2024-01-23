export const addEventListenerToNode = function (node, eventHandler) {
    node.addEventListener("touchstart", block_event, false);
    node.addEventListener("mousedown", block_event, false);
    node.addEventListener("touchend", eventHandler, false);
    node.addEventListener("mouseup", eventHandler, false);
}

export const block_event = function (event) {
    event.stopPropagation()
    event.preventDefault()
    return false;
}
