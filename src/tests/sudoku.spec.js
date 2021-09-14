"use strict";
exports.__esModule = true;
var sudoku_1 = require("../sudoku_engine/sudoku");
var sudoku = new sudoku_1["default"]();
var game = sudoku.generate();
var solution = sudoku.getSolution();
console.log("====== Game Grid ========");
for (var row = 0; row < 9; row++) {
    console.log.apply(console, game[row]);
}
console.log("=========================");
console.log("===== Solution Grid =====");
for (var row = 0; row < 9; row++) {
    console.log.apply(console, solution[row]);
}
console.log("=========================");
