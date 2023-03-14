import React from "react";
import classes from "./Test.module.css";

const Test =(props) => {
    let {text, classname} = props;

    return(
    <>
        <div className={classes.div}  >test1{text}</div>
    </>
    )

}

export default Test;