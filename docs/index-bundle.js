/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 423:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(294));
const Sudoku_1 = __importDefault(__webpack_require__(166));
const SudokuContext_1 = __webpack_require__(658);
__webpack_require__(896);
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(SudokuContext_1.SudokuProvider, null,
            react_1.default.createElement("div", { className: "sudoku-wrapper" },
                react_1.default.createElement(Sudoku_1.default, null)))));
}
exports.default = App;


/***/ }),

/***/ 551:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(294));
__webpack_require__(905);
function Button(props) {
    let classes = [];
    if (props.classes) {
        classes = ["button", ...props.classes];
    }
    else {
        classes = ["button"];
    }
    let button = react_1.default.createElement("button", { type: props.type || "button", onClick: props.onClick, className: classes.join(" ") }, props.children);
    return (react_1.default.createElement(react_1.default.Fragment, null, props.href
        ? react_1.default.createElement("a", { href: props.href, target: "_blank" }, button)
        : button));
}
exports.default = Button;


/***/ }),

/***/ 744:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(294));
__webpack_require__(484);
function SelectInput(props) {
    let classes;
    if (props.classes) {
        classes = ["selectinput", ...props.classes];
    }
    else {
        classes = ["selectinput"];
    }
    return (react_1.default.createElement("div", { className: classes.join(" ") },
        react_1.default.createElement("label", null,
            react_1.default.createElement("span", null, props.label),
            react_1.default.createElement("select", { onChange: props.onChange, value: props.value }, props.children))));
}
exports.default = SelectInput;


/***/ }),

/***/ 166:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(294));
const SudokuGrid_1 = __importDefault(__webpack_require__(897));
const SudokuPanel_1 = __importDefault(__webpack_require__(934));
__webpack_require__(590);
function Sudoku() {
    return (react_1.default.createElement("div", { className: "sudoku" },
        react_1.default.createElement("div", { className: "sudoku-container" },
            react_1.default.createElement(SudokuPanel_1.default, null),
            react_1.default.createElement(SudokuGrid_1.default, null))));
}
exports.default = Sudoku;


/***/ }),

/***/ 101:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(294));
const SudokuContext_1 = __webpack_require__(658);
const ROW_GROUPS = [
    "ROW_0", "ROW_1", "ROW_2",
    "ROW_3", "ROW_4", "ROW_5",
    "ROW_6", "ROW_7", "ROW_8",
];
const COL_GROUPS = [
    "COL_0", "COL_1", "COL_2",
    "COL_3", "COL_4", "COL_5",
    "COL_6", "COL_7", "COL_8",
];
const SG_GROUPS = [
    "SG_0", "SG_1", "SG_2",
    "SG_3", "SG_4", "SG_5",
    "SG_6", "SG_7", "SG_8",
];
const SUBGRID_MAP = {
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
function SudokuCell(props) {
    const { gameCtx } = react_1.default.useContext(SudokuContext_1.SudokuContext);
    const [grid, setGrid] = gameCtx.gridCtx;
    const setFocusGroups = gameCtx.focusCtx[1];
    var handleChange = event => {
        let target = event.currentTarget;
        let value = parseInt(event.nativeEvent.data);
        if (value < 0 || isNaN(value)) {
            value = 0;
        }
        else if (value > 9) {
            value = 9;
        }
        target.value = value;
        let buffer = [];
        for (let y = 0; y < 9; y++) {
            let row = [];
            for (let x = 0; x < 9; x++) {
                if (y == props.row && x == props.col) {
                    row.push(value);
                }
                else {
                    row.push(grid[y][x]);
                }
            }
            buffer.push(row);
        }
        setGrid(buffer);
        target.select();
    };
    var handleFocus = event => {
        let r0 = Math.floor(props.row / 3) * 3;
        let c0 = Math.floor(props.col / 3) * 3;
        setFocusGroups([
            ROW_GROUPS[props.row],
            COL_GROUPS[props.col],
            SG_GROUPS[SUBGRID_MAP[`${r0},${c0}`]],
        ]);
    };
    var handleBlur = event => {
        setFocusGroups([]);
    };
    var handleMEnter = event => {
        let target = event.currentTarget;
        let input = target.querySelector("input");
        input.setAttribute("type", "number");
    };
    var handleMLeave = event => {
        let target = event.currentTarget;
        let input = target.querySelector("input");
        if (input.value == 0) {
            input.setAttribute("type", "hidden");
        }
    };
    let classes = ["sudoku-grid-cell"];
    if (!props.isEditable) {
        classes.push("sudoku-grid-cell--static");
    }
    else if (props.inFocusedGroup) {
        classes.push("sudoku-grid-cell--neighbor");
    }
    else if (props.inHintGroup) {
        classes.push("sudoku-grid-cell--hint");
    }
    return (react_1.default.createElement("div", { className: classes.join(" "), id: `sudoku_${props.row}-${props.col}`, onMouseEnter: handleMEnter, onMouseLeave: handleMLeave },
        react_1.default.createElement("input", { type: grid[props.row][props.col] == 0
                ? "hidden"
                : "number", min: 0, max: 9, value: grid[props.row][props.col], className: "sudoku-grid-cell-input", disabled: (!props.isEditable || props.inHintGroup) || undefined, onBlur: (props.isEditable && handleBlur) || undefined, onFocus: (props.isEditable && handleFocus) || undefined, onChange: handleChange })));
}
exports.default = SudokuCell;


/***/ }),

