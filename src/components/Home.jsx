import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import './Home.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import pic from './profile.png'
import logo from './logo1.png'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

const homeVariants = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: '0',
        transition: {
            type: "spring", stiffness: "80", duration: '5'
        }
    }
}
const buttonVariants = {
    hover: {
        scale: 1.2,
        transition: {
            yoyo: Infinity
        }
    },

}
const useStyle = makeStyles((theme) => ({

}));
const Home = () => {
    const classes = useStyle();
    return (
        <>
            <header className="header_area">
                <div className="main_menu" id="mainNav">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div class="container box_1620">
                            <a className="navbar-brand logo_h" href=""><img src={logo} alt="" /></a>
                            <button className="navbar-toggler collapsed" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" ariaExpanded="false" ariaLabel="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <div class="navbar-collapse offset collapse" id="navbarSupportedContent" >
                                <ul class="nav navbar-nav menu_nav ml-auto">
                                    <motion.li className="nav-item" whileHover={{ scale: 1.2 }}><Link activeClass="active" to="aboutme" spy={true} smooth={true} duration={1000} className="nav-link">About</Link></motion.li>
                                    <motion.li className="nav-item" whileHover={{ scale: 1.2 }}><Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000} className="nav-link">Projects</Link></motion.li>
                                    <motion.li className="nav-item" whileHover={{ scale: 1.2 }}><RouterLink activeClass="active" to="/contact" spy={true} smooth={true} duration={1000} className="nav-link">Contact</RouterLink></motion.li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <section className="home_banner_area">
                <div className="banner_inner">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="home_left_img">
                                    <img className="img-fluid" src={pic} alt="" />
                                </div>
                            </div>
                            <div class="col-lg-6"
                                variants={homeVariants}
                                initial="hidden"
                                animate="visible"

                            >
                                <div class="banner_content">
                                    <h5>This is me</h5>
                                    <h2>Abdul Kaleem Khan</h2>
                                    <p>My name is Abdul Kaleem Khan, and ,my portfolio is a representation of all that I've learned and accomplished as an engineering student.</p>
                                    <motion.a class="banner_btn" href="#" style={{ textDecoration: "none" }}
                                        variants={buttonVariants}
                                        whileHover="hover"
                                    >Hire Now</motion.a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div className="circle1"></div>
            <div className="circle2"></div>
        </>
    )
}

export default Home
