import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
    return (
        <div>
            <nav className="nav" id="navbar">
                <div className="nav-content">
                <h1
                    className="nav-logo"
                    onClick={()=>{scroll.scrollToTop()}}
                >SL</h1>
                <ul className="nav-items">
                        <Link
                            className="nav-item"
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                        >Home</Link>
                        <Link
                            className="nav-item"
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >About</Link>
                        <Link
                            className="nav-item"
                            activeClass="active"
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                        >Projects</Link>
                        <Link
                            className="nav-item"
                            activeClass="active"
                            to="section4"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >Contact</Link>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
