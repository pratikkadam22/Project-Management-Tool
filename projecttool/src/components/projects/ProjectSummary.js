import React from 'react'
import moment from 'moment'

function ProjectSummary({project}) {
    return (
        <div className="card z-depth-5 project-summary border-2">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by { project.authorFirstName } { project.authorLastName }</p>
                    <p className="orange-text text-darken-4">{moment(project.createdAt.toDate()).calendar()}</p>
                </div>
        </div>
    )
}

export default ProjectSummary;
