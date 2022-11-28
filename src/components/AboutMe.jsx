import React, { useEffect } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './AboutMe.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 200,
            easing: 'ease-in-sine',

        });
    }, [])
    return (
        <div className="container about_me" id="aboutme">
            <div className="row">
                <div className="col-md-6 col-sm-12" data-aos="fade-right">
                    <h1>About Myself</h1>
                    <h3 className="keys">Career Objective </h3>
                    <p>Seeking a challenging role at a reputed IT organisation to utilize my engineering skills that can contribute to the company’s growth as well as enhance my knowledge by exploring new things.</p>
                    <h3 className="keys">Skills</h3>
                    <p>Java programming, MERN stack, HTML,  CSS, Bootstrap, firebase, Networking fundamentals</p>
                    <h3 className="keys">Hobbies</h3>
                    <p>Mobile photography, watching various documentaries</p>
                </div>
                <div className="col-md-6 col-sm-12 tools" data-aos="fade-left">
                    <div class="tools_expert">
                        <h3>Education</h3>
                        <div class="skill_main">
                            <div class="skill_item">
                                <h4>University Institute of Technology-RGPV, Bhopal - Bachelor of technology <span class="counter"> 7.75 CGPA</span></h4>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="77.5" aria-valuemin="0" aria-valuemax="100" style={{ width: '77.5%' }}></div>
                                </div>
                            </div>
                            <div class="skill_item">
                                <h4>Vandana Convent School, Guna -Higher  secondary - 2017 <span class="counter"> 88.6</span>%</h4>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="88.6" aria-valuemin="0" aria-valuemax="100" style={{ width: '88.6%' }}></div>
                                </div>
                            </div>
                            <div class="skill_item">
                                <h4>Jay Jyoti School, Raghogarh -   Secondary - 2015 <span class="counter"> 9.4 CGPA</span></h4>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100" style={{ width: '94%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
