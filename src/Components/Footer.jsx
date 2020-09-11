import React, { Component } from 'react'
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color="black fixed-bottom">
            <MDBContainer fluid className="text-center footer-css">
                &copy; {new Date().getFullYear()} Built and Designed by <a href="https://github.com/siewla/"> 
                <strong className="red-text">SiewLa </strong></a>
            </MDBContainer>
        </MDBFooter>
    )
}

export default Footer
