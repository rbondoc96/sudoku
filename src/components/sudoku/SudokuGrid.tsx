import React from "react";

import SudokuRow from "./SudokuRow";
import SudokuCell from "./SudokuCell";
import {SudokuContext} from "../../context/SudokuContext";

/* Mapping subgrid based on initial points
"0,0" - Subgrid 0
"0,3" - Subgrid 1
...
"6,3" - Subgrid 7
"6,6" - Subgrid 8
*/
const SUBGRID_MAP: object = {
    "0,0": 0,
    "0,3": 1,
    "0,6": 2,
    "3,0": 3,
    "3,3": 4,
    "3,6": 5,
    "6,0": 6,
    "6,3": 7,
    "6,6": 8,
};

export default function SudokuGrid() {
    
    const { gameCtx } = React.useContext(SudokuContext);
    const grid = gameCtx.gridCtx[0];
    const focusGroups = gameCtx.focusCtx[0];
    const staticCells = gameCtx.staticCtx[0];
    const hints = gameCtx.hintCtx[0];
    
    return(
        <div className="sudoku-grid">
            <div className="sudoku-grid-container">
                {grid && grid.map((row, idx) => {
                    let elements = []
                    for(let col = 0; col < row.length; col++) {
                        let rowGroup = `ROW_${idx}`;
                        let colGroup = `COL_${col}`;

                        let r0 = Math.floor(idx / 3) * 3;
                        let c0 = Math.floor(col / 3) * 3;
                        let sgGroup = `SG_${SUBGRID_MAP[`${r0},${c0}`]}`;

                        let canEdit = !staticCells.includes(`${idx},${col}`);

                        let willFocus = focusGroups.includes(rowGroup) ||
                        focusGroups.includes(colGroup) ||
                        focusGroups.includes(sgGroup);

                        let isHint = hints.includes(`${idx},${col}`);

                        elements.push(<SudokuCell 
                            key={`sudoku-cell-${idx},${col}`}
                            row={idx}
                            col={col}
                            isEditable={canEdit || undefined}
                            inFocusedGroup={willFocus || undefined}
                            inHintGroup={isHint || undefined}
                        />);
                    }
                    
                    return(
                        <SudokuRow key={`sudoku-row-${idx}`}>
                            {elements}
                        </SudokuRow>
                    );
                })}
            </div>
        </div>
    )
}