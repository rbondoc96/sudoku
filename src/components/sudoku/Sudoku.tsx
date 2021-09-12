import React from "react";

import SudokuGrid from "./SudokuGrid";
import SudokuPanel from "./SudokuPanel";

import "../../styles/components/sudoku/index.css";

export default function Sudoku() {

    return(
        <div className="sudoku">
            <div className="sudoku-container">
                <SudokuPanel />
                <SudokuGrid />
            </div>
        </div>
    )
}