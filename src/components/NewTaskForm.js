import React, {useState} from "react";

function NewTaskForm() {
    const [taskName, setTaskName] = useState("")
    const [completeBy, setCompleteBy] = useState("")
    const [projectName, setProjectName] = useState("ReactProject")
    // console.log(taskName)

    // const newTaskData = {
    //     taskName,
    //     completeBy,
    //     projectName
    // }

    // console.log(newTaskData)
    function handleSubmit(e) {
        e.preventDefault();
        const newTaskData = {
            taskName,
            completeBy,
            projectName
        }
        console.log(newTaskData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add A New Task</h2>
                <label>Task Name:
                    <input 
                    type="text" 
                    value={taskName}
                    onChange={e => {
                        setTaskName(e.target.value)
                        // console.log(taskName)
                    }}
                    />
                </label>

                <select
                    value={projectName}
                    onChange={e => {
                        setProjectName(e.target.value)
                        // console.log(projectName)
                    }}
                >
                    <option value="ReactProject">React Project</option>
                    <option value="JavaScriptProject">JavaScript Project</option>
                    <option value="PythonProject">Python Project</option>
                </select>

                <label>Complete By:
                    <input 
                    type="text"
                    value={completeBy}
                    onChange={e => {
                        setCompleteBy(e.target.value)
                        // console.log(completeBy)
                    }}
                     />
                </label>

                <input type="submit" />

            </form>
        </div>
     )
}

export default NewTaskForm;