/***/ 897:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(294));
const SudokuRow_1 = __importDefault(__webpack_require__(517));
const SudokuCell_1 = __importDefault(__webpack_require__(101));
const SudokuContext_1 = __webpack_require__(658);
const SUBGRID_MAP = {
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
function SudokuGrid() {
    const { gameCtx } = react_1.default.useContext(SudokuContext_1.SudokuContext);
    const grid = gameCtx.gridCtx[0];
    const focusGroups = gameCtx.focusCtx[0];
    const staticCells = gameCtx.staticCtx[0];
    const hints = gameCtx.hintCtx[0];
    return (react_1.default.createElement("div", { className: "sudoku-grid" },
        react_1.default.createElement("div", { className: "sudoku-grid-container" }, grid && grid.map((row, idx) => {
            let elements = [];
            for (let col = 0; col < row.length; col++) {
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
                elements.push(react_1.default.createElement(SudokuCell_1.default, { key: `sudoku-cell-${idx},${col}`, row: idx, col: col, isEditable: canEdit || undefined, inFocusedGroup: willFocus || undefined, inHintGroup: isHint || undefined }));
            }
            return (react_1.default.createElement(SudokuRow_1.default, { key: `sudoku-row-${idx}` }, elements));
        }))));
}
exports.default = SudokuGrid;


/***/ }),

