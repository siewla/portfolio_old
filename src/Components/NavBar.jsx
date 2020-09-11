import React, {useState} from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false)  
    
    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    // const urlencodedtext = `Hi`
    // const whatsAppURL = `https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}?text=${urlencodedtext}`

    return (
        <MDBNavbar color="black" dark expand="md" scrolling fixed="top">
            <MDBNavbarBrand>
                <DarkModeSwitch
                    checked={props.theme}
                    onChange={props.toggleTheme}
                    sunColor={'yellow'}
                    size={60}
                />
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                <MDBNavbarNav middle>
                    <MDBNavItem>
                        <Link
                            className="nav-item"
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >Home</Link>
                    </MDBNavItem>
                    <MDBNavItem>
                        <Link
                            className="nav-item"
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >About</Link>
                    </MDBNavItem>
                    <MDBNavItem>
                        <Link
                            className="nav-item"
                            activeClass="active"
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >Expertise</Link>
                    </MDBNavItem>
                    <MDBNavItem>
                        <Link
                            className="nav-item"
                            activeClass="active"
                            to="section4"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >Projects</Link>
                    </MDBNavItem>
                    <MDBNavItem>
                        <Link
                            className="nav-item"
                            activeClass="active"
                            to="section5"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >Contact</Link>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                    {/* <a href={whatsAppURL} target="popup"><i className="fab fa-whatsapp-square contact-icon"></i></a> */}
                    <a href="https://github.com/siewla" target="popup"><i className="fab fa-github contact-icon"></i></a>
                    <a href="https://www.linkedin.com/in/siewlapang/" target="popup"><i className="fab fa-linkedin contact-icon"></i></a>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>

    )
}

export default NavBar
