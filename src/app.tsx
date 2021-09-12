import React from "react";

import Sudoku from "./components/sudoku/Sudoku";
import {SudokuProvider} from "./context/SudokuContext";

import "./styles/theme.css";

export default function App() {
    
    return(<div className="App">
        <SudokuProvider>
            <div className="sudoku-wrapper">
                <Sudoku/>
            </div>
        </SudokuProvider>
    </div>)
}