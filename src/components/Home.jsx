import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import profilePicture from '../assets/profile.jpeg';
import gfgLogo from '../assets/gfglogo.jpg';
import leetcode from '../assets/leetcode.png';
import javaLogo from '../assets/java.jpg';
import pythonLogo from '../assets/python.png';
import mernLogo from '../assets/mern.png';
import sqlLogo from '../assets/sql.png';
import leadershipLogo from '../assets/leadership.png';

const Home = () => {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section id="home" className="hero-section" ref={heroRef}>
        <div className="hero-background">
          <div className="gradient-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text animate-on-scroll">
              <div className="profile-container">
                <div className="profile-image-wrapper">
                  <img src={profilePicture} alt="Nishanth.K" className="profile-picture" />
                  <div className="profile-glow"></div>
                </div>
              </div>
              
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Nishanth.K</span>
              </h1>
              
              <p className="hero-subtitle">
                A passionate <span className="typing-text">Developer</span>
              </p>
              
              <p className="hero-description">
                Crafting innovative solutions with modern technologies and creative problem-solving approaches.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Get in Touch
                  <FontAwesomeIcon icon={faArrowRight} className="btn-icon" />
                </a>
                <a 
                  href="https://drive.google.com/file/d/1U_gw1VPnNX2qUJbP15SHSADQtEKbqcy1/view" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                >
                  <FontAwesomeIcon icon={faDownload} className="btn-icon" />
                  View Resume
                </a>
              </div>

              <div className="social-section animate-on-scroll">
                <h3 className="social-title">Connect with me</h3>
                <div className="social-icons">
                  <a 
                    href="https://github.com/Nishanth1306" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link"
                    aria-label="GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} className="social-icon" />
                  </a>
                  <a 
                    href="https://www.geeksforgeeks.org/user/21eea29/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link"
                    aria-label="Geeks for Geeks"
                  >
                    <img src={gfgLogo} alt="Geeks for Geeks" className="social-icon" />
                  </a>
                  <a 
                    href="https://leetcode.com/u/21eea29/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link"
                    aria-label="LeetCode"
                  >
                    <img src={leetcode} alt="LeetCode" className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section section" ref={skillsRef}>
        <div className="container">
          <h2 className="section-title animate-on-scroll">Technical Skills</h2>
          <p className="section-subtitle animate-on-scroll">
            My expertise spans across various technologies and frameworks
          </p>
          
          <div className="skills-grid">
            <div className="skill-card animate-on-scroll">
              <div className="skill-icon-wrapper">
                <img src={javaLogo} alt="Java" className="skill-icon" />
              </div>
              <h3 className="skill-name">Java</h3>
              <p className="skill-description">Object-oriented programming and enterprise development</p>
            </div>
            
            <div className="skill-card animate-on-scroll">
              <div className="skill-icon-wrapper">
                <img src={pythonLogo} alt="Python" className="skill-icon" />
              </div>
              <h3 className="skill-name">Python</h3>
              <p className="skill-description">Data science, automation, and web development</p>
            </div>
            
            <div className="skill-card animate-on-scroll">
              <div className="skill-icon-wrapper">
                <img src={mernLogo} alt="MERN Stack" className="skill-icon" />
              </div>
              <h3 className="skill-name">MERN Stack</h3>
              <p className="skill-description">Full-stack web development with modern technologies</p>
            </div>
            
            <div className="skill-card animate-on-scroll">
              <div className="skill-icon-wrapper">
                <img src={sqlLogo} alt="SQL" className="skill-icon" />
              </div>
              <h3 className="skill-name">SQL</h3>
              <p className="skill-description">Database design and management</p>
            </div>
            
            <div className="skill-card animate-on-scroll">
              <div className="skill-icon-wrapper">
                <img src={leadershipLogo} alt="Leadership" className="skill-icon" />
              </div>
              <h3 className="skill-name">Leadership</h3>
              <p className="skill-description">Team management and project coordination</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
