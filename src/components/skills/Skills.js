import React from 'react'
import './skills.css'
import skillsVector from './assets/javaScript frameworks-pana.svg'
import { Link } from 'react-router-dom'
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaBootstrap, FaGitAlt, FaGithub,FaArrowRight } from 'react-icons/fa'
import { SiTailwindcss, SiVisualstudiocode } from 'react-icons/si'




const Skills = ({ home }) => {
  return (
    <>
      <div className="container bottom-margin" id="my">
        <div className="heading-vector-wrapper">
          <div className="heading">Skills</div>
          <div className={`skillsVector `}>
            <img src={skillsVector} alt="vector img" />
          </div>
        </div>
        <div className="skills">
          <div className="skillsInneer">
            <div className="icons reactIcon">
              <FaReact style={{ height: '100%', width: '100%' }} />
              <p>React js</p>
            </div>
            <div className="icons javascriptIon">
              <FaJsSquare style={{ height: '100%', width: '100%' }} />
              <p>JavaScript</p>
            </div>
            <div className="icons cssIon">
              <FaCss3Alt style={{ height: '100%', width: '100%' }} />
              <p>CSS</p>
            </div>
            <div className="icons htmlIon">
              <FaHtml5 style={{ height: '100%', width: '100%' }} />
              <p>HTML</p>
            </div>

            <div className="icons taiwindIcon">
              <SiTailwindcss style={{ height: '100%', width: '100%' }} />
              <p>Taiwind CSS</p>
            </div>
            <div className="icons bootstapIon">
              <FaBootstrap style={{ height: '100%', width: '100%' }} />
              <p>Bootstap</p>
            </div>
            <div className="icons gitIcon">
              <FaGitAlt style={{ height: '100%', width: '100%' }} />
              <p>Git</p>
            </div>
            <div className="icons githubIcon">
              <FaGithub style={{ height: '100%', width: '100%' }} />
              <p>GitHub</p>
            </div>
          </div>
          <div className={`read-more-wrapper ${!home ? 'hide-content' : ''}`} >
            <Link to='/skills'>
              <button className='read-more-btn redirect-btn'>
                See more 
                <span className='arrow-icon' ><FaArrowRight /></span> 
              </button>
            </Link>
          </div>
        </div>

        <div className={`tools ${home ? 'hide-content' : ''}`}>
          <h2 className="heading">Tools</h2>
          <div className="toolsIcons">
            <div className="icons">
              <SiVisualstudiocode style={{ height: '100%', width: '100%' }} />
              <p>Vs code</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Skills