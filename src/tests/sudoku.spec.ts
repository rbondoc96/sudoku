import Sudoku from "../sudoku_engine/sudoku";

const sudoku = new Sudoku();
let game: number[][] = sudoku.generate();
let solution: number[][] = sudoku.getSolution();

console.log("====== Game Grid ========")
for(let row = 0; row < 9; row++) {
    console.log(...game[row]);
}
console.log("=========================")


console.log("===== Solution Grid =====")
for(let row = 0; row < 9; row++) {
    console.log(...solution[row]);
}
console.log("=========================")