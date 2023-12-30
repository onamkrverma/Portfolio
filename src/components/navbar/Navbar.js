import React, { useState } from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [menue, setMenue] = useState(false);

  const activeMenue = () => {
    setMenue(!menue);
  };

  const handleOnClick = () => {
    if (menue) {
      setMenue(!menue);
    }
  };

  return (
    <header className="headerSection">
      <div className="nav-alert-message">
        <p>
          ⚠️ This site is no longer updated. Please go to{" "}
          <a
            href="http://onam.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            onam.vercel.app
          </a>{" "}
          ⚠️
        </p>
      </div>
      <nav
        className="navBar"
        style={{
          height: menue ? "300px" : "60px",
          borderRadius: menue ? "0px 0px 100px 20px" : "0px",
        }}
      >
        <div className="leftNav">
          <div className="logo">
            <Link to="/">
              <span>{"</ Onam >"}</span>
            </Link>
          </div>
        </div>
        <div className="rightNav" style={{ display: menue ? "flex" : "" }}>
          <ul>
            <li onClick={handleOnClick}>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>
            <li onClick={handleOnClick}>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About
              </NavLink>
            </li>
            <li onClick={handleOnClick}>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Projects
              </NavLink>
            </li>
            <li onClick={handleOnClick}>
              <NavLink
                to="/skills"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Skills
              </NavLink>
            </li>
            <li onClick={handleOnClick}>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className={`menuBar ${menue ? "menuActive" : ""}`}
          onClick={activeMenue}
        >
          <div className="line line1 "></div>
          <div className="line line2 "></div>
          <div className="line line3"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
