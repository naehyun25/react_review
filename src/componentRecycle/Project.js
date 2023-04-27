import React from "react";
import "./project.css"
import Card from '../componentUI/Card';

const Project=({img,name,desc,tech,git})=>{
    return(
        <Card className="project">
            <Card className="center"> 
                <img src={img} alt=""/>
                <h3>{name}</h3>
                <button><a href="/">{git}</a></button>
                <ul>
                    <li>Desc:{desc}</li>
                    <li>Tech:{tech}</li>
                </ul>
            </Card>
        </Card>
    )
};
export default Project;