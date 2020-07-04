import React from 'react'
import ProjecSummary from './ProjectSummary'

function ProjectList({projects}) {
    return (
        <div className="project-list section">
            {/* The reason for "&&" is that if there are no projects then it
            won't got to map */}
           { projects && projects.map(project => {
               return (
                   <ProjecSummary project={project} key={project.id} />
               )
           })} 
        </div>
    )
}

export default ProjectList;
