import React from "react";
// import {useParams} from "react-router-dom"

function ProjectTasks({ data, projectList }) {

    const id = 1
    // console.log(projectList)
    const findingProject = projectList.filter(project => project.id === id).map(project => {
        console.log(project)
        return (
            <div key={project.id}>
            <h2>{project.newProjectName}</h2>
            <p>{project.projectDetails}</p>
            </div>
        )
    })
    // console.log(findingProject)
    // const matchingTasksToProject = 
    return (
        <div>
         {findingProject}
        </div>
    )
}

export default ProjectTasks;