import React, { useState } from 'react'
import { MDBModal, MDBModalBody, MDBModalHeader, MDBBtn, MDBModalFooter } from 'mdbreact';


const ProjectCard = (props) => {
    const projectTitle = props.projectTitle
    const projectDescription = props.projectDescription
    const projectImgLink = props.projectImgLink
    const projectDemoLink = props.projectDemoLink
    const projectCodeLink = props.projectCodeLink

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
                    <h4 className="project-description">{projectDescription}</h4>
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
