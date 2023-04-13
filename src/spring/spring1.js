import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import "./spring.css"

function Number ({n}){
    const {number} = useSpring({
        from:{number:0},
        number:n,
        delay:200,
        config:{mass:1, tension:20, friction:26},
    });
    return  <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>
}

const Spring =()=>{
    return(
    <>
        <div style={{fontSize:24}}>
            <Number n={100}/>
        </div>

    </>)
};

export default Spring;