import React from 'react'
import './Navbar.css'
import logo from './logo1.png'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import { Router } from '@material-ui/icons';

const Navbar = () => {
    return (
        <header className="header_area">
            <div className="main_menu" id="mainNav">
                <nav className="navbar navbar-expand-lg">
                <div class="container box_1620">
                <RouterLink to="/">
                    <a className="navbar-brand logo_h" href=""><img src={logo} alt="" /></a></RouterLink>
                    <button className="navbar-toggler collapsed" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" ariaExpanded="false" ariaLabel="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <div class="navbar-collapse offset collapse" id="navbarSupportedContent" >
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <motion.li className="nav-item" whileHover={{ scale: 1.2 }}><RouterLink activeClass="active" to="/about" spy={true} smooth={true} duration={1000} className="nav-link">About</RouterLink></motion.li>
                            <motion.li className="nav-item" whileHover={{ scale: 1.2 }}><RouterLink activeClass="active" to="/projects" spy={true} smooth={true} duration={1000}  className="nav-link">Projects</RouterLink></motion.li>
                            <motion.li className="nav-item" whileHover={{ scale: 1.2 }}><RouterLink activeClass="active" to="/contact" spy={true} smooth={true} duration={1000} className="nav-link">Contact</RouterLink></motion.li>
                        </ul>
                    </div>
                </div>
            </nav>

            </div>
        </header>
    )
}

export default Navbar
