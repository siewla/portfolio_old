import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
    const urlencodedtext = `Hi`
    const whatsAppURL = `https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}?text=${urlencodedtext}`
    console.log(whatsAppURL) 
    return (
        <div className="flex-column-center contact">
            <h1>Connect with Me</h1>
            <div className="connect-with-me-container">
                <ContactForm />
            </div>
            
        </div>
    )
}

export default Contact
