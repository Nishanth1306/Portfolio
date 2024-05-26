import React from 'react';

const Header = () => {
  return (
    <header className="header">
    <nav className="nav">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        {/* <li><a href="#portfolio">Portfolio</a></li> */}
        <li><a href="#contact">Contact</a></li>
        <li>
            <a 
              href="https://www.linkedin.com/in/nishanth--k/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </li>
          </ul>
      </nav>
    </header>
  )
};

export default Header;
