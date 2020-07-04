import React from 'react'

function ProjectSummary({project}) {
    return (
        <div className="card z-depth-5 project-summary border-2">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by PK</p>
                    <p className="orange-text text-darken-4">4th July, 12 pm </p>
                </div>
        </div>
    )
}

export default ProjectSummary;
