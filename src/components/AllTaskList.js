import React from "react";

function AllTasksList({ data, onDeleteTask }) {

    const taskMap = data.map(taskData => {
        return (
            <div key={taskData.id} className="task">
                <h4>{taskData.task.toUpperCase()}</h4>
                <p>Project Name: {taskData.project}</p>
                <p>Complete By: {taskData.completeBy}</p>
                <button onClick={() => onDeleteTask(taskData)}>Completed!</button>
            </div>
        )
    })

    return (
        <div className="tasklist">
            <h1>All Tasks</h1>
            <div>
                {taskMap}
            </div>
        </div>
     )
}

export default AllTasksList;