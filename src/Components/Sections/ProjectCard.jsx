import React from 'react'

const ProjectCard = (props) => {
    const projectTitle = props.projectTitle
    const projectDescription = props.projectDescription
    const projectImgLink = props.projectImgLink
    const projectDemoLink = props.projectDemoLink
    const projectCodeLink = props.projectCodeLink


    return (
        <div className="project-card">
            <div className="project-card-actions">
                <a className="footer-text" href={projectDemoLink} target="popout"><h4>Launch Demo <i className="fas fa-angle-double-right"></i></h4></a>
                <a className="footer-text" href={projectCodeLink} target="popout"><h4>View Code <i className="fas fa-angle-double-right"></i></h4></a>
            </div>
            <img className="project-card-image" src={projectImgLink} alt="project" />
            <a href={projectDemoLink} className="project-card-title" target="popout">{projectTitle}</a>
            <div className="horizontal-line"></div>
            <h4>Description : <span className="project-description">{projectDescription}</span></h4>
        </div>
    )
}

export default ProjectCard
