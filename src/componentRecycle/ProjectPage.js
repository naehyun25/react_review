import React from "react";
import {projectPageData} from '../componentAssets/db.js';
import Project from "./Project";
import Card from "../componentUI/Card.js";

const ProjectPage =()=>{
    const {intro,ProjectsData} = projectPageData;
    const[projectData,setProjectData]=React.useState([]);
    React.useEffect(()=>{
        const cache=[];
        projectData.map(project=>cache.push(project));
        setProjectData(cache)

    },[])
    
    return(
        <Card>
            <h1>{intro}</h1>
            {ProjectsData.map((project,i)=>{
                return<Project key={i} img={project.image} name={project.name} desc={project.desc} tech={project.tech} git={project.git}/>
            })}
        </Card>
    )
};
export default ProjectPage;