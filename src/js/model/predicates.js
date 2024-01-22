
//whiteCases
const isInUpFace = function (position) {
  return position < 9;
}

//redCases
const isInFrontFace = function (position) {
  return (position % 9) < 3;
}

//blueCases
const isInRightFace = function (position) {
  return (position + 1) % 3 === 0;
}

//greenCases
const isInLeftFace = function (position) {
  return position % 3 === 0;
}

//orangeCases
const isInBackFace = function (position) {
  return (position % 9) > 5;
}

//yellowCases
const isInDownFace = function (position) {
  return position > 17;
}

const isInMiddleFace = function (position) {
  return ((position - 1)) % 3 == 0
}

const isInEquatorFace = function (position) {
  return position > 8  && position < 18;
}

const isInStandingFace = function (position) {
  let pos = position % 9
  return pos >= 3  && pos <= 5
}

const predicates = [isInUpFace, isInFrontFace, isInRightFace, isInLeftFace, isInBackFace, isInDownFace];


export { predicates, isInUpFace, isInBackFace, isInFrontFace, isInRightFace, isInDownFace, isInLeftFace, isInMiddleFace, isInEquatorFace, isInStandingFace };
