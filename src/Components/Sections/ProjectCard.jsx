import React from 'react'
import {MDBBtn} from 'mdbreact'

const ProjectCard = (props) => {
    const projectTitle = props.projectTitle
    const projectDescription = props.projectDescription
    const projectImgLink = props.projectImgLink
    const projectDemoLink = props.projectDemoLink
    const projectCodeLink = props.projectCodeLink


    return (
        <div className="project-card">
            <div className="project-card-actions">
                <a className="footer-text" href={projectDemoLink} target="popout"><MDBBtn outline color="info">Launch Demo</MDBBtn></a>
                <a className="footer-text" href={projectCodeLink} target="popout"><MDBBtn outline color="default">View Code</MDBBtn></a>
            </div>
            {/* <iframe className="project-card-image" src={projectDemoLink} title="app"></iframe> */}
            <img className="project-card-image" src={projectImgLink} alt="project" />
            <a href={projectDemoLink} className="project-card-title" target="popout">{projectTitle}</a>
            <div className="horizontal-line"></div>
            <h4 className="project-description">{projectDescription}</h4>
        </div>
    )
}

export default ProjectCard
