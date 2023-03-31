import React from "react";

function ProjectTasks({ filteredTask, onDeleteTask }) {
    // console.log(filteredTask)
    return (
        <div>
            <p>{filteredTask.task}</p>
            <button onClick={() => onDeleteTask(filteredTask)}>Completed!</button>
        </div>
    )
}

export default ProjectTasks;