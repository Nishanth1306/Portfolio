import React from 'react';
import annaUniversity from '../assets/Anna-university.jpg';
import eCell from '../assets/E-cell.jpg';
import eSummit from '../assets/E-summit.jpg';
import './Awards.css'; 

export default function Awards() {
  return (
    <div className="awards-container">
      <h2>Awards and Recognitions</h2>
      <div className="awards-grid">
        <div className="award-item">
          <img src={annaUniversity} alt="Anna University Award" />
          <p>2-Days E-Leader Workshop at Anna University Regional Campus,Coimbatore</p>
        </div>
        <div className="award-item">
          <img src={eCell} alt="E-cell Award" />
          <p>Swearing-in-Ceremony of E-cell</p>
        </div>
        <div className="award-item">
          <img src={eSummit} alt="E-summit Award" />
          <p>Being the CEO of the E-cell Karpagam, Along with my team members, we have participated in the E-summit 2024 at IIT Bombay </p>
        </div>
      </div>
    </div>
  );
}
