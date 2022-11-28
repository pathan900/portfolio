import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Footer.css'


const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className="col-12 social">
                <h2>Follow me</h2>
                <p>Lets be social</p>
                <div className="footer_icons">
                <InstagramIcon color="secondary" fontSize="large"/>
                <FacebookIcon color="secondary" fontSize="large"/>
                <TwitterIcon color="secondary" fontSize="large"/>
                </div>
            </div>
            <div className="col-12 mt-5 para">
                <p>Copyright ©2021 All rights reserved </p>
            </div>

        </div>
    )
}

export default Footer
