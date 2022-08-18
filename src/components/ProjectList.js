import React from 'react'
import Projects from './Projects'
import ProjectData from '../assets/projectData.json'

const ProjectList = () => {
  return (
    <>
    <Projects projectData={ProjectData}/>
    </>
    
  )
}

export default ProjectList