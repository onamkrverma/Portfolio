import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className='footerSection'>
        <div className="footLeft">
          <div className="logo">
            <span>{"</ Onam >"}</span>
          </div>
        </div>
        <div className="footmid">
          <div className="findMe">
            <div className='findMe-title'>FIND ME ON</div>
            <i>Feel Free to connect with me </i>
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
          </div>
        </div>
        <div className="footRight">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/projects">Project</Link>
          <Link to="/about">About Me</Link>
          <Link to="/contact">Contact Me</Link>

        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; 2022</p>
        <p>Design and develop by Onamkrverma</p>
      </div>
    </footer>
  )
}

export default Footer