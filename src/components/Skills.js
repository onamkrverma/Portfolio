import React from 'react'
import SkillsVector from '../assets/skills1.png'
const Skills = () => {
    return (
        <div className="skillsContainer" id="mySkills">
            <h1 className="heading">Skills</h1>
            <div className="skillsVector">
                <img src={SkillsVector} alt="vector img" />
            </div>
            <div className="skills">
                <div className="skillsInneer">
                    <div className="skillsIcons javascriptIon">
                        <i className="fa-brands fa-square-js"></i>
                        <p>JavaScript</p>
                    </div>
                    <div className="skillsIcons cssIon">
                        <i className="fa-brands fa-css3-alt"></i>
                        <p>CSS</p>
                    </div>
                    <div className="skillsIcons htmlIon">
                        <i className="fa-brands fa-html5"></i>
                        <p>HTML</p>
                    </div>
                    
                    <div className="skillsIcons bootstapIon">
                        <i className="fa-brands fa-bootstrap"></i>
                        <p>Bootstap</p>
                    </div>
                    <div className="skillsIcons gitIcon">
                        <i className="fa-brands fa-git-alt"></i>
                        <p>Git</p>
                    </div>
                    <div className="skillsIcons githubIcon">
                        <i className="fa-brands fa-github"></i>
                        <p>GitHub</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills