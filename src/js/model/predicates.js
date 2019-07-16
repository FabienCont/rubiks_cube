
//whiteCases
const isInTopFace = function(position){
  return position<9;
}

//redCases
const isInFrontFace = function(position){
  return (position%9)<3;
}

//blueCases
const isInRightFace = function(position){
  return (position+1)%3===0;
}

//greenCases
const isInLeftFace = function(position){
  return position%3===0;
}

//orangeCases
const isInBackFace = function(position){
  return (position%9)>5;
}

//yellowCases
const isInBottomFace = function(position){
 return  position>17;
}

const predicates=[isInTopFace,isInFrontFace,isInRightFace,isInLeftFace,isInBackFace,isInBottomFace];


export {predicates};
