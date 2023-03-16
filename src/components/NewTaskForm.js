import React from "react";

function NewTaskForm() {
    return (
        <div>
            <form>

                <label>Task Name:
                    <input 
                    type="text" 
                    // value={taskName}
                    />
                </label>

                <select>
                    <option defaultValue="ReactProject">React Project</option>
                    <option value="JavaScriptProject">JavaScript Project</option>
                    <option value="PythonProject">Python Project</option>
                </select>

                <label>Complete By:
                    <input 
                    type="text"
                    // value={CompleteBy}
                     />
                </label>

                <input type="submit" />

            </form>
        </div>
     )
}

export default NewTaskForm;