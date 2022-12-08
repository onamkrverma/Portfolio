import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className='footerSection'>
            <div className="footLeft">
                <h1>{"</ Onam >"}</h1>
            </div>
            <div className="footmid">
                <div className="findMe">
                    <h2 >FIND ME ON</h2>
                    <i>Feel Free to connect with me </i>
                    <div className="socialIcons">
                        <a href="https://github.com/onamkrverma/" target="_blank" rel="noopener noreferrer" title='github'><i className="fa-brands fa-github github"></i></a>
                        <a href="https://in.linkedin.com/in/onamkumarverma/" target="_blank" rel="noopener noreferrer" title='linkedin'><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=onamkrverma@gmail.com/" target="_blank" rel="noopener noreferrer" title='mail'><i className="fa-solid fa-envelope"></i></a>
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