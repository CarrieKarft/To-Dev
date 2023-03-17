import React from "react";

function Project({ project, data }) {
    // console.log(project)
    // console.log(data.project)
    const filteringData = data.filter(task => {
        return task.project === project
    })
    console.log(filteringData)

    return (
        <div>
            <h2>{project}</h2>
            {/* <h1>Projects List</h1>
            <card>React Project</card>
            <card>JavaScript Project</card>
            <card>Python Project</card> */}
            <ul>{filteringData.map(projectTask => <li key={projectTask.id}>{projectTask.task}</li>)}</ul>
        </div>
     )
}

export default Project;