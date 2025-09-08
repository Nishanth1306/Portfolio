import React, { useState, useEffect } from 'react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? 'bg-white/90 backdrop-blur border-b border-gray-200 shadow-md' : 'bg-white/70 backdrop-blur border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <a href="#home" className="relative font-extrabold text-xl tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Nishanth.K
          </a>

          <div className={`fixed md:static inset-0 md:inset-auto md:flex md:items-center md:gap-8 transition-all ${isMobileMenuOpen ? 'right-0 bg-white/95 backdrop-blur md:bg-transparent' : 'right-[-100%]'} md:right-auto`}> 
            <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-24 md:mt-0 px-6 md:px-0">
              <li><a onClick={() => setIsMobileMenuOpen(false)} href="#home" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Home</a></li>
              <li><a onClick={() => setIsMobileMenuOpen(false)} href="#about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">About</a></li>
              <li><a onClick={() => setIsMobileMenuOpen(false)} href="#projects" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Projects</a></li>
              <li><a onClick={() => setIsMobileMenuOpen(false)} href="#awards" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Awards</a></li>
              <li><a onClick={() => setIsMobileMenuOpen(false)} href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Contact</a></li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/nishanth--k/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-4 py-2 font-semibold shadow hover:shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <button 
            className="md:hidden inline-flex flex-col gap-1.5 p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
            onClick={() => setIsMobileMenuOpen(v => !v)}
            aria-label="Toggle Menu"
          >
            <span className={`h-0.5 w-6 bg-gray-800 transition ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-gray-800 transition ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-gray-800 transition ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;