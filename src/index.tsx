import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

document.title = "Sudoku";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
, document.getElementById("root"));