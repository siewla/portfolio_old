import React from 'react'
import ProjectCard from './ProjectCard'
import PROJECTS from './ProjectsDetails.js'

const Projects = () => {
    return (
        <div className="projects">
            <h1>My Notable Projects</h1>
            <div className="all-projects-container">
                {PROJECTS.map(project =>{
                    return(<ProjectCard 
                        key = {project.id}
                        projectTitle ={project.projectTitle}
                        projectDescription={project.projectDescription}
                        projectImgLink={project.projectImgLink}
                        projectDemoLink ={project.projectDemoLink}
                        projectCodeLink ={project.projectCodeLink}
                        projectStack ={project.projectStack}
                        projectCollaborators={project.collaborators}
                    />)
                })}
            </div>
        </div>
    )
}

export default Projects
