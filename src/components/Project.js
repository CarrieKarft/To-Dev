import React from "react";
import { Link } from "react-router-dom";


function Project({ project, details, id }) {
        

    return (
        <div className="project">
            <h2>{project}</h2>
            <p>{details}</p>
            <Link to={`/projects-list/${id}`}>Click To View Tasks</Link>
        </div>
     )
}

export default Project;