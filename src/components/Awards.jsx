import React from 'react';
import annaUniversity from '../assets/Anna-university.jpg';
import eCell from '../assets/E-cell.jpg';
import eSummit from '../assets/E-summit.jpg';
import './Awards.css';

export default function Awards() {
  const awards = [
    {
      id: 1,
      title: "E-Leader Workshop",
      organization: "Anna University Regional Campus, Coimbatore",
      description: "Participated in a comprehensive 2-day E-Leader Workshop focused on entrepreneurship and leadership development.",
      image: annaUniversity,
      year: "2024",
      category: "Leadership"
    },
    {
      id: 2,
      title: "E-cell Swearing-in Ceremony",
      organization: "Karpagam Institute of Technology",
      description: "Successfully completed the swearing-in ceremony as a member of the E-cell, demonstrating commitment to entrepreneurship.",
      image: eCell,
      year: "2024",
      category: "Entrepreneurship"
    },
    {
      id: 3,
      title: "E-summit 2024 Participation",
      organization: "IIT Bombay",
      description: "Led the E-cell Karpagam team as CEO to participate in the prestigious E-summit 2024 at IIT Bombay, showcasing innovative ideas and networking with industry leaders.",
      image: eSummit,
      year: "2024",
      category: "Innovation"
    }
  ];

  return (
    <section id="awards" className="awards-section section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Awards & Recognitions</h2>
        <p className="section-subtitle animate-on-scroll">
          Celebrating achievements and milestones in my journey
        </p>
        
        <div className="awards-grid">
          {awards.map((award, index) => (
            <div 
              key={award.id} 
              className="award-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="award-image-container">
                <img src={award.image} alt={award.title} className="award-image" />
                <div className="award-overlay">
                  <div className="award-category">{award.category}</div>
                </div>
              </div>
              
              <div className="award-content">
                <div className="award-header">
                  <h3 className="award-title">{award.title}</h3>
                  <span className="award-year">{award.year}</span>
                </div>
                
                <p className="award-organization">{award.organization}</p>
                
                <p className="award-description">{award.description}</p>
                
                <div className="award-badge">
                  <span className="badge-icon">🏆</span>
                  <span className="badge-text">Achievement</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="awards-summary animate-on-scroll">
          <div className="summary-card">
            <h3>Recognition Highlights</h3>
            <div className="summary-stats">
              <div className="summary-stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Awards</span>
              </div>
              <div className="summary-stat">
                <span className="stat-number">2</span>
                <span className="stat-label">Institutions</span>
              </div>
              <div className="summary-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Commitment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
