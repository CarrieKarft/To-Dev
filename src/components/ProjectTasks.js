import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";

function ProjectTasks({ data, onDeleteTask }) {
    const [projectMatch, setProjectMatch] = useState(null);

    const { id } = useParams()
    
    useEffect(() => {
        fetch(`http://localhost:8000/projects/${id}`)
        .then(r => r.json())
        .then(data => setProjectMatch(data))
    },[id])

    if (!projectMatch) return <h2>Loading...</h2>
 
    const { projectName, projectDetails } = projectMatch
    const taskMap = data.map(task => {
        if (task.project === projectName) {
            return (
                <div key={task.id} className="task">
                    <h4><strong>Task:</strong> {task.task}</h4>
                    <p><strong>Complete By:</strong> {task.completeBy}</p>
                    <button onClick={() => onDeleteTask(task)}>Completed!</button>
                </div>
            )
        } 
        return null
    })
    
 
    return (
        <div className="taskProject">
            <h1>{projectName}</h1>
            <h3>{projectDetails}</h3>
            <h2>{projectName} Tasks</h2>
            <ul>{taskMap}</ul>
            <Link to="/new-task-form">To Add A Task Click Here</Link>
       
        </div>
    )
}

export default ProjectTasks;