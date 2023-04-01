import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function ProjectTasks({ data, onDeleteTask }) {
    const [projectMatch, setProjectMatch] = useState(null);

    const { id } = useParams()
    // console.log(params)

    // const id = 3
    useEffect(() => {
        fetch(`http://localhost:8000/projects/${id}`)
        .then(r => r.json())
        .then(data => setProjectMatch(data))
    },[id])

    if (!projectMatch) return <h2>Loading...</h2>
    // console.log(projectMatch)
    const { projectName, projectDetails } = projectMatch
    console.log(projectName)
    console.log(projectDetails)
    const taskMap = data.map(task => {
        if (task.project === projectName) {
            return (
                <div key={task.id} className="task">
                    <h4>{task.task}</h4>
                    <p>{task.completeBy}</p>
                    <button onClick={() => onDeleteTask(task)}>Completed!</button>
                </div>
            )
        }
        return null
    })

    // console.log(projectMatch.newProjectName)
 
 
    return (
        <div className="taskProject">
            <h1>{projectName}</h1>
            <h3>{projectDetails}</h3>
            <h2>{projectName} Tasks</h2>
            <ul>{taskMap}</ul>
       
        </div>
    )
}

export default ProjectTasks;