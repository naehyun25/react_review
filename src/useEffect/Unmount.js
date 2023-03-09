import React, {useState, useEffect} from "react";

function UnEffect(){
    useEffect(()=>{
        console.log("마운트됨")//unmount!!
    },[]);

    return(
        <>
            <p>보여지는컨텐츠</p>
        </>
    )

};


function Unmount(){
    const[show , setShow] = useState(false);
    const toggle=()=>{
        console.log(show);
        setShow(!show); 
        //초기값 false 일때 !show = true
        console.log(show, UnEffect)
    };

    return(
    <>
        <button onClick={toggle}>show / unshow</button>
        {show || <UnEffect />
        }
    </>
    )
}

export {UnEffect, Unmount};