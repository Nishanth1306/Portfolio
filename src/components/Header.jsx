import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? 'bg-white/90 backdrop-blur border-b border-gray-200 shadow-md'
          : 'bg-white/70 backdrop-blur border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <nav className="relative flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={closeMenu}
            className="relative z-10 font-extrabold text-xl tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Nishanth.K
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
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

          <button
            type="button"
            className="relative z-10 md:hidden inline-flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition-transform origin-center ${
                isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition-opacity ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition-transform origin-center ${
                isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </nav>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          isMobileMenuOpen ? 'max-h-[min(28rem,calc(100dvh-4rem))] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 pb-4 pt-2 border-t border-gray-200 bg-white/95">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                onClick={closeMenu}
                href={link.href}
                className="block rounded-lg px-3 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 font-medium transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-1">
            <a
              href="https://www.linkedin.com/in/nishanth--k/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-4 py-3 font-semibold shadow"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
