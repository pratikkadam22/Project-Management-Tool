import React from 'react'
import ProjecSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

function ProjectList({projects}) {
    return (
        <div className="project-list section">
            {/* The reason for "&&" is that if there are no projects then it
            won't got to map */}
           { projects && projects.map(project => {
               return (
                   <Link to={'/project/' + project.id}>
                   <ProjecSummary project={project} key={project.id} />
                   </Link>
               )
           })} 
        </div>
    )
}

export default ProjectList;
