import React from "react";

import "../../styles/components/inputs/textinput.css";

export default function TextInput(props) {

    var classes = [];
    if(props.classes) {
        classes = ["textinput", ...props.classes];
    } else {
        classes = ["textinput"];
    }

    return(
        <div className={classes.join(" ")}>
            <label>
                <span className="textinput-label">{props.label || "Label"}</span>
                <input 
                className="textinput-input" 
                type={props.type || "text"} 
                value={props.value || ""} 
                onBlur={props.onBlur}
                onChange={props.onChange} 
                min={props.min || undefined} 
                max={props.max || undefined}/>
                {props.showHelper && <span className="textinput-helper">{props.helper || "Helper"}</span>}
            </label>
        </div>
    );
}