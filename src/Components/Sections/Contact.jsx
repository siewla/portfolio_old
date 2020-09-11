import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
    const urlencodedtext = `Hi`
    const whatsAppURL = `https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}?text=${urlencodedtext}`
    console.log(whatsAppURL) 
    return (
        <div className="contact">
            <div className="section-title">Connect with Me</div>
            <div>
                <ContactForm />
            </div>   
        </div>
    )
}

export default Contact
