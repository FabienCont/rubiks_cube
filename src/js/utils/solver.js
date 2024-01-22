import { addSequence } from "js/cubeController";

const solve = function() {
    // CFOP Method: Programmatic solution steps
    solveCross();
    solveF2L();
    solveOLL();
    solvePLL();
}

const solveCross= function() {
    // Implement solving the cross on one face of the cube
    // Example: Turn the front face until a cross is formed
    console.log('Solving Cross');
   // var sequence = "F R U' R' U' F'".split(' ')
    var sequence = "F' L' U' L U F".split(' ')
    addSequence(sequence)
}

const solveF2L= function() {
    // Implement solving the first two layers
    // Example: Pair up and insert corner and edge pieces
    console.log('Solving F2L');
}

const solveOLL= function() {
    // Implement orienting the last layer
    // Example: Apply algorithms to orient the last layer
    console.log('Solving OLL');
}

const solvePLL= function() {
    // Implement permuting the last layer
    // Example: Apply algorithms to permute the last layer
    console.log('Solving PLL');
}

window.solve = solve
export { solve }