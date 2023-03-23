import React,{createContext, useContext, useState} from "react";

const PropContext = createContext();
 const StateContext=() => {
    const [text, setText] = useState("");
    return(
        <div>
            <input type ="text"
            onChange = {(e) => {setText(e.target.value);
            }}/>
            <PropContext.Provider value = {text}>
                <First/>
            </PropContext.Provider>
        </div>
)};

function First(){return(<div>첫째<Second/></div>)};
function Second(){return(<div>둘째<Third/></div>)};
function Third(){
    const content = useContext(PropContext);
    return(
        <div>
            <h3>셋째{content}</h3>
            <h3>{content}</h3>
        </div>
    )
};
