import React from "react";
import {NavLink} from "react-router-dom"

function NavBar() {
    const linkStyles = {
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        textDecoration: "none",
        color: "blue",
      };

    return (
        <div>
            <h1>Navigation</h1>
            <NavLink to="/all-tasks" style={linkStyles}>All Tasks</NavLink>
            <NavLink to="/projects-list" style={linkStyles}>Projects List</NavLink>
            <NavLink to="/new-task-form" style={linkStyles}>New Task Form</NavLink>
        </div>
     )
}

export default NavBar;