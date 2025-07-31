import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <a href="#home" className="brand-link">
              <span className="brand-text">Nishanth.K</span>
            </a>
          </div>
          
          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#awards" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  Awards
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="https://www.linkedin.com/in/nishanth--k/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link linkedin-link"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div 
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
