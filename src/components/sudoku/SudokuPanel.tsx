import React from "react";

import {SudokuContext} from "../../context/SudokuContext";

import Button from "../inputs/Button";
import TextInput from "../inputs/TextInput";
import SelectInput from "../inputs/SelectInput";

import {getRandomCoordinate} from "../../utils/random";

export default function SudokuPanel() {
    
    const { gameCtx } = React.useContext(SudokuContext);
    const [numClues, setNumClues] = React.useState(17); 
    const [grid, setGrid] = gameCtx.gridCtx;
    const [solution, setSolution] = gameCtx.solutionCtx;
    const setStaticCells = gameCtx.staticCtx[1];
    const [hints, setHints] = gameCtx.hintCtx;

    const sudoku = gameCtx.engineCtx[0];

    const changeClues = event => {
        let target = event.currentTarget;
        let value = parseInt(target.value);
        if(value < 17 || isNaN(value)) {
            setNumClues(17);
        } else if(value > 80) {
            setNumClues(80);
        } else {
            setNumClues(value);
        }
    }
    
    const setStatusText = (text) => {
        alert(text);
    }

    const changeGrid = event => {
        if(!confirm(`Do you want a new Sudoku grid with ${numClues} clues?`)) {
            return;
        }

        let clues = numClues;
        if(clues < 17) {
            clues = 17;
        } else if(clues > 80) {
            clues = 80;
        }
        let game = sudoku.generate(clues);
        let answers = sudoku.getSolution();
        let staticCells = sudoku.getStaticCells();

        setGrid(game);
        setSolution(answers);
        setStaticCells(staticCells);
        setStatusText("Enjoy!");
    }
    
    const restartGrid = event => {
        let allZeros = true;
        for(let y = 0; y < grid.length; y++) {
            let row = grid[y];
            for(let x = 0; x < row.length; x++) {
                if(row[x] != 0) {
                    allZeros = false;
                    break;
                }
            }
        }
        if(allZeros) {
            setStatusText("You haven't started a game yet. Press \"Generate Grid\" to start a new game.");
            return;
        }        
        
        if(!confirm("Reset the grid?")) {
            return;
        }

        let game = sudoku.getGameGrid();
        let staticGroup = sudoku.getStaticCells();
        
        // "Empty" grid has 81 static cells
        if(staticGroup.length == 81) {
            staticGroup = [];
        }

        setGrid(game);
        setHints([]);
        setStaticCells(staticGroup);
        setStatusText("Cleared Sudoku grid.");
    }

    const solveGrid = event => {      
        let allZeros = true;
        for(let y = 0; y < grid.length; y++) {
            let row = grid[y];
            for(let x = 0; x < row.length; x++) {
                if(row[x] != 0) {
                    allZeros = false;
                    break;
                }
            }
        }
        if(allZeros) {
            setStatusText("You haven't started a game yet. Press \"Generate Grid\" to start a new game.");
            return;
        }          
        
        let isCorrect = true;
        let hasZeros = false;
        for(let row = 0; row < 9; row++) {
            let nums = grid[row];
            if(nums.includes(0)) {
                hasZeros = true;
                break;
            }

            for(let col = 0; col < 9; col++) {
                if(nums[col] != solution[row][col]) {
                    isCorrect = false;
                }
            }
        }

        /*
            Account for solution that is valid, but doesn't match the stored solution grid
        */
        if(!isCorrect && sudoku.solutionIsValid(grid)) {
            isCorrect = true;
        }

        if(hasZeros) {
            setStatusText("Looks like you have some empty cells!");  
        } else {
            if(isCorrect) {
                setStatusText("Congratulations, you solved the Sudoku!");
            } else {
                setStatusText("Sorry, try again.");
            }
        }     
    }

    const revealHint = event => {
        let allZeros = true;
        for(let y = 0; y < grid.length; y++) {
            let row = grid[y];
            for(let x = 0; x < row.length; x++) {
                if(row[x] != 0) {
                    allZeros = false;
                    break;
                }
            }
        }
        if(allZeros) {
            setStatusText("You haven't started a game yet. Press \"Generate Grid\" to start a new game.");
            return;
        }
        if(sudoku.isSolvedBy(grid)) {
            setStatusText("Oops! Looks like the Sudoku is already solved.");
            return;
        }

        // Don't want a cell that is already filled/non-zero
        let [sRow, sCol] = getRandomCoordinate();
        while(grid[sRow][sCol] != 0) {
            [sRow, sCol] = getRandomCoordinate();
        }

        // Add hint into the current grid
        let value = solution[sRow][sCol];
        let newGrid = [];
        for(let y = 0; y < 9; y++) {
            let row = [];
            for(let x = 0; x < 9; x++) {
                if(y == sRow && x == sCol) {
                    row.push(value)
                } else {
                    row.push(grid[y][x]);
                }
            }
            newGrid.push(row);
        }
        // Change cell color of a hinted cell
        let hintGroup = [...hints];
        hintGroup.push(`${sRow},${sCol}`);

        setGrid(newGrid);
        setHints(hintGroup);

        alert(`The cell (${sRow+1}, ${sCol+1}) is ${value}`);
    }


    let clueOptions = [];
    for(let n = 17; n <= 80; n++) {
        clueOptions.push(n);
    }

    return(
        <div className="sudoku-panel">
            <div className="sudoku-panel-container">
                <div className="sudoku-panel-header">
                    <h1>Sudoku</h1>
                </div>
                <div className="sudoku-panel-form">
                    <SelectInput
                        label="# of Clues"
                        value={numClues}
                        onChange={changeClues}
                    >
                        {clueOptions.map((option, idx) => {
                            return(
                                <option key={`clue-${idx}`} value={option}>
                                    {option}
                                </option>
                            )
                        })}
                    </SelectInput>
                    <div className="sudoku-panel-buttons">
                        <div className="sudoku-panel-buttons-container">
                                <Button onClick={changeGrid}>
                                    Generate Grid
                                </Button>
                                <Button onClick={solveGrid}>
                                    Check Solution
                                </Button>     
                                <Button onClick={restartGrid}>
                                    Restart Grid
                                </Button>
                                <Button onClick={revealHint}>
                                    Reveal Hint
                                </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}