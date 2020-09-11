import React from 'react'
import SKILLS from './SkillsDetails.js'

const Expertise = () => {
    return (
        <div className="expertise">
            <h1 className="section-title-horizontal">My Programming Skills</h1>
            <div className="all-skills-container">
                {SKILLS.map(skill =>{
                    return(<img className="skill-image" src={skill.logoLink} alt="project" />)
                })}
            </div>
        </div>
    )
}

export default Expertise
