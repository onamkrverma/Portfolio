import React from 'react'
import './projects.css'
import projectVectorImg from './assets/projectStages-amico.svg';
import { projectData } from '../../data/projectData';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';


const Projects = ({ home }) => {
  projectData.sort((a, b) => b.id - a.id);

  let projectList = projectData

  if (home) {
    projectList = projectData.slice(0, 3);
  }

  return (
    <>
      <div className={`projectContainer ${home ? 'bottom-margin':''}`} >
        <div className="heading-vector-wrapper">
          <div className="heading">Projects</div>
          <div className="projectVectorImg">
            <img src={projectVectorImg} alt="project vector img" />
          </div>
        </div>
        <div className="project">
          {projectList.map((element) =>
            <div className="projectInner" key={element.id}>
              <div className="project-image-wrapper">
              <img 
              className={`project-image ${element.id==='1' ? 'hide-image-scroll':''}`}
              src={element.image}
              alt="project img " />
              </div>
              <div className="project-title-desc-wrapper">
                <div className="project-title">
                <h3 className="projectTitle">{element.title}</h3>
                </div>
                <div className="project-desc">
                <p>{element.description} </p>
                </div>
              </div>
              <div className="project-tech-used-wrapper">
                <div className="tech-used-wrapper">
                  Tech Used :-  {element.techUsed}
                </div>
              </div>
              <div className=" projectLinks">
                {element.github && <a rel="noreferrer" href={element.github} target="_blank" title='github source code'>
                  <button type='button' title="GitHub" className='redirect-btn' >
                    GitHub
                  </button>
                </a >}
                {element.demo && <a rel="noreferrer" href={element.demo} target="_blank" title='demo link'>
                  <button type='button' title="Demo" className='redirect-btn second-btn-style'>
                    Demo
                  </button>
                </a >}
              </div>
            </div>)}

          <div className={`read-more-wrapper ${!home ? 'hide-content' : ''}`} >
            <Link to='/projects'><button className='read-more-btn redirect-btn'>
              View All projects
              <span className='arrow-icon' ><FaArrowRight /></span>
            </button>
            </Link>
          </div>
        </div>
        <div className={`note-wrapper ${home ? 'hide-content' : ''}`}>
          <p>More project comming soon..</p>
        </div>
      </div>
    </>
  )
}

export default Projects