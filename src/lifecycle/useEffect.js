import React from "react";
//{useState,useEffect} 안부르면 아래에서 React.useState로 쓴다(R -> 대문자)
const Effect = ()=>{
    let [state, setState] = React.useState(0);
//1)
    React.useEffect(()=>{
        console.log("처음만나와요(DidMount)");
    },[]);
//2)
    React.useEffect(()=>{
        console.log("업데이트되면나와요(Didupdate)");
    });
//3. update시 , dependency array에 값을 넣으면 콜백
    React.useEffect(()=>{
        console.log(`업데이트-콜백= updete:${state}`);
        if(state>5){
            setState(0);
        }
    },[state]);//state의 값을 가져와서 비교
    
    return(
        <>
{/* 인라인으로 스타일지정하는 방법{{객체표기법}} */}
        <div style ={{padding: 50, backgroundColor:"coral"}}>
        <h1>{state}</h1>
{/* 위의 방식과 다르게 함수를 직접사용가능{객체,함수,js문법사용} */}
        <button onClick={()=>{
            setState(state + 1);
        }}>클릭+1</button>
        </div>
        </>
    )
};
export default Effect;