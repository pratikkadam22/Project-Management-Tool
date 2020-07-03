import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>lorem ispsum</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by PK</div>
                    <div>4th July, 12pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
