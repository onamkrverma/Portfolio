import React from 'react'
import './skills.css'
import skillsVector from './assets/skills1.png'
import vscode from './assets/vscode.png'
import tailwindcss from './assets/tailwindcss.svg'
import { Link } from 'react-router-dom'




const Skills = ({ home }) => {
  return (
    <>
      <div className="Container" id="my">
        <h1 className="heading">Skills</h1>
        <div className={`skillsVector `}>
          <img src={skillsVector} alt="vector img" />
        </div>
        <div className="skills">
          <div className="skillsInneer">
            <div className="icons reactIcon">
              <i className="fa-brands fa-react"></i>
              <p>React js</p>
            </div>
            <div className="icons javascriptIon">
              <i className="fa-brands fa-square-js"></i>
              <p>JavaScript</p>
            </div>
            <div className="icons cssIon">
              <i className="fa-brands fa-css3-alt"></i>
              <p>CSS</p>
            </div>
            <div className="icons htmlIon">
              <i className="fa-brands fa-html5"></i>
              <p>HTML</p>
            </div>

            <div className="icons taiwindIcon">
              <img className='taiwindcss-logo' src={tailwindcss} alt="taiwindcss" />
              <p>Taiwind CSS</p>
            </div>
            <div className="icons bootstapIon">
              <i className="fa-brands fa-bootstrap"></i>
              <p>Bootstap</p>
            </div>
            <div className="icons gitIcon">
              <i className="fa-brands fa-git-alt"></i>
              <p>Git</p>
            </div>
            <div className="icons githubIcon">
              <i className="fa-brands fa-github"></i>
              <p>GitHub</p>
            </div>
          </div>
          <div className={`read-more-wrapper ${!home ? 'hide-content' : ''}`} >
            <Link to='/skills'><button className='read-more-btn redirect-btn'>Explore more..</button></Link>
          </div>
        </div>

        <div className={`tools ${home ? 'hide-content' : ''}`}>
          <h2 className="heading">Tools</h2>
          <div className="toolsIcons">
            <div className="icons">
              <img src={vscode} alt="vs code icon" />
              <p>vs code</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Skills