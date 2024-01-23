export const addEventListenerToNode = function (node, eventHandler) {
    node.addEventListener("touchstart", block_event, false);
    node.addEventListener("mousedown", block_event, false);
    node.addEventListener("click", eventHandler, false);
}

export const addInputListenerToNode = function (node, eventHandler) {
    node.addEventListener("input", eventHandler, false);
}

export const block_event = function (event) {
    event.stopPropagation()
    return false;
}
