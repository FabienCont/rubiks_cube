
const setTranslate=function(node,translate){
  node.style.transform="translateX("+translate.x+") translateY("+translate.y+") translateZ("+ translate.z +")";
}

const setBackgroundColor=function(node,backgroundColor){
  node.style.backgroundColor=backgroundColor;
}

const setScale3d=function(scale){
  node.style.transform="scale3d("+scale+","+scale+","+scale+")";
}

const setSize=function(node,height,width){
  setHeight(node,height);
  setWidth(node,width);
}

const setHeight=function(node,height){
  node.style.height=height;
}

const setWidth=function(width){
  node.style.width=width;
}
export {
setTranslate,
setBackgroundColor,
setScale3d,
setSize,
setHeight,
setWidth,
}
