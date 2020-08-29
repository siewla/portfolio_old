import React from 'react'
import Typewriter from 'typewriter-effect'
import { Link } from "react-scroll";


const Introduction = () => {
    return (
        <div className="introduction">
            <div className ="introduction-content">
                <div className="flex-column-center">
                    <h1>Hi, i am <span className="name-text">Siew La</span>!</h1>
                    <Typewriter
                        options={{
                        strings: [
                            'Full Stack Developer',
                            'Software Engineer',
                            'User-Centered Web Designer',
                            'Mechanical Design Engineer',
                            'Front-End Ninja',
                            'Back-End Warrior'        
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </div>
                
                <Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                ><h3 className="learn-more">Learn More <i className="fas fa-angle-double-down"></i></h3></Link>
            </div>
            
        </div>
    )
}

export default Introduction
