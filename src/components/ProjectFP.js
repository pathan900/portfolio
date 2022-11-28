
import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Contact.css'
import Navbar from './Navbar';
import {Link} from 'react-router-dom'
import Projects from './Projects'


const ProjectsFP = () => {

    return (
        <>
            <div class="container-fluid upper">
                <Navbar />
                <div className="row content container">
                    <h1 className="text-center">My Projects</h1>
                    <nav aria-label="breadcrumb" >
                        <ol className="breadcrumb bread">
                        <Link to="/">
                            <li className="breadcrumb-item"><a href="#">Home &#8594; </a></li>
                            </Link>
                            <li className="breadcrumb-item active" aria-current="page"> Projects</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container lower" >
   
                <Projects/>

            </div>
        </>
    )
}

export default ProjectsFP
