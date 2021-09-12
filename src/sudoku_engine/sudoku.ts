import React from "react"

import {getRandomInt, getRandomCoordinate} from "../utils/random";

export default class SudokuGenerator {
    
    private gameGrid: number[][];
    private solution: number[][];
    private staticCells: string[];

    constructor() {
        this.resetBoard();
    }

    resetBoard(): void {
        this.gameGrid = [];
        this.solution = [];
        this.staticCells = [];

        let emptyRow = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for(let row = 0; row < 9; row++) {
            this.gameGrid.push([...emptyRow]);
            this.solution.push([...emptyRow]);
            for(let col = 0; col < 9; col++) {
                this.staticCells.push(`${row},${col}`);
            }
        }
    }

    getGameGrid(): number[][] {
        return this.gameGrid;
    }

    setGameGrid(newGrid: number[][]): void {
        let grid = [];
        for(let y = 0; y < newGrid.length; y++) {
            let row = [];
            for(let x = 0; x < newGrid[y].length; x++) {
                row.push(newGrid[y][x]);
            }
            grid.push(row);
        }
        this.gameGrid = grid;
    }

    getSolution(): number[][] {
        return this.solution;
    }

    getStaticCells(): string[] {
        return this.staticCells;
    }

    isSolvedBy(grid): Boolean {
        for(let row = 0; row < 9; row++) {
            for(let col = 0; col < 9; col++) {
                if(grid[row][col] != this.solution[row][col]) {
                    return false;
                }
            }
        }
        return true;
    }

    /*
        Returns a 2D Sudoku board that is solveable
        After calling generate, getSolution() will return the solution
    */
    generate(clues: number=17): number[][] {
        if(clues < 17) {
            clues = 17;
        }
        if(clues > 80) {
            clues = 80;
        }

        this.findValidGrid(); // <- this.gameGrid set as random grid
        this.findValidSolution(); // <- Attempt to solve this.gameGrid, sets this.solution

        while(!(this.solutionIsValid() && this.hasNoZeros(this.solution))) {
            this.findValidGrid();
            this.findValidSolution();
        }

        let cluesToDelete = 81 - clues;
        while(cluesToDelete > 0) {
            let [row, col] = getRandomCoordinate();
            if(this.gameGrid[row][col] != 0) {
                this.gameGrid[row][col] = 0;
                
                let staticCell = `${row},${col}`;
                let cellIdx = this.staticCells.indexOf(staticCell);
                if(cellIdx > -1) {
                    this.staticCells.splice(cellIdx, 1)
                }
                cluesToDelete--;
            }
        }

        return this.gameGrid;
    }

    canPut(value, row, col, grid=this.gameGrid): Boolean {
        // Checking column
        for (let y = 0; y < 9; y++) {
            if (grid[y][col] == value) {
               return false;
            }
         }
         // Checking row
         for (let x = 0; x < 9; x++) {
            if (grid[row][x] == value) {
               return false;
            }
         }
         // Checking subgrid
         let x0 = Math.floor(col / 3) * 3;
         let y0 = Math.floor(row / 3) * 3;

         for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
               if (grid[y0 + y][x0 + x] == value) {
                  return false;
               }
            }
         }
         
         return true;
    }    

    /* 
        Sets this.gameGrid to a starting Sudoku grid
    */
    findValidGrid(): void {
        this.resetBoard(); // <- Resets this.gameGrid and this.solution to 0's, empties this.staticCells

        let placedClues = 0;
        while(placedClues < 17) {
            let [row, col] = getRandomCoordinate();

            if(this.gameGrid[row][col] == 0) {
                let value = getRandomInt(9) + 1;

                if(this.canPut(value, row, col, this.gameGrid)) {
                    this.gameGrid[row][col] = value;
                    this.solution[row][col] = value;
                    placedClues++;
                }
            }
        }
    }

    solutionIsValid(grid=this.solution): Boolean {
        return this.areRowsValid(grid) && 
        this.areColumnsValid(grid) && 
        this.areSubgridsValid(grid);
    }

    private areRowsValid(grid=this.gameGrid): Boolean {
        for(let y = 0; y < 9; y++) {
            var row = [];
            for(let x = 0; x < 9; x++) {
                let value = grid[y][x];
                if(row.includes(value)) {
                    return false;
                } else if(value != 0) {
                    row.push(value);
                }
            }
        }
        return true;
    }

    private areColumnsValid(grid=this.gameGrid): Boolean {
        for(let x = 0; x < 9; x++) {
            var column = [];
            for(let y = 0; y < 9; y++) {
                let value = grid[y][x];
                if(column.includes(value)) {
                    return false;
                } else if(value != 0){
                    column.push(value);
                }
            }
        }
        return true;
    }

    private areSubgridsValid(grid=this.gameGrid): Boolean {
        const window = [
            [0, 0], [0, 1], [0, 2],
            [1, 0], [1, 1], [1, 2],
            [2, 0], [2, 1], [2, 2],
        ];

        for(let row = 0; row < 9; row+=3) {
            for(let col = 0; col < 9; col+=3) {
                var subgrid = [];
                for(let i = 0; i < 9; i++) {
                    let coor = window[i];
                    let y = coor[0] + row;
                    let x = coor[1] + col;
                    
                    let value = grid[y][x];
                    if(subgrid.includes(value)) {
                        return false;
                    } else if (value != 0){
                        subgrid.push(value);
                    }
                }
            }
        }
        return true;
    }

    hasNoZeros(grid): Boolean {
        for(let row = 0; row < 9; row++) {
            for(let col = 0; col < 9; col++) {
                if(grid[row][col] == 0) {
                    return false;
                }
            }
        }
        return true;
    }

    findValidSolution(): Boolean {
        for(let row = 0; row < 9; row++) {
            for(let col = 0; col < 9; col++) {
                if(this.solution[row][col] == 0) {

                    for(let value = 1; value <= 9; value++) {
                        if(this.canPut(value, row, col, this.solution)) {
                            this.gameGrid[row][col] = value;
                            this.solution[row][col] = value;
                            this.findValidSolution();
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }    
}