/***/ 934:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(294));
const SudokuContext_1 = __webpack_require__(658);
const Button_1 = __importDefault(__webpack_require__(551));
const SelectInput_1 = __importDefault(__webpack_require__(744));
const random_1 = __webpack_require__(790);
function SudokuPanel() {
    const { gameCtx } = react_1.default.useContext(SudokuContext_1.SudokuContext);
    const [numClues, setNumClues] = react_1.default.useState(17);
    const [grid, setGrid] = gameCtx.gridCtx;
    const [solution, setSolution] = gameCtx.solutionCtx;
    const setStaticCells = gameCtx.staticCtx[1];
    const [hints, setHints] = gameCtx.hintCtx;
    const sudoku = gameCtx.engineCtx[0];
    const changeClues = event => {
        let target = event.currentTarget;
        let value = parseInt(target.value);
        if (value < 17 || isNaN(value)) {
            setNumClues(17);
        }
        else if (value > 80) {
            setNumClues(80);
        }
        else {
            setNumClues(value);
        }
    };
    const setStatusText = (text) => {
        alert(text);
    };
    const changeGrid = event => {
        if (!confirm(`Do you want a new Sudoku grid with ${numClues} clues?`)) {
            return;
        }
        let clues = numClues;
        if (clues < 17) {
            clues = 17;
        }
        else if (clues > 80) {
            clues = 80;
        }
        let game = sudoku.generate(clues);
        let answers = sudoku.getSolution();
        let staticCells = sudoku.getStaticCells();
        setGrid(game);
        setSolution(answers);
        setStaticCells(staticCells);
        setStatusText("Enjoy!");
    };
    const restartGrid = event => {
        let allZeros = true;
        for (let y = 0; y < grid.length; y++) {
            let row = grid[y];
            for (let x = 0; x < row.length; x++) {
                if (row[x] != 0) {
                    allZeros = false;
                    break;
                }
            }
        }
        if (allZeros) {
            setStatusText("You haven't started a game yet. Press \"Generate Grid\" to start a new game.");
            return;
        }
        if (!confirm("Reset the grid?")) {
            return;
        }
        let game = sudoku.getGameGrid();
        let staticGroup = sudoku.getStaticCells();
        if (staticGroup.length == 81) {
            staticGroup = [];
        }
        setGrid(game);
        setHints([]);
        setStaticCells(staticGroup);
        setStatusText("Cleared Sudoku grid.");
    };
    const solveGrid = event => {
        let allZeros = true;
        for (let y = 0; y < grid.length; y++) {
            let row = grid[y];
            for (let x = 0; x < row.length; x++) {
                if (row[x] != 0) {
                    allZeros = false;
                    break;
                }
            }
        }
        if (allZeros) {
            setStatusText("You haven't started a game yet. Press \"Generate Grid\" to start a new game.");
            return;
        }
        let isCorrect = true;
        let hasZeros = false;
        for (let row = 0; row < 9; row++) {
            let nums = grid[row];
            if (nums.includes(0)) {
                hasZeros = true;
                break;
            }
            for (let col = 0; col < 9; col++) {
                if (nums[col] != solution[row][col]) {
                    isCorrect = false;
                }
            }
        }
        if (!isCorrect && sudoku.solutionIsValid(grid)) {
            isCorrect = true;
        }
        if (hasZeros) {
            setStatusText("Looks like you have some empty cells!");
        }
        else {
            if (isCorrect) {
                setStatusText("Congratulations, you solved the Sudoku!");
            }
            else {
                setStatusText("Sorry, try again.");
            }
        }
    };
    const revealHint = event => {
        let allZeros = true;
        for (let y = 0; y < grid.length; y++) {
            let row = grid[y];
            for (let x = 0; x < row.length; x++) {
                if (row[x] != 0) {
                    allZeros = false;
                    break;
                }
            }
        }
        if (allZeros) {
            setStatusText("You haven't started a game yet. Press \"Generate Grid\" to start a new game.");
            return;
        }
        if (sudoku.isSolvedBy(grid)) {
            setStatusText("Oops! Looks like the Sudoku is already solved.");
            return;
        }
        let [sRow, sCol] = random_1.getRandomCoordinate();
        while (grid[sRow][sCol] != 0) {
            [sRow, sCol] = random_1.getRandomCoordinate();
        }
        let value = solution[sRow][sCol];
        let newGrid = [];
        for (let y = 0; y < 9; y++) {
            let row = [];
            for (let x = 0; x < 9; x++) {
                if (y == sRow && x == sCol) {
                    row.push(value);
                }
                else {
                    row.push(grid[y][x]);
                }
            }
            newGrid.push(row);
        }
        let hintGroup = [...hints];
        hintGroup.push(`${sRow},${sCol}`);
        setGrid(newGrid);
        setHints(hintGroup);
        alert(`The cell (${sRow + 1}, ${sCol + 1}) is ${value}`);
    };
    let clueOptions = [];
    for (let n = 17; n <= 80; n++) {
        clueOptions.push(n);
    }
    return (react_1.default.createElement("div", { className: "sudoku-panel" },
        react_1.default.createElement("div", { className: "sudoku-panel-container" },
            react_1.default.createElement("div", { className: "sudoku-panel-header" },
                react_1.default.createElement("h1", null, "Sudoku")),
            react_1.default.createElement("div", { className: "sudoku-panel-form" },
                react_1.default.createElement(SelectInput_1.default, { label: "# of Clues", value: numClues, onChange: changeClues }, clueOptions.map((option, idx) => {
                    return (react_1.default.createElement("option", { key: `clue-${idx}`, value: option }, option));
                })),
                react_1.default.createElement("div", { className: "sudoku-panel-buttons" },
                    react_1.default.createElement("div", { className: "sudoku-panel-buttons-container" },
                        react_1.default.createElement(Button_1.default, { onClick: changeGrid }, "Generate Grid"),
                        react_1.default.createElement(Button_1.default, { onClick: solveGrid }, "Check Solution"),
                        react_1.default.createElement(Button_1.default, { onClick: restartGrid }, "Restart Grid"),
                        react_1.default.createElement(Button_1.default, { onClick: revealHint }, "Reveal Hint")))))));
}
exports.default = SudokuPanel;


