import React from 'react'
import coding from '../assets/coder2.png';
import codeType from '../assets/codeType.png'
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();

    const redirectAbout = () => {
        navigate('/about')
    }
    const redirectContact = () => {
        navigate('/contact')
    }


    return (
        <div>
            <div className="introBox">
                <div className="intro">
                    <h1>Hi! everyone <span className="wavingHand">👋</span></h1>
                    {/* <h2>I am <span>Frontend developer</span></h2> */}
                    <p>Myself <strong>Onam Kumar Verma</strong> a <i>Frontend developer</i>  and I love to convert ideas into beautiful things through programing</p>

                    <div className="socialIcons ">
                        <a href="https://github.com/onamkrverma/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github github"></i></a>
                        <a href="https://in.linkedin.com/in/onamkumarverma/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=onamkrverma@gmail.com/" target="_blank"  rel="noopener noreferrer"><i className="fa-solid fa-envelope"></i></a>
                    </div>
                    <div className="btn">
                        <input type="button" value="Resume" className="resumeBtn" />
                        <input type="button" onClick={redirectContact} value="Contact" className="contactBtn" />
                    </div>

                </div>
                <div className="vectorImg">
                    <img src={coding} alt="img" />
                </div>

            </div>
            <div className="aboutMe" id="aboutMe">
                <h1 className="heading">Let me </h1>
                <h1 className="heading">Introduce Myself</h1>
                <div className="content">
                    <div className="vectorImg">
                        <img src={codeType} alt="img" />
                    </div>
                    <div className="innerContent">
                        {/* <h3>Hello! visitor <span className="wavingHand">👋</span></h3> */}
                        <p>I have a keen interest in technology and love to create somethings from scratch.</p>
                        <p>I am fluent in programing language like JavaScript.</p>
                        <p>My field of interest are web technologies and product.</p>
                        <p>Whenever possible, i eager to apply my passion for developing real world product which solve the reallife problem with my programing skills and JavaScript morden library like React.js.</p>
                        
                        <div className="btn">
                            <input type="button" onClick={redirectAbout} value="Know more about me" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home