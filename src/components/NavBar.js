import React from "react";
import {NavLink} from "react-router-dom"

function NavBar() {
    const linkStyles = {
        width: "100%",
        fontSize: "larger",
        textAlign: "center",
        padding: "12px",
        margin: "0 6px 6px",
        textDecoration: "none",
        color: "white",
      };

    return (
        <div className="navBar">
            <h1>Navigation</h1>
            <NavLink to="/" style={linkStyles}>All Tasks</NavLink>
            <NavLink to="/projects-list" style={linkStyles}>Projects</NavLink>
            <NavLink to="/new-task-form" style={linkStyles}>Add A Task</NavLink>
        </div>
     )
}

export default NavBar;