/***/ }),

/***/ 517:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(294));
function SudokuRow(props) {
    return (react_1.default.createElement("div", { className: "sudoku-grid-row" },
        react_1.default.createElement("div", { className: "sudoku-grid-row-container" }, props.children)));
}
exports.default = SudokuRow;


/***/ }),

/***/ 658:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SudokuProvider = exports.SudokuContext = void 0;
const react_1 = __importStar(__webpack_require__(294));
const sudoku_1 = __importDefault(__webpack_require__(543));
exports.SudokuContext = react_1.createContext({});
exports.SudokuContext.displayName = "SudokuContext";
function SudokuProvider({ children }) {
    const [grid, setGrid] = react_1.useState([
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
    const [solution, setSolution] = react_1.useState([
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
    const [focusGroups, setFocusGroups] = react_1.useState([]);
    const [staticCells, setStaticCells] = react_1.useState([]);
    const [hints, setHints] = react_1.useState([]);
    const [sudoku, setSudoku] = react_1.useState(new sudoku_1.default());
    return (react_1.default.createElement(exports.SudokuContext.Provider, { value: {
            gameCtx: {
                gridCtx: [grid, setGrid],
                focusCtx: [focusGroups, setFocusGroups],
                staticCtx: [staticCells, setStaticCells],
                solutionCtx: [solution, setSolution],
                hintCtx: [hints, setHints],
                engineCtx: [sudoku, setSudoku],
            }
        } }, children));
}
exports.SudokuProvider = SudokuProvider;


/***/ }),

/***/ 707:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(294));
const react_dom_1 = __importDefault(__webpack_require__(935));
const app_1 = __importDefault(__webpack_require__(423));
document.title = "Sudoku";
react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(app_1.default, null)), document.getElementById("root"));


/***/ }),

