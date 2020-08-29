import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <div className="flex-column-center contact">
            <h1>Connect with Me</h1>
            <div className="connect-with-me-container">
                <ContactForm />
                <div className="contact-container">
                    <a href="https://github.com/siewla" target="popup"><i className="fab fa-github contact-icon"></i></a>
                    <a href="https://www.linkedin.com/in/siewlapang/" target="popup"><i className="fab fa-linkedin contact-icon"></i></a>
                </div>
            </div>
            
        </div>
    )
}

export default Contact
