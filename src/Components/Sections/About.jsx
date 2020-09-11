import React from 'react'
import { MDBBtn } from 'mdbreact';


const About = () => {
    return (
        <div className="about">
            <div className="section-title">About Me</div>
            <div className="flex-column-center">
                <div className="about-description">
                    <p>Hi, I'm Siew La, a Mechanical Engineer Turned Software Developer! </p>
                    <p>I graduated with BSc and MSc in Mechanical Engineering and worked as a Mechanical Engineer for 7 years before embarking on a new journey as a software developer.</p>
                </div>
                <a href="/https://github.com/siewla/portfolio/blob/master/public/resume.pdf" target="_blank" rel="noopener noreferrer" download>
                <MDBBtn color="black" type="submit">
                    Download My Resume <i className="fas fa-download"/>
                </MDBBtn> 
                </a>
            </div>
            <div>
                <img className="profile-image" src="https://github.com/siewla/portfolio/blob/master/src/assets/profile.jpeg?raw=true" alt="profile" />
            </div>
        </div>
    )
}

export default About    