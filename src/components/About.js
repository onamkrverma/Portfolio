import React from 'react'
import profileImg from '../assets/profile.jpg'
import CollegeLogo from '../assets/collegeLogo.jpg'
import Skills from './Skills'

const About = () => {
    return (
        <div>
            <div className="aboutMe" id="aboutMe">
                <h1 className="heading">About Me</h1>
                <div className="content">
                    <div className="profileImg">
                        <img src={profileImg} alt="img" loading='lazy' />
                    </div>
                    <div className="innerContent">
                        <h3>Hello! Everyone <span className="wavingHand">👋🏻</span></h3>
                        <p>I am Onam Kumar Verma a Frontend developer who is passinate about Full stack development from Delhi,India.
                            Basically i am self taught developer because i learn how to code by myself with the help of internet, online courses and YouTube  </p>
                        <p>I have a keen interest in technology and everyday i am learing somethings new...</p>

                        <div className="educationBox">
                            <h3>Education</h3>
                            <div className="eduContent">
                                <img src={CollegeLogo} alt="college logo" />
                                <div className="collegeDetails">
                                    <h4>Zakir Husain Delhi College</h4>
                                    <i>(University of Delhi)</i>
                                    <p>B.SC(H) Chemistry</p>
                                </div>
                            </div>
                        </div>
                        <div className="quotes">
                            <i>‟ Stay Hungry Stay Foolish... ” </i>
                            <i>- Steve Jobs</i>
                        </div>
                    </div>
                </div>
            </div>

            <Skills />
        </div>
    )
}

export default About