import React from "react";

import "../../styles/components/inputs/button.css";

export default function Button(props) {

    let classes = [];

    if(props.classes) {
        classes = ["button", ...props.classes];
    } else {
        classes = ["button"];
    }

    let button = <button type={props.type || "button"} onClick={props.onClick}
    className={classes.join(" ")}>
        {props.children}
    </button>;

    return(
        <>
            {props.href
            ? <a href={props.href} target="_blank">{button}</a>
            : button}    
        </>
    );
}