/***/ 543:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const random_1 = __webpack_require__(790);
class SudokuGenerator {
    constructor() {
        this.resetBoard();
    }
    resetBoard() {
        this.gameGrid = [];
        this.solution = [];
        this.staticCells = [];
        let emptyRow = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let row = 0; row < 9; row++) {
            this.gameGrid.push([...emptyRow]);
            this.solution.push([...emptyRow]);
            for (let col = 0; col < 9; col++) {
                this.staticCells.push(`${row},${col}`);
            }
        }
    }
    getGameGrid() {
        return this.gameGrid;
    }
    setGameGrid(newGrid) {
        let grid = [];
        for (let y = 0; y < newGrid.length; y++) {
            let row = [];
            for (let x = 0; x < newGrid[y].length; x++) {
                row.push(newGrid[y][x]);
            }
            grid.push(row);
        }
        this.gameGrid = grid;
    }
    getSolution() {
        return this.solution;
    }
    getStaticCells() {
        return this.staticCells;
    }
    isSolvedBy(grid) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (grid[row][col] != this.solution[row][col]) {
                    return false;
                }
            }
        }
        return true;
    }
    generate(clues = 17) {
        if (clues < 17) {
            clues = 17;
        }
        if (clues > 80) {
            clues = 80;
        }
        this.findValidGrid();
        this.findValidSolution();
        while (!(this.solutionIsValid() && this.hasNoZeros(this.solution))) {
            this.findValidGrid();
            this.findValidSolution();
        }
        let cluesToDelete = 81 - clues;
        while (cluesToDelete > 0) {
            let [row, col] = random_1.getRandomCoordinate();
            if (this.gameGrid[row][col] != 0) {
                this.gameGrid[row][col] = 0;
                let staticCell = `${row},${col}`;
                let cellIdx = this.staticCells.indexOf(staticCell);
                if (cellIdx > -1) {
                    this.staticCells.splice(cellIdx, 1);
                }
                cluesToDelete--;
            }
        }
        return this.gameGrid;
    }
    canPut(value, row, col, grid = this.gameGrid) {
        for (let y = 0; y < 9; y++) {
            if (grid[y][col] == value) {
                return false;
            }
        }
        for (let x = 0; x < 9; x++) {
            if (grid[row][x] == value) {
                return false;
            }
        }
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
    findValidGrid() {
        this.resetBoard();
        let placedClues = 0;
        while (placedClues < 17) {
            let [row, col] = random_1.getRandomCoordinate();
            if (this.gameGrid[row][col] == 0) {
                let value = random_1.getRandomInt(9) + 1;
                if (this.canPut(value, row, col, this.gameGrid)) {
                    this.gameGrid[row][col] = value;
                    this.solution[row][col] = value;
                    placedClues++;
                }
            }
        }
    }
    solutionIsValid(grid = this.solution) {
        return this.areRowsValid(grid) &&
            this.areColumnsValid(grid) &&
            this.areSubgridsValid(grid);
    }
    areRowsValid(grid = this.gameGrid) {
        for (let y = 0; y < 9; y++) {
            var row = [];
            for (let x = 0; x < 9; x++) {
                let value = grid[y][x];
                if (row.includes(value)) {
                    return false;
                }
                else if (value != 0) {
                    row.push(value);
                }
            }
        }
        return true;
    }
    areColumnsValid(grid = this.gameGrid) {
        for (let x = 0; x < 9; x++) {
            var column = [];
            for (let y = 0; y < 9; y++) {
                let value = grid[y][x];
                if (column.includes(value)) {
                    return false;
                }
                else if (value != 0) {
                    column.push(value);
                }
            }
        }
        return true;
    }
    areSubgridsValid(grid = this.gameGrid) {
        const window = [
            [0, 0], [0, 1], [0, 2],
            [1, 0], [1, 1], [1, 2],
            [2, 0], [2, 1], [2, 2],
        ];
        for (let row = 0; row < 9; row += 3) {
            for (let col = 0; col < 9; col += 3) {
                var subgrid = [];
                for (let i = 0; i < 9; i++) {
                    let coor = window[i];
                    let y = coor[0] + row;
                    let x = coor[1] + col;
                    let value = grid[y][x];
                    if (subgrid.includes(value)) {
                        return false;
                    }
                    else if (value != 0) {
                        subgrid.push(value);
                    }
                }
            }
        }
        return true;
    }
    hasNoZeros(grid) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (grid[row][col] == 0) {
                    return false;
                }
            }
        }
        return true;
    }
    findValidSolution() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (this.solution[row][col] == 0) {
                    for (let value = 1; value <= 9; value++) {
                        if (this.canPut(value, row, col, this.solution)) {
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
exports.default = SudokuGenerator;


/***/ }),

/***/ 790:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRandomCoordinate = exports.getRandomInt = void 0;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
exports.getRandomInt = getRandomInt;
function getRandomCoordinate() {
    let row = getRandomInt(9);
    let col = getRandomInt(9);
    return [row, col];
}
exports.getRandomCoordinate = getRandomCoordinate;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [935], () => (__webpack_require__(707)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;