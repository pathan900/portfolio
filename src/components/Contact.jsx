import { Grid, Typography, TextField, Button } from '@material-ui/core'
import React from 'react'
import { FormProvider, Controller, useFormContext } from 'react-hook-form'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { motion } from 'framer-motion';
import './Contact.css'
import HomeIcon from '@material-ui/icons/Home';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'

const buttonVariants = {
    hover: {
        scale: 1.2,
        transition: {
            yoyo: Infinity
        }
    },

}

const Contact = () => {

    return (
        <>
            <div class="container-fluid upper">
                <Navbar />
                <div className="row content container">
                    <h1 className="text-center">Contact me</h1>
                    <nav aria-label="breadcrumb" >
                        <ol className="breadcrumb bread">
                            <Link to="/">
                                <li className="breadcrumb-item"><a href="#">Home &#8594; </a></li>
                            </Link>
                            <li className="breadcrumb-item active" aria-current="page"> Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container lower" id="contact">

                <div className="row mt-5">
                    <div class="col-md-3 col-sm-12">
                        <div >
                            <div>
                                <HomeIcon />
                                <h6>Bhopal, Madhya Pradesh</h6>
                                <p>97- rachna nagar</p>
                            </div>
                            <div class="info_item">
                                <CallIcon />
                                <h6><a href="#">+91 7240454561</a></h6>
                            </div>
                            <div class="info_item">
                                <EmailIcon />
                                <h6><a href="#">abdulkaleemkhan1999@gmail.com</a></h6> 
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9 col-sm-12">
                        <form className="row">

                            <div class="col-md-6 col-sm-12 details">
                                <input type="text" placeholder="enter your name" />
                                <input type="email" placeholder="enter your email" />
                                <input type="text" placeholder="subject" />
                            </div>
                            <div class="col-md-6 col-sm-12 messages">
                                <textarea name="" id="" cols="40" rows="5" placeholder="message"></textarea>

                            </div>
                            <div className="col-12 text-right mt-3">
                                <motion.a className="banner_btn" href="#" style={{ textDecoration: "none" }}
                                    variants={buttonVariants}
                                    whileHover="hover"
                                >Send Message</motion.a></div>

                        </form>
                    </div>
                </div>
                <div className="row">

                    <div class=" container-fluid">
                        <iframe class="embed-responsive-item "
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58021.31925262383!2d77.27713487064045!3d24.646682506284975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397a5bf458847367%3A0xb3c7404fc9cfb52a!2sHotel%20Varun!5e0!3m2!1sen!2sin!4v1598415031163!5m2!1sen!2sin"
                            frameborder="0" height="400px" width="100%"></iframe>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Contact
