import React, {useState} from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)  
    
    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <MDBNavbar color="mdb-color darken-3" dark expand="md" scrolling fixed="top">
            <MDBNavbarBrand>
                <h1
                    className="nav-logo"
                    onClick={()=>{scroll.scrollToTop()}}
                >SL</h1>
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
                            offset={-80}
                            duration={500}
                        >Projects</Link>
                    </MDBNavItem>
                    <MDBNavItem>
                        <Link
                            className="nav-item"
                            activeClass="active"
                            to="section4"
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
