export const addEventListenerToNode = function (node, eventHandler) {
    node.addEventListener("touchstart", block_event, {passive:true});
    node.addEventListener("mousedown", block_event, false);
    node.addEventListener("touchend", eventHandler, {passive:true});
    node.addEventListener("mouseup", eventHandler, false);
}

export const block_event = function (event) {
    event.stopPropagation()
    event.preventDefault()
    return false;
}
