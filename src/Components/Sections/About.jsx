import React from 'react'
import { MDBBtn } from 'mdbreact';


const About = () => {
    return (
        <div className="flex-column-center about">
            <h1>About</h1>
            <p>Meet Siew La, Mechanical Engineer Turned Software Developer! Her six-year career as a mechanical engineer was moving slow, and she decided she needed a change.</p>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>
            <MDBBtn className="btn btn-outline-black" type="submit">
                Download My Resume <i className="fas fa-download"/>
            </MDBBtn>
            </a>
        </div>
    )
}

export default About    