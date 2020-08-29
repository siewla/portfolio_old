import React from 'react'

const ProjectCard = (props) => {
    const projectTitle = props.projectTitle
    const projectDescription = props.projectDescription
    const projectImgLink = props.projectImgLink
    const projectDemoLink = props.projectDemoLink
    const projectCodeLink = props.projectCodeLink
    return (
        <div className="project-card">
            <h1 className="project-card-title">{projectTitle}</h1>
            <img className="project-card-image" src={projectImgLink} alt="project" />
            <h4>Description : <span className="project-description">{projectDescription}</span></h4>
            <div className="project-card-footer">
                <a className="footer-text" href={projectDemoLink} target="popout"><h4>Launch Demo <i className="fas fa-angle-double-right"></i></h4></a>
                <a className="footer-text" href={projectCodeLink} target="popout"><h4>View Code <i className="fas fa-angle-double-right"></i></h4></a>
            </div>
        </div>
    )
}

export default ProjectCard
