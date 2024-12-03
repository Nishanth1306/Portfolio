import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import profilePicture from '../assets/profile.jpeg';
import gfgLogo from '../assets/gfglogo.jpg';
import leetcode from '../assets/leetcode.png';
import javaLogo from '../assets/java.jpg';
import pythonLogo from '../assets/python.png';
import mernLogo from '../assets/mern.png';
import sqlLogo from '../assets/sql.png';
import leadershipLogo from '../assets/leadership.png';
import about from '../assets/about.jpg';


const Home = () => {
  return (
    <section id="home">
      <div className="hero-section">
        <div className="hero-text">
          <img src={profilePicture} alt="Nishanth.K" className="profile-picture" />
          <h1>Hi, I'm Nishanth.K</h1>
          <div className="social-section">
            <h2>Find me on</h2>
            <div className="social-icons">
              <a href="https://github.com/Nishanth1306" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
              <a href="https://www.geeksforgeeks.org/user/21eea29/" target="_blank" rel="noopener noreferrer" className="icon-link">
                <img src={gfgLogo} alt="Geeks for Geeks" className="icon" />
              </a>
              <a href="https://leetcode.com/u/21eea29/" target="_blank" rel="noopener noreferrer" className="icon-link">
                <img src={leetcode} alt="LeetCode" className="icon" />
              </a>
            </div>
          </div>
          <p>A passionate Developer</p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
      </div>
      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill">
            <img src={javaLogo} alt="Java" className="skill-icon" />
            <span>Java</span>
          </div>
          <div className="skill">
            <img src={pythonLogo} alt="Python" className="skill-icon" />
            <span>Python</span>
          </div>
          <div className="skill">
            <img src={mernLogo} alt="MERN" className="skill-icon" />
            <span>MERN</span>
          </div>
          <div className="skill">
            <img src={sqlLogo} alt="SQL" className="skill-icon" />
            <span>SQL</span>
          </div>
          <div className="skill">
            <img src={leadershipLogo} alt="Leadership" className="skill-icon" />
            <span>Leadership</span>
          </div>
        </div>
      </div>
      
      
      
      <div className="resume-section">
        <h2>Resume</h2>
        <p>You can view or download my resume as a PDF file:</p>
        <a href="https://drive.google.com/file/d/1U_gw1VPnNX2qUJbP15SHSADQtEKbqcy1/view" target="_blank" rel="noopener noreferrer" className="cta-button">View Resume</a>
      </div>
    </section>
  );
};

export default Home;
