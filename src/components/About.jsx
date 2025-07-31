import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">About Me</h2>
        <p className="section-subtitle animate-on-scroll">
          Get to know me better and understand my journey in technology
        </p>
        
        <div className="about-content">
          <div className="about-text animate-on-scroll">
            <div className="about-card">
              <h3 className="about-subtitle">Background</h3>
              <p>
                I am <strong>Nishanth.K</strong>, a passionate developer from Electrical and Electronics Engineering 
                at Karpagam Institute of Technology, Coimbatore. My journey in software development began during 
                my college years, where I developed a keen interest in coding and problem-solving.
              </p>
            </div>
            
            <div className="about-card">
              <h3 className="about-subtitle">Expertise</h3>
              <p>
                I have a solid foundation in various programming languages and technologies, including 
                <strong> Java</strong>, <strong>Python</strong>, <strong>MERN stack</strong>, and <strong>SQL</strong>. 
                Since then, I have been continuously learning and honing my skills to become a proficient developer.
              </p>
            </div>
            
            <div className="about-card">
              <h3 className="about-subtitle">Approach</h3>
              <p>
                With a proactive and collaborative approach, I thrive in dynamic environments where I can 
                contribute my expertise to develop high-quality software solutions. I am always eager to take 
                on new challenges and expand my knowledge in the ever-evolving field of technology.
              </p>
            </div>
            
            <div className="about-card">
              <h3 className="about-subtitle">Passion</h3>
              <p>
                I am passionate about creating innovative solutions to real-world problems. My goal is to 
                leverage technology to make a positive impact and contribute to meaningful projects that 
                benefit society.
              </p>
            </div>
          </div>
          
          <div className="about-stats animate-on-scroll">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">6+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Awards</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
