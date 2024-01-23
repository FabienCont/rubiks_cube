
var r = document.querySelector(':root');

const getCssVariable = function (id) {
    var rs = getComputedStyle(r);
    return rs.getPropertyValue(id);
}

const setCssVariable = function (id, value) {
    r.style.setProperty(id, value);
}

export { getCssVariable, setCssVariable }