import React, {useState} from "react";
import Project from "./Project";

function ProjectList({ data, projectList, setProjectList, onDeleteTask }) {
    const [newProjectName, setNewProjectName] = useState('')
    const [projectDetails, setProjectDetails] = useState('')
    const mapingprojects = projectList.map(project => {
        return (
        <Project data={data} key={project.id} id={project.id} project={project.projectName} details={project.projectDetails} onDeleteTask={onDeleteTask}/>
        )
    })


    function handleSubmit(e) {
        e.preventDefault()
        const newProjectData = {
            projectName: newProjectName,
            projectDetails: projectDetails
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
        });
        setNewProjectName('');
        setProjectDetails('');
    }

 return (
    <div className="projectList">
        <h1>Projects</h1>
        <form onSubmit={handleSubmit} >
       
            <label>New Project Name&nbsp;
                <input 
                    className="projectName"
                    type="text" 
                    value={newProjectName}
                    onChange={e => {
                        setNewProjectName(e.target.value)
                        // console.log(e.target.value)
                    }}
                />
            </label>
            <label>Project Details and Description&nbsp;
                <textarea 
                    className="details"
                    type="text" 
                    value={projectDetails}
                    onChange={e => {
                        setProjectDetails(e.target.value)
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