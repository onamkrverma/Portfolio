import React from 'react'
import './home.css';
import codeType from './assets/code-typing.svg'
import { useNavigate } from "react-router-dom";
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Home = () => {
  let navigate = useNavigate();

  const redirectResume = () => {
    navigate('/resume')
  }
  const redirectContact = () => {
    navigate('/contact')
  }


  return (
    <div className='home-container'>
      <div className="introBox bottom-margin">
        <div className="intro">
          <h1>Hi! everyone <span className="wavingHand">👋🏻</span></h1>
          <p>Myself <strong>Onam Kumar Verma</strong> a Frontend developer and I love to convert ideas into beautiful things through programming</p>

          <div className="social-icons-wrapper ">
            <a className='social-icons' href="https://github.com/onamkrverma/" target="_blank" rel="noopener noreferrer" title='github'>
              <FaGithub style={{ width: '100%', height: '100%' }} />
            </a>
            <a className='social-icons' href="https://in.linkedin.com/in/onamkumarverma/" target="_blank" rel="noopener noreferrer" title='linkedin'>
              <FaLinkedin style={{ width: '100%', height: '100%' }} />
            </a>
            <a className='social-icons' href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=onamkrverma@gmail.com/" target="_blank" rel="noopener noreferrer" title='mail'>
              <FaEnvelope style={{ width: '100%', height: '100%' }} />
            </a>
          </div>
          <div className="resume-contact-btn-wrapper">
            <input type="button" onClick={redirectResume} value="Resume" className="resumeBtn redirect-btn" />
            <input type="button" onClick={redirectContact} value="Contact Me" className="contactBtn redirect-btn" />
          </div>

        </div>
        <div className="vectorImg">
          <img src={codeType} alt="img" />
        </div>

      </div>
      <About home={'home'} />
      <Projects home={'home'} />
      <Skills home={'home'} />


    </div>
  )
}

export default Home