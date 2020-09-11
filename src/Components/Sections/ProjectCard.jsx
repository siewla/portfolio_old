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
            {/* <iframe className="project-card-image" src={projectDemoLink} title="app"></iframe> */}
            <img className="project-card-image" src={projectImgLink} alt="project" />
            <a href={projectDemoLink} className="project-card-title" target="popout">{projectTitle}</a> 
            <MDBBtn color="info" onClick={()=>setModalIsOpen(!modalIsOpen)}>Project Details</MDBBtn>
            <MDBModal className="black-text" isOpen={modalIsOpen} toggle={()=>setModalIsOpen(!modalIsOpen)}>
                <MDBModalHeader toggle={()=>setModalIsOpen(!modalIsOpen)}>
                {projectTitle}
                </MDBModalHeader>
                <MDBModalBody>
                    <h4>Description: <strong>{projectDescription}</strong></h4>
                    <h4>Stack: <strong>{projectStack}</strong></h4>
                    {projectCollaborators!==null &&
                        <h4>Collaborator: <a href={projectCollaborators.link}>
                        <strong>{projectCollaborators.name}</strong></a></h4>
                    }
                </MDBModalBody>
                <MDBModalFooter className="d-flex justify-content-center">
                <a href={projectDemoLink} target="popout"><MDBBtn outline color="info">Launch Demo</MDBBtn></a>
                <a href={projectCodeLink} target="popout"><MDBBtn outline color="default">View Code</MDBBtn></a>
                </MDBModalFooter>
            </MDBModal>
        </div>
    )
}

export default ProjectCard
