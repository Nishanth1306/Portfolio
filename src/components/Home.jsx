import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
  const fullText = "A Passionate Software Developer";
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting && currentIndex < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
    } else if (!isDeleting && currentIndex === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && currentIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      }, 50);
    } else if (isDeleting && currentIndex === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 400);
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, fullText]);

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
    <div>
      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100 py-24">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 blur-2xl opacity-30"></div>
              <img src={profilePicture} alt="Nishanth.K" className="relative w-40 h-40 md:w-52 md:h-52 rounded-full ring-4 ring-white shadow-xl object-cover" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Nishanth.K</span>
            </h1>
            <p className="mt-3 text-xl md:text-2xl text-gray-700 font-semibold">
              <span>{displayText}</span>
              <span className="text-indigo-600">|</span>
            </p>
            <p className="mt-4 max-w-2xl text-gray-600">
              Crafting innovative solutions with modern technologies and creative problem-solving approaches.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold shadow hover:shadow-lg transition transform hover:-translate-y-0.5">
                Get in Touch
                <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
              </a>
              <a
                href="https://drive.google.com/file/d/1U_gw1VPnNX2qUJbP15SHSADQtEKbqcy1/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-indigo-200 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 font-semibold transition"
              >
                <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
                View Resume
              </a>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Connect with me</h3>
              <div className="flex items-center gap-4">
                <a href="https://github.com/Nishanth1306" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:shadow-md transition">
                  <FontAwesomeIcon icon={faGithub} className="text-gray-800 h-5 w-5" />
                </a>
                <a href="https://www.geeksforgeeks.org/user/21eea29/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:shadow-md transition">
                  <img src={gfgLogo} alt="Geeks for Geeks" className="h-5" />
                </a>
                <a href="https://leetcode.com/u/21eea29/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:shadow-md transition">
                  <img src={leetcode} alt="LeetCode" className="h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 px-4 bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Technical Skills</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">My expertise spans across various technologies and frameworks</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[{
              logo: javaLogo, name: 'Java', desc: 'Object-oriented programming and enterprise development'
            },{
              logo: pythonLogo, name: 'Python', desc: 'Data science, automation, and web development'
            },{
              logo: mernLogo, name: 'MERN Stack', desc: 'Full-stack web development with modern technologies'
            },{
              logo: sqlLogo, name: 'SQL', desc: 'Database design and management'
            },{
              logo: null, name: 'Go', desc: 'High-performance systems and microservices development', text: 'Go'
            },{
              logo: null, name: 'FastAPI', desc: 'Modern, fast web APIs with automatic documentation', text: 'FastAPI'
            },{
              logo: null, name: 'DevOps', desc: 'CI/CD pipelines, containerization, and cloud deployment', text: 'DevOps'
            },{
              logo: null, name: 'Selenium', desc: 'Web automation and testing frameworks', text: 'Selenium'
            },{
              logo: leadershipLogo, name: 'Leadership', desc: 'Team management and project coordination'
            }].map((skill, idx) => (
              <div key={idx} className="group relative rounded-2xl bg-white/90 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mb-4">
                    {skill.logo ? (
                      <img src={skill.logo} alt={skill.name} className="h-9 object-contain" />
                    ) : (
                      <span className="text-sm font-bold text-gray-800">{skill.text}</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{skill.desc}</p>
                </div>
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
