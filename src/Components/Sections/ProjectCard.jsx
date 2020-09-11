import React, { useState } from 'react'
import { MDBModal, MDBModalBody, MDBModalHeader, MDBBtn, MDBModalFooter } from 'mdbreact';


const ProjectCard = (props) => {
    const projectTitle = props.projectTitle
    const projectDescription = props.projectDescription
    const projectImgLink = props.projectImgLink
    const projectDemoLink = props.projectDemoLink
    const projectCodeLink = props.projectCodeLink
    const projectStack = props.projectStack
    const projectCollaborators = props.projectCollaborators

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div className="project-card">
            <div className="project-left-section">
                <a href={projectDemoLink} className="project-card-title" target="popout">{projectTitle}</a> 
                <img className="project-card-image" src={projectImgLink} alt="project" />
            </div>
            <div className="project-right-section">
                    <h4 className="project-text">Description: <span className="grey-text">{projectDescription}</span></h4>
                    <br></br>
                    <h4 className="project-text">Stack: <span className="grey-text">{projectStack}</span></h4>
                    <br></br>
                    {projectCollaborators!==null &&
                        <h4>Collaborator: <a href={projectCollaborators.link}>
                        <span className="grey-text">{projectCollaborators.name}</span></a></h4>
                    }
                    <br></br>
                <div className="project-right-section-footer">
                    <a href={projectDemoLink} target="popout"><i className="fas fa-external-link-alt contact-icon"></i></a>
                    <a href={projectCodeLink} target="popout"><i className="fab fa-github contact-icon"></i></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
