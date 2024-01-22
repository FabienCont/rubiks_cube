
// Function to generate a random integer in a specified range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random scramble sequence for a Rubik's Cube
export function generateScrambleSequence(length) {
    const moves = ['U', 'D', 'L', 'R', 'F', 'B', 'M','E','S']; // Up, Down, Left, Right, Front, Back, Middle, Equator, Standing
    const modifiers = ['', "'", '2']; // clockwise, Counter-clockwise, 180 degrees

    let scramble = [];

    for (let i = 0; i < length; i++) {
        const randomMove = moves[getRandomInt(0, moves.length - 1)];
        const randomModifier = modifiers[getRandomInt(0, modifiers.length - 1)];

        scramble.push(randomMove + randomModifier);
    }
    console.log(scramble);
    return scramble // Combine moves into a string
}

