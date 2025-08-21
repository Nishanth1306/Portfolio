// import React, { useState, useEffect } from 'react';
// import './Header.css';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
//       <div className="container">
//         <nav className="nav">
//           <div className="nav-brand">
//             <a href="#home" className="brand-link">
//               <span className="brand-text">Nishanth.K</span>
//             </a>
//           </div>
          
//           <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
//             <ul className="nav-list">
//               <li className="nav-item">
//                 <a href="#home" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
//                   About
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a href="#projects" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
//                   Projects
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a href="#awards" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
//                   Awards
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
//                   Contact
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a 
//                   href="https://www.linkedin.com/in/nishanth--k/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="nav-link linkedin-link"
//                 >
//                   LinkedIn
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div 
//             className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


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

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#awards', label: 'Awards' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/60 py-3' 
        : 'bg-white/90 backdrop-blur-sm border-b border-slate-100/40 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="group relative text-2xl font-bold text-slate-800 hover:text-slate-900 transition-colors duration-200"
            >
              Nishanth.K
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute inset-x-4 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
              </a>
            ))}
            
            {/* LinkedIn Button - Separated */}
            <div className="ml-6 pl-6 border-l border-slate-200">
              <a
                href="https://www.linkedin.com/in/nishanth--k/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-md shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
                }`}></span>
                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute left-0 top-5 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0'
                }`}></span>
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-4 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-4 shadow-lg border border-slate-200/60">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile LinkedIn Button */}
            <div className="pt-2 border-t border-slate-200">
              <a
                href="https://www.linkedin.com/in/nishanth--k/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center px-3 py-2 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-md transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;