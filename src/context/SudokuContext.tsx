import React, {createContext, useState} from "react";
import Sudoku from "../sudoku_engine/sudoku";

export const SudokuContext: React.Context<any> = createContext({});
SudokuContext.displayName = "SudokuContext";

export function SudokuProvider({children}) {

    const [grid, setGrid] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]);
    const [solution, setSolution] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]);
    const [focusGroups, setFocusGroups] = useState([]);
    const [staticCells, setStaticCells] = useState([]);
    const [hints, setHints] = useState([]);
    const [sudoku, setSudoku] = useState(new Sudoku()); 

    return(
        <SudokuContext.Provider value={{
            gameCtx: {
                gridCtx: [grid, setGrid],
                focusCtx: [focusGroups, setFocusGroups],
                staticCtx: [staticCells, setStaticCells],
                solutionCtx: [solution, setSolution],
                hintCtx: [hints, setHints],
                engineCtx: [sudoku, setSudoku],
            }
        }}>
            {children}
        </SudokuContext.Provider>
    );
}