import React from "react";
import { Link, Route } from "react-router-dom";
import ProjectTasks from "./ProjectTasks";


function Project({ project, data, onDeleteTask }) {
    // console.log("project:", project)
    // console.log("data:", data)
    // const filteringData = data.filter(task => {
    //     return task.project === project
    // })
    // console.log(filteringData)
        // console.log(project)
        const filteringAndMappingData = data.filter(task => {
            return task.project === project
        }).map(filteredTask => {
            // console.log(filteredTask)
            return (
                <Route>
                    <ProjectTasks exact path="/projects-list/tasks" key={filteredTask} filteredTask={filteredTask} onDeleteTask={onDeleteTask}/>
                </Route>
            )
        })
        // console.log(filteringAndMappingData)
        

    return (
        <div className="project">
            <h2>{project}</h2>
            <Link to="/projects-list/tasks">Click To View Tasks</Link>
            {filteringAndMappingData}
            {/* <ul>{filteringData.map(projectTask => <li key={projectTask.id}>{projectTask.task}</li>)}</ul> */}
        </div>
     )
}

export default Project;