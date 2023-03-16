import React from "react";
import {NavLink} from "react-router-dom"

function NavBar() {
    return (
        <div>
            <h1>Navigation</h1>
            <NavLink to="/all-tasks">All Tasks</NavLink>
            <NavLink to="/projects-list">Projects List</NavLink>
            <NavLink to="/new-task-form">New Task Form</NavLink>
        </div>
     )
}

export default NavBar;