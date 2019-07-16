import {predicates} from "js/model/predicates";

const findCubeLines = function(cubePosition){
  var arrayCubes=[{axis:"X",line:[]},{axis:"Y",line:[]},{axis:"Z",line:[]}] ;

  var predicatesMatchingCube=[]
  for(var i=0;i<predicates.length;i++){
    if(predicates[i](cubePosition)){
      predicatesMatchingCube.push(predicates[i]);
    }
  }

  for(var i=0;i<27;i++){
    for(var c=0;c<predicatesMatchingCube.length;c++){
      if(predicatesMatchingCube[c](i)) arrayCubes[c].line.push(i)
    }
  }


  return arrayCubes;

}

export {findCubeLines}
