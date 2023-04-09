import React, {useState} from "react";
import Project from "./Project";
import ProjectForm from "./ProjectForm";

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
        <ProjectForm newProjectName={newProjectName} projectDetails={projectDetails} setNewProjectName={setNewProjectName} setProjectDetails={setProjectDetails} onHandleSubmit={handleSubmit}/>
        <h1>Projects</h1>
        <div className="projectDiv">
            {mapingprojects}
        </div>
    </div>
 )
}

export default ProjectList;