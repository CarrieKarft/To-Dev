import React, {useState} from "react";
import {useHistory} from "react-router-dom";

function NewTaskForm({ setData, data, projectList }) {
    const [task, setTask] = useState("")
    const [completeBy, setCompleteBy] = useState("")
    const [project, setProject] = useState("React App")

    let history = useHistory();


    function handleSubmit(e) {
        e.preventDefault();
        const newTaskData = {
            task,
            completeBy,
            project
        }
 
        fetch("http://localhost:8000/tasks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTaskData),
          })
          .then(r => r.json())
          .then(addedTask => {
            setData([...data, addedTask])
        })

        history.push("/")
    }

    return (
        <div className=" newTask">
            <form 
            className="form"
            onSubmit={handleSubmit}
            >
                <h1>Add A New Task</h1>
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
                    className="select"
                    value={project}
                    onChange={e => {
                        setProject(e.target.value)
                    }}
                >   {projectList.map(project => <option value={project.projectName} key={project.id}>{project.projectName}</option>)}
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

                <input 
                className="select"
                id="select"
                type="submit" 
                />

            </form>
        </div>
     )
}

export default NewTaskForm;