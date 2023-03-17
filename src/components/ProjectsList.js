import React from "react";
import Project from "./Project";

function ProjectList({ data }) {
    // console.log(data)
    const projects = ["React App", "JavaScript App", "Python App"]
    const mapingprojects = projects.map(project => {
        return <Project data={data} key={project} project={project}/>
    })
    // const filteringData = data.filter(task => {
    //     if (task.project === task.project){
    //         return task
    //     }
        
    // })
    // console.log(filteringData)

 return (
    <div>
        <h1>Projects List</h1>
            {/* <div>React Project</div>
            <div>JavaScript Project</div>
            <div>Python Project</div> */}
            {mapingprojects}
    </div>
 )
}

export default ProjectList;