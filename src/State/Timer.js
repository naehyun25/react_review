import React, {useState} from "react";
//react 코어에서 react 모듈을 불러옴 -> hook(useState)는 공식 플러그인이라 불러와야함
//or let useTime = React.useState();
//라고 직접 불러올때는 import React from "react"; 라고쓴다.
function Timer(){
    //useState의 반환값을 이용하기 위해 변수에 할당
    let useTime = useState(0); // undefined
    // let time = useTime[0];
    // let setTime = useTime[1];
    let [time,setTime]=useTime;
    //초기값, setState 라는 함수 반환

    let updateTime=() => {
        setTime(time +1);
        if(time>=10){
            setTime(0)
        };
    }
    return(
    <>
    <h3>{time}초</h3>
    <button onClick={updateTime}>1씩 올려주세요</button>
    </>
    );
}
export default Timer;