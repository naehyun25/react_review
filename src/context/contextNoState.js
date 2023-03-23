import React, {createContext, useContext} from "react";

const PropContext = createContext(); //context생성 후 상수에 할당

const PropsContext = () => {
    return(
        <div>
            <PropContext.Provider value="prop">
                <First/>
            </PropContext.Provider>
        </div>
    )
};

function First(){
    return(
        <div>
            <h3>첫째</h3>
            <Second/>
        </div>
    )
};
function Second(){
    return(
        <div>
            <h3>둘째</h3>
            <Third/>
        </div>
    )
};
function Third(){
    const content = useContext(PropContext);
    return(
        <div>
            <h3>셋째{content}</h3>
            <Third/>
        </div>
    )
};
