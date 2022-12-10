import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menue, setMenue] = useState(false);


  const activeMenue = () => {
    setMenue(!menue);
  }

  const handleOnClick = ()=>{
    if(menue){
      setMenue(!menue)
    }
    
  }


  return (
    <div>
      <header className="headerSection">
        <nav className="navBar" style={{ height: menue ? "300px" : "43px",borderRadius: menue? "0px 0px 100px 20px":"0px" }}>
          <div className="leftNav">
            <div className="logo">
              <Link to="/"><h1>{"</ Onam >"}</h1></Link>
            </div>
          </div>
          <div className="rightNav" style={{ display: menue ? "flex" : "" }} >
            <ul>
              <li onClick={handleOnClick}><Link to="/">Home</Link></li>
              <li onClick={handleOnClick}><Link to="/projects">Projects</Link></li>
              <li onClick={handleOnClick}><Link to="/skills">Skills</Link></li>
              <li onClick={handleOnClick}><Link to="/about">About me</Link></li>
              <li onClick={handleOnClick}><Link to="/contact">Contact me</Link></li>
            </ul>
          </div>
          <div className={`menuBar ${menue ? "menuActive" : ""}`} onClick={activeMenue}>
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