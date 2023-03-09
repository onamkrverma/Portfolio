import React from 'react'
import './skills.css'
import skillsVector from './assets/javaScript frameworks-pana.svg'
import { Link } from 'react-router-dom'
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaBootstrap, FaGitAlt, FaGithub, FaArrowRight, FaNodeJs } from 'react-icons/fa'
import { SiFirebase, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si'

const Skills = ({ home }) => {


  const skillsObj = [
    {
      id: '1',
      title: 'React js',
      vectorIcon: <FaReact style={{ height: '100%', width: '100%' }} />
    },
    {
      id: '2',
      title: 'Node js',
      vectorIcon: <FaNodeJs style={{ height: '100%', width: '100%' }} />
    },
    {
      id: '3',
      title: 'JavaScript',
      vectorIcon: <FaJsSquare style={{ height: '100%', width: '100%' }} />
    },
    {
      id: '4',
      title: 'CSS3',
      vectorIcon: <FaCss3Alt style={{ height: '100%', width: '100%' }} />
    },
    {
      id: '5',
      title: 'HTML5',
      vectorIcon: <FaHtml5 style={{ height: '100%', width: '100%' }} />
    },
    {
      id: '6',
      title: 'Tailwind Css',
      vectorIcon: <SiTailwindcss style={{ height: '100%', width: '100%' }} />
    },
    {
      id: '7',
      title: 'Bootstrap',
      vectorIcon: <FaBootstrap style={{ height: '100%', width: '100%' }} />
    },
    {
      id: '8',
      title: 'Git',
      vectorIcon: <FaGitAlt style={{ height: '100%', width: '100%' }} />
    },
    {
      id: '9',
      title: 'GitHub',
      vectorIcon: <FaGithub style={{ height: '100%', width: '100%' }} />
    },
    {
      id: '10',
      title: 'Firebase',
      vectorIcon: <SiFirebase style={{ height: '100%', width: '100%' }} />
    },
  ]




  return (
    <>
      <div className={`container bottom-margin`} id="my">
        <div className="heading-vector-wrapper">
          <div className="heading">Skills</div>
          <div className={`skillsVector `}>
            <img src={skillsVector} alt="vector img" />
          </div>
        </div>
        <div className="skills">
          <div className="skillsInneer" >
            {home ? skillsObj.slice(0,6).map((skill) =>
              <div className="icons skill-icon-title-wrapper" key={skill.id}>
                {skill.vectorIcon}
                <p>{skill.title}</p>
              </div>
            )
            :
            skillsObj.map((skill) =>
            <div className="icons skill-icon-title-wrapper" key={skill.id}>
              {skill.vectorIcon}
              <p>{skill.title}</p>
            </div>
            )
          }
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
              <p>Vs Code</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Skills