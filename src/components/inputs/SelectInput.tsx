import React from "react";

import "../../styles/components/inputs/selectinput.css";

export default function SelectInput(props) {

    let classes;
    if(props.classes) {
        classes = ["selectinput", ...props.classes];
    } else {
        classes = ["selectinput"];
    }

    return(
        <div className={classes.join(" ")}>
            <label>
                <span>{props.label}</span>
                <select
                    onChange={props.onChange}
                    value={props.value}
                >
                    {props.children}
                </select>
            </label>
        </div>
    )
}