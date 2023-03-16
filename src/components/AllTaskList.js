import React from "react";

function AllTasksList({ data }) {
    console.log(data)
    const taskMap = data.map(taskData => {
        return (
            <li key={taskData.id}>
                <h4>{taskData.task.toUpperCase()}</h4>
                <p>Project Name: {taskData.project}</p>
                <p>Complete By: {taskData.completeBy}</p>
            </li>
        )
    })

    return (
        <div>
            <h1>All Tasks</h1>
            <ul>
                {taskMap}
            </ul>
        </div>
     )
}

export default AllTasksList;