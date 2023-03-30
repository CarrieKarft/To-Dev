import React from "react";

function ProjectTasks({ filteredTask }) {
    console.log(filteredTask)
    return (
        <div>
            <p>{filteredTask.task}</p>
        </div>
    )
}

export default ProjectTasks;