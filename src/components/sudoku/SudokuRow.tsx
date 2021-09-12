import React from "react";

export default function SudokuRow(props) {

    return(
        <div className="sudoku-grid-row">
            <div className="sudoku-grid-row-container">
                {props.children}
            </div>
        </div>
    )
}