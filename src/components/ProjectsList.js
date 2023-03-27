import React, {useState} from "react";
import Project from "./Project";

function ProjectList({ data, projectList, setProjectList }) {
    const [newProjectName, setNewProjectName] = useState('')
    const mapingprojects = projectList.map(project => {
        return <Project data={data} key={project.newProjectName} project={project.newProjectName}/>
    })
    // console.log(newProjectName)


    function handleSubmit(e) {
        e.preventDefault()
        const newProjectData = {
            newProjectName,
        }
        console.log(newProjectData)
        fetch("http://localhost:8000/projects", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newProjectData),
        })
        .then(r => r.json())
        .then(addedProject => {
            setProjectList([...projectList, addedProject])
        })
    }

 return (
    <div className="projectList">
        <h1>Projects</h1>
        <form onSubmit={handleSubmit} >
       
            <label>New Project Name&nbsp;
                <input 
                    type="text" 
                    value={newProjectName}
                    onChange={e => {
                        setNewProjectName(e.target.value)
                        // console.log(e.target.value)
                    }}
                />
            </label>
            <input 
                type="submit" 
            />
        </form>
        <div className="projectDiv">
            {mapingprojects}
        </div>
    </div>
 )
}

export default ProjectList;