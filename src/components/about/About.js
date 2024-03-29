import React from "react";
import "./about.css";
import profileImg from "./assets/profile.jpg";
import CollegeLogo from "./assets/collegeLogo.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const About = ({ home }) => {
  return (
    <div className={`aboutMe ${home ? "bottom-margin" : ""} `}>
      <div className="heading">About Me</div>
      <div className="content">
        <div
          className="profileImg-wrapper"
          style={{ width: home ? "200px" : "" }}
        >
          <img
            className="profile-image"
            src={profileImg}
            alt="img"
            loading="lazy"
          />
          <div className="profile-image-sadow-box"></div>
        </div>
        <div className="innerContent">
          <h3 className={`${home ? "hide-content" : ""}`}>
            Hello! Everyone <span className="wavingHand">👋🏻</span>
          </h3>
          <div className="short-intro">
            <p>
              My name is Onam Kumar Verma and I am a Frontend developer from
              Delhi, India, with a passion for Full stack development.{" "}
            </p>
            <p>
              I learned how to code by myself through online resources, such as{" "}
              <span>
                <a
                  href="https://freecodecamp.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Freecodecamp
                </a>{" "}
                and{" "}
                <a
                  href="https://www.w3schools.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  W3schools
                </a>{" "}
              </span>
              and YouTube videos.
            </p>
          </div>
          <div className={`read-more-wrapper ${!home ? "hide-content" : ""}`}>
            <Link to="/about">
              <button className="read-more-btn redirect-btn">
                Read more
                <span className="arrow-icon">
                  <FaArrowRight />
                </span>
              </button>
            </Link>
          </div>
          <div className={`remain-about-content ${home ? "hide-content" : ""}`}>
            <p>
              I have always been fascinated by web technology, ever since I was
              in college and I used to create blogging websites using Google's
              Blogspot platform and customize the blog themes and templates with
              the help of HTML and CSS.
            </p>
            <p>Everyday i try to learn somethings new...</p>

            <div className="quotes">
              <i>‟ Stay Hungry Stay Foolish... ” </i>
              <i>- Steve Jobs</i>
            </div>

            <div className="educationBox">
              <h3>Education</h3>
              <div className="eduContent">
                <img src={CollegeLogo} alt="college logo" />
                <div className="collegeDetails">
                  <h4>Zakir Husain Delhi College</h4>
                  <i>(University of Delhi)</i>
                  <p>B.SC(H) Chemistry</p>
                </div>
              </div>
            </div>

            <div className="certificates-wrapper">
              <div className="heading certificate-heading">Certificates</div>
              <div className="certificate-title-image-wrapper">
                <h5 className="certificate-title">
                  JavaScript Algorithms and Data Structures
                </h5>
                <a
                  href="https://freecodecamp.org/certification/fccd6827402-2aa3-473a-8fd3-06849e4a7845/javascript-algorithms-and-data-structures"
                  target="_blank"
                  rel="noreferrer"
                >
                  View certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
