import React, { useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menue, setMenue] = useState(false);
   

    const activeMenue = ()=>{
        setMenue(!menue);
    }

    

  return (
    <div>
        <header className="headerSection">
        <nav className="navBar" style={{height: menue?"280px":"43px"}}>
            <div className="leftNav">
                <div className="logo">
                    <h1>{"</ Onam >"} </h1>
                </div>
            </div>
            <div className="rightNav" style={{display: menue?"flex":""}} >
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Project</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                </ul>
            </div>
            <div className={`menuBar ${menue ?"menuActive":""}`} onClick={activeMenue}>
                <div className="line line1 "></div>
                <div className="line line2 "></div>
                <div className="line line3"></div>
            </div>
        </nav>

    </header>
    </div>
  )
}

export default Navbar