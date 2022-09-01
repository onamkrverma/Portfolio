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
        <nav className="navBar" style={{height: menue?"245px":"43px"}}>
            <div className="leftNav">
                <div className="logo">
                    <Link to="/"><h1>{"</ Onam >"}</h1></Link>
                </div>
            </div>
            <div className="rightNav" style={{display: menue?"flex":""}} >
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/projects">PROJECTS</Link></li>
                    <li><Link to="/skills">SKILLS</Link></li>
                    <li><Link to="/about">ABOUT ME</Link></li>
                    <li><Link to="/contact">CONTACT ME</Link></li>
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