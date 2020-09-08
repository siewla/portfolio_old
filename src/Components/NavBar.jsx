import React, {useState} from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false)  
    
    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }

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
                <MDBNavbarNav left>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <Link
                            className="nav-item"
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-80}
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
                            offset={-80}
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
                            duration={500}
                        >Contact</Link>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>

    )
}

export default NavBar
