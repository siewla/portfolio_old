import React from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {
    const sendEmail=e=> {
        e.preventDefault();
        emailjs.sendForm('gmail', process.env.REACT_APP_EMAILJS_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAILJS_USER_ID)
        .then((result) => {
            alert('Message Sent, I\'ll get back to you shortly', result.text);
        }, (error) => {
            alert( 'There was some errors, Please try again', error.text)
        });
    }

    return (
        <div>
            <form className="contact-form" onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" required/>
                <label>Email</label>
                <input type="email" name="user_email" required/>
                <label>Message</label>
                <textarea className="message-textarea"name="message" required/>
                <button className="send-button">Send</button>
            </form>
        </div>
    )
}

export default ContactForm
