import React from 'react'
import './projects.css'
import projectVectorImg from './assets/vectorProject.png';
import { projectData } from '../../data/projectData';
import { Link } from 'react-router-dom';

const Projects = ({ home }) => {
  projectData.sort((a, b) => b.id - a.id);

  let projectList = projectData

  if (home) {
    projectList = projectData.slice(0, 3);
  }

  return (
    <>
      <div className="projectContainer bottom-margin" >
        <div className="heading">Projects</div>
        <div className="projectVectorImg">
          <img src={projectVectorImg} alt="project vector img" />
        </div>

        <div className="project">
          {projectList.map((element) =>
            <div className="projectInner" key={element.id}>
              <img src={element.image} alt="project img " />
              <h3 className="projectTitle">{element.title}</h3>
              <p>{element.description} </p>
              <div className=" projectLinks">
                {element.github && <a rel="noreferrer" href={element.github} target="_blank" title='github source code'><button title="GitHub" className='redirect-btn' >
                  GitHub</button></a >}
                {element.demo && <a rel="noreferrer" href={element.demo} target="_blank" title='demo link'><button title="Demo" className='redirect-btn'>Demo</button>
                </a >}
              </div>
            </div>)}

          <div className={`read-more-wrapper ${!home ? 'hide-content' : ''}`} >
            <Link to='/projects'><button className='read-more-btn redirect-btn'>View All Projects <i className="fa-solid fa-arrow-right"></i></button></Link>
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