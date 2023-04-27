import React from 'react';
import './Card.css';
//card 컴포넌트가 projectcard로의 props 을 막고 있어서 그걸 해결하는게 컴포지션
//모든 프롭이 통과할 수 있도록 한다.{props.children}
const Card = (props)=>{
    const classes=`card ${props.className}`;
    return(
        <div className={classes}>
            {props.children}
        </div>
    )
};
export default Card;