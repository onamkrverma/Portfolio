import React from 'react'
import projectVectorImg from '../assets/vectorProject.png'

const Projects = (props) => {
    const {projectData} = props;
    
  return (
    <>
        <div className="projectContainer" id="projects">
            <h1 className="heading">Projects</h1> 
            <div className="projectVectorImg">
                <img src={projectVectorImg} alt="project vector img" />
            </div>

            <div className="project">
                {projectData.map((element)=>
                <div className="projectInner" key={element.id}>
                    <img src={element.image} alt="project img "/>
                    <h3 className="projectTitle">{element.title}</h3>
                    <p>{element.description} </p>
                    <div className="btn projectLinks">
                    {element.github && <a rel="noreferrer" href={element.github} target="_blank" title='github source code'><input type="button" value="GitHub" /></a >}
                    {element.demo && <a rel="noreferrer" href={element.demo} target="_blank" title='demo link'><input type="button" value="Demo" /></a >}                
                    </div>
                </div>)}
                
            </div>
            <p>More project comming soon..</p>
        </div>
    </>
  )
}

export default Projects