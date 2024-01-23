export const parseColorCss = (colorCss) => {
    return rgba2hex(colorToRGBA(colorCss));
}

var canvas = document.createElement('canvas');
canvas.width = canvas.height = 1;
var ctx = canvas.getContext('2d', { willReadFrequently: true });


const rgba2hex = function (rgba) {
    let hex = (rgba[0] | 1 << 8).toString(16).slice(1) +
        (rgba[1] | 1 << 8).toString(16).slice(1) +
        (rgba[2] | 1 << 8).toString(16).slice(1);
    return "#" + hex;
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

export const alphaFloatToHex = function (alphaFloat) {
    try {
        return Math.round(alphaFloat).toString(16);
    } catch (err) {
        console.warn("error converting alpha value");
        return "FF"
    }

}

export const getRandomFactor = function(){
    return Math.random() * 360
}

export const getRandomColor3 = function(randFactor,colorNum, colors) {
    if (colors < 1) colors = 1;
    return hslToHex((colorNum * (360 / colors) % 360), getRandomInt(60,100), getRandomInt(40,70))
}
export const getRandomColor2 = function(randFactor,colorNum, colors) {
    if (colors < 1) colors = 1;
    var hue = (randFactor +(colorNum* 137.508)) % 360
    return hslToHex(hue, getRandomInt(40,100), getRandomInt(0,100))
}
export const getRandomColor= function(randFactor,colorNum) {
    const hue = randFactor+ colorNum* 137.508; // use golden angle approximation
    return hslToHex(hue, getRandomInt(60,100), getRandomInt(40,70))
}

export const getRandomAlpha= function() {
    return getRandomInt(0,7) == 4 ? getRandomInt(156,255):255
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }


const hslToHex = function (h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}