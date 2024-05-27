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
      
      <div className="projects-overview">
        <h2>Featured Projects</h2>
        <div className="projects-list">
          <div className="project-item">
            <h3>Smart Street Light</h3>
            <p>These lights are designed to illuminate based on the condition of the atmosphere, to reduce the loss of electricity, and to maintain the efficiency of the streetlight.</p>
          </div>
          <div className="project-item">
            <h3>Smart Pole</h3>
            <p>Smart Pole is the new model of street light, where various devices like wifi modems, cameras, LED displays, and emergency SOS are integrated to improve the safety of the public. This can increase the lives of the public by providing for all their needs in public places and increasing their security in public areas.
             <br></br><br></br><strong>
Energy Efficiency:</strong> Equipped with LED lights and smart sensors, these poles adjust brightness based on ambient light and pedestrian activity, reducing energy consumption.
<br></br><p><strong>Remote Management:</strong> Centralized control systems allow city officials to monitor and manage lighting in real-time, identifying and resolving issues swiftly.
</p><p><strong>Surveillance Cameras:</strong> Integrated cameras enhance security by providing high-resolution footage, aiding in crime prevention and investigation.
</p></p>
          </div>
          <div className="project-item">
            <h3>Fault Detection in the Street Light</h3>
            <p>The fault in the street lights will be identified automatically, and an alert notification will be sent to the control room to resolve the fault.</p><p> This reduces the time delay in finding out the fault manually. We have used various sensors for predicting faults like pole faults, light intensity faults, and power faults using the Lux sensor, tilt sensor, voltage sensor, and current sensor</p><p>For the prototype model, we also installed a GSM module with ESP 8266 to send the SMS. We have also made the output available to display in the Output Data section of the Thingspeak website.</p><p>
We have also built a user-friendly website for the technician to locate the fault.</p>
          </div>
        </div>
      </div>
      
      <div className="resume-section">
        <h2>Resume</h2>
        <p>You can view or download my resume as a PDF file:</p>
        <a href="https://drive.google.com/file/d/1G0A_9IDQ1bj6LpaOMvIsw0vKQ6X8Pl35/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cta-button">View Resume</a>
      </div>
    </section>
  );
};

export default Home;
