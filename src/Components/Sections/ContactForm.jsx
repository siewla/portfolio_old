import React from 'react'
import emailjs from 'emailjs-com'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon} from 'mdbreact';



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
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                <MDBCard className="contact-form-container">
                    <MDBCardBody>
                    <form onSubmit={sendEmail}>
                        <div className="grey-text">
                        <MDBInput
                            name="user_name"
                            label="Your name"
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            required
                        />
                        <MDBInput
                            name="user_email"
                            label="Your email"
                            icon="envelope"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                            required
                        />
                        <MDBInput
                            type="textarea"
                            name="message"
                            label="Your Message"
                            rows="5"
                            icon="pencil-alt"
                            required
                        />
                        </div>
                        <div className="text-center py-4 mt-3">
                            <MDBBtn className="btn btn-outline-black" type="submit">
                                Send
                                <MDBIcon far icon="paper-plane" className="ml-2" />
                            </MDBBtn>
                        </div>
                    </form>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default ContactForm
