import React from 'react'
import { MDBBtn } from 'mdbreact';


const About = () => {
    return (
        <div className="flex-column-center about">
            <h1>About Me</h1>
            <h4 className="about-description">Meet Siew La, Mechanical Engineer Turned Software Developer! Her six-year career as a mechanical engineer was moving slow, and she decided she needed a change.</h4>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>
            <MDBBtn color="success" type="submit">
                Download My Resume <i className="fas fa-download"/>
            </MDBBtn>
            </a>
        </div>
    )
}

export default About    