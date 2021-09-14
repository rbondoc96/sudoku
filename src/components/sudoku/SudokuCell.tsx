import React from "react";

import {SudokuContext} from "../../context/SudokuContext";

const ROW_GROUPS: string[] = [
    "ROW_0", "ROW_1", "ROW_2",
    "ROW_3", "ROW_4", "ROW_5",
    "ROW_6", "ROW_7", "ROW_8", 
];

const COL_GROUPS: string[] = [
    "COL_0", "COL_1", "COL_2",
    "COL_3", "COL_4", "COL_5",
    "COL_6", "COL_7", "COL_8", 
];

const SG_GROUPS: string[] = [
    "SG_0", "SG_1", "SG_2",
    "SG_3", "SG_4", "SG_5",
    "SG_6", "SG_7", "SG_8", 
];

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
}

export default function SudokuCell(props) {
    const { gameCtx } = React.useContext(SudokuContext);
    const [grid, setGrid] = gameCtx.gridCtx;
    const setFocusGroups = gameCtx.focusCtx[1];

    var handleChange = event => {
        let target = event.currentTarget;
        let value = parseInt(event.nativeEvent.data);

        if(value < 0 || isNaN(value)) {
            value = 0;
        } else if(value > 9) {
            value = 9;
        }
        // Gets rid of leading zeros
        target.value = value;
        
        let buffer = [];
        for(let y = 0; y < 9; y++) {
            let row = [];
            for(let x = 0; x < 9; x++) {
                if(y == props.row && x == props.col) {
                    row.push(value)
                } else {
                    row.push(grid[y][x]);
                }
            }
            buffer.push(row);
        }
        setGrid(buffer);
        target.select();
    }

    var handleFocus = event => {
        let r0 = Math.floor(props.row / 3) * 3;
        let c0 = Math.floor(props.col / 3) * 3;

        setFocusGroups([
            ROW_GROUPS[props.row],
            COL_GROUPS[props.col],
            SG_GROUPS[SUBGRID_MAP[`${r0},${c0}`]],
        ]);
    }

    var handleBlur = event => {
        setFocusGroups([]);
    }

    var handleMEnter = event => {
        let target = event.currentTarget;
        let input = target.querySelector("input");
        input.setAttribute("type", "number");
    }

    var handleMLeave = event => {
        let target = event.currentTarget;
        let input = target.querySelector("input");

        if(input.value == 0) {
            input.setAttribute("type", "hidden");
        }
    }

    let classes = ["sudoku-grid-cell"];
    if(!props.isEditable) {
        classes.push("sudoku-grid-cell--static");        
    } else if(props.inFocusedGroup) {
        classes.push("sudoku-grid-cell--neighbor");
    } else if(props.inHintGroup) {
        classes.push("sudoku-grid-cell--hint");
    }

    return(
        <div 
        className={classes.join(" ")} id={`sudoku_${props.row}-${props.col}`}
        onMouseEnter={handleMEnter}
        onMouseLeave={handleMLeave}
        >
            <input 
                type={
                    grid[props.row][props.col] == 0
                    ? "hidden"
                    : "number"
                }
                min={0}
                max={9}
                value={grid[props.row][props.col]}          
                className="sudoku-grid-cell-input"
                disabled={(!props.isEditable || props.inHintGroup) || undefined}
                onBlur={(props.isEditable && handleBlur) || undefined}
                onFocus={(props.isEditable && handleFocus) || undefined}
                onChange={handleChange}
            />
        </div>
    )
}