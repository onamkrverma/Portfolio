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
                        <p>I am Onam Kumar Verma a Frontend developer who is passinate about Full stack
                            development from Delhi,India.
                            Basically i am self taught developer because i learn how to code by myself with the help of internet, online courses <span><a href="https://freecodecamp.org/" target='_blank' rel="noreferrer">Freecodecamp</a> and <a href="https://www.w3schools.com/" target='_blank' rel="noreferrer">W3schools</a> </span>and YouTube </p>
                        <p>I have a keen interest in technology and It was started When I was in college that time i used to create bloging website with Google's Blogspot plateform and editing and modifying the blog themes/templetes. everyday i am learing somethings new...</p>

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
                        <div className="certificates-wrapper">
                            <h1 className="heading certificate-heading">Certificates</h1>
                            <div className="certificate-title-image-wrapper">
                                <h5 className='certificate-title'>
                                    JavaScript Algorithms and Data Structures
                                </h5>
                                <a href="https://freecodecamp.org/certification/fccd6827402-2aa3-473a-8fd3-06849e4a7845/javascript-algorithms-and-data-structures" target='_blank' rel='noreferrer' >View certificate</a>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <Skills />
        </div>
    )
}

export default About