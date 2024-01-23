export const parseColorCss = (colorCss) => {
    return rgba2hex(colorToRGBA(colorCss));
}

var canvas = document.createElement('canvas');
canvas.width = canvas.height = 1;
var ctx = canvas.getContext('2d');


const rgba2hex = function (rgba) {
    let hex = (rgba[0] | 1 << 8).toString(16).slice(1) +
            (rgba[1] | 1 << 8).toString(16).slice(1) +
            (rgba[2] | 1 << 8).toString(16).slice(1);
    console.log(hex);
    return "#"+hex;
}

const colorToRGBA = function (col) {
    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = '#000';
    ctx.fillStyle = col;
    var computed = ctx.fillStyle;
    ctx.fillStyle = '#fff';
    ctx.fillStyle = col;
    if (computed !== ctx.fillStyle) {
        return; // invalid color
    }
    ctx.fillRect(0, 0, 1, 1);
    return [...ctx.getImageData(0, 0, 1, 1).data];
}