import React, {useState} from "react";

function NewTaskForm({ setData, data }) {
    const [task, setTask] = useState("")
    const [completeBy, setCompleteBy] = useState("")
    const [project, setProject] = useState("ReactProject")

    function handleSubmit(e) {
        e.preventDefault();
        const newTaskData = {
            task,
            completeBy,
            project
        }
        // console.log(newTaskData)
        fetch("http://localhost:8000/tasks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTaskData),
          })
          .then(r => r.json())
          .then(addedTask => {
            console.log(addedTask)
            setData([...data, addedTask])
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add A New Task</h2>
                <label>Task Name:
                    <input 
                    type="text" 
                    value={task}
                    onChange={e => {
                        setTask(e.target.value)
                    }}
                    />
                </label>

                <select
                    value={project}
                    onChange={e => {
                        setProject(e.target.value)
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
                    }}
                     />
                </label>

                <input type="submit" />

            </form>
        </div>
     )
}

export default NewTaskForm;