import React from 'react'
import profileImg from '../assets/profile.jpg'
import Skills from './Skills'
const About = () => {
  return (
    <div>
        <div className="aboutMe" id="aboutMe">
            <h1 className="heading">About Me</h1>
            <div className="content">
                <div className="profileImg">
                    <img src={profileImg} alt="img"/>
                </div>
                <div className="innerContent">
                    <h3>Hello! Everyone <span className="wavingHand">👋</span></h3>
                    <p>I am Onam Kumar Verma a Frontend developer who is passinate about Full stack development from Delhi,India.
                        Basically i am self taught programmer because i learn how to code by Myself with the help of internet
                    </p>
                    <p>I have a keen interest in technology and everyday i am learing somethings new...</p>
                </div>
            </div>
        </div>
        
        <Skills/>
    </div>
  )
}

export default About