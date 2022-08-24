import React from 'react'
import Projects from './Projects'
import ProjectData from '../assets/projectData.json'

const ProjectList = () => {
  ProjectData.sort((a,b)=> b.id - a.id );

  return (
    <>
    <Projects projectData={ProjectData}/>
    </>
    
  )
}

export default ProjectList