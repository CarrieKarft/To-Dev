import React from "react";

function ProjectForm({ newProjectName, setNewProjectName, projectDetails, setProjectDetails, onHandleSubmit}) {
    return (
        <form onSubmit={onHandleSubmit} >
       
            <label>New Project Name&nbsp;
                <input 
                    className="projectName"
                    type="text" 
                    value={newProjectName}
                    onChange={e => {
                        setNewProjectName(e.target.value)
                        // console.log(e.target.value)
                    }}
                />
            </label>
            <label>Project Details and Description&nbsp;
                <textarea 
                    className="details"
                    type="text" 
                    value={projectDetails}
                    onChange={e => {
                        setProjectDetails(e.target.value)
                    }}
                />
            </label>
            <input 
                type="submit" 
            />
        </form>
    )
}

export default ProjectForm;