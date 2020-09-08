import React from 'react'
import Introduction from './Sections/Introduction'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import Expertise from './Sections/Expertise'


const Section = (props) => {
    const sectionContent = () =>{
        switch(props.id){
            case "section1" : return <Introduction />
            case "section2" : return <About />
            case "section3" : return <Expertise />
            case "section4" : return <Projects />
            case "section5" : return <Contact />
    
            default:
                return(
                    <div>
                    </div>
                )
        }
    }
    return (
        <div className="section-content" id={props.id}>
                <div>{sectionContent()}</div>
        </div>
    )
}

export default Section
