import React from 'react'
import Introduction from './Sections/Introduction'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'


const Section = (props) => {
    const sectionContent = () =>{
        switch(props.id){
            case "section1" : return <Introduction />
            case "section2" : return <About />
            case "section3" : return <Projects />
            case "section4" : return <Contact />
    
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
