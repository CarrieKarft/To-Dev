import React, {useState} from "react";
import Project from "./Project";

function ProjectList({ data, projectList, setProjectList }) {
    const [newProjectName, setNewProjectName] = useState('')
    const mapingprojects = projectList.map(project => {
        return <Project data={data} key={project} project={project}/>
    })


 return (
    <div>
        <h1>Projects List</h1>
        <form onSubmit={(e) => {
            e.preventDefault()
            // console.log(newProjectName)
            // setProjectList([...projectList, newProjectName])
            // console.log(projectList)

        }}>
            <label>New Project Name
                <input 
                    type="text" 
                    value={newProjectName}
                    onChange={e => {
                        setNewProjectName(e.target.value)
                        // console.log(e.target.value)
                    }}
                />
            </label>
            <input 
                type="submit" 
            />
        </form>
        {mapingprojects}
    </div>
 )
}

export default ProjectList;