import React from 'react'
import { MDBBtn } from 'mdbreact';


const About = () => {
    return (
        <div className="about">
            <div className="section-title">About Me</div>
            <div className="flex-column-center">
                <div className="about-description">
                    <p>A Mechanical Engineer Turned Software Developer! </p>
                    <p>I graduated with BSc and MSc in Mechanical Engineering and have been working as a Mechanical Design Engineer for 7 years.</p>
                    <p>I am a Malaysian and also a Singapore Permanent Resident. I resided in Malaysia 🇲🇾, USA 🇺🇸  and New Zealand 🇳🇿 previously and currently working and residing in Singapore 🇸🇬.</p>
                        {/* <li>Malaysia 🇲🇾 home country</li>
                        <li>USA 🇺🇸 study</li>
                        <li>New Zealand 🇳🇿 working holiday</li> */}
                </div>
                <a href="https://github.com/siewla/portfolio/blob/master/public/resume.pdf" target="_blank" rel="noopener noreferrer" download>
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