import React from "react";
import './Navbar.css';
import Logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={Logo} alt="" ></img>
            <ul className="nav-menu outfit-font" >
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">Connect With</div>
        </div>
    )
}

export default Navbar