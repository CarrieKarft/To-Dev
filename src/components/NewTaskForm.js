import React, {useState} from "react";
import {useHistory} from "react-router-dom";

function NewTaskForm({ setData, data, projectList }) {
    const [task, setTask] = useState("")
    const [completeBy, setCompleteBy] = useState("")
    const [project, setProject] = useState("React App")
    let history = useHistory();

    const inputStyling = {
        display: "block",
        width: "300px",
        padding: "6px",
        margin: "10px 6px 6px",
        left: "50%",
       
    };

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
            const newTaskData = [...data]
            newTaskData.unshift(addedTask)
            
            // console.log(addedTask)
            setData(newTaskData)
        })

        history.push("/all-tasks")
    }

    return (
        <div className=" newTask">
            <form 
            // style={formStyling}
            className="form"
            onSubmit={handleSubmit}
            >
                <h1>Add A New Task</h1>
                <label>Task Name:
                    <input 
                    // style={inputStyling}
                    type="text" 
                    value={task}
                    onChange={e => {
                        setTask(e.target.value)
                    }}
                    />
                </label>

                <select
                    // style={inputStyling}
                    className="select"
                    value={project}
                    onChange={e => {
                        setProject(e.target.value)
                    }}
                >   {projectList.map(project => <option value={project.newProjectName} key={project.newProjectName}>{project.newProjectName}</option>)}
                    {/* <option value="React App">React Project</option>
                    <option value="JavaScript App">JavaScript Project</option>
                    <option value="Python App">Python Project</option> */}
                </select>

                <label>Complete By:
                    <input 
                    // style={inputStyling}
                    type="text"
                    value={completeBy}
                    onChange={e => {
                        setCompleteBy(e.target.value)
                    }}
                     />
                </label>

                <input 
                // style={inputStyling}
                className="select"
                id="select"
                type="submit" 
                />

            </form>
        </div>
     )
}

export default NewTaskForm;