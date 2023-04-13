import React,{useState,useEffect,useRef} from 'react';
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
    const numberRef = useRef(null);
    const [isAnimated, setIsAnimated] = useState(false);
    useEffect(()=>{
        const onScroll=()=>{
            const targetPosition = numberRef.current.offsetTop+numberRef.current.offsetHeight/2;
            const currentPosition = window.pageYOffset+window.innerHeight; 
            if(!isAnimated && currentPosition>=targetPosition){
                setIsAnimated(true);
            }
        };
        window.addEventListener("scroll",onScroll)
    },[])
    return(
    <div>
        <div className="section"></div>
            <h1 ref={numberRef}>
                {isAnimated && <Number n={100}/> }</h1>
    </div>
    )
};

export default Spring;