// import React from 'react';
// import './About.css';

// export default function About() {
//   return (
//     <section id="about" className="about-section section">
//       <div className="container">
//         <h2 className="section-title animate-on-scroll">About Me</h2>
//         <p className="section-subtitle animate-on-scroll">
//           Get to know me better and understand my journey in technology
//         </p>
        
//         <div className="about-content">
//           <div className="about-text animate-on-scroll">
//             <div className="about-card">
//               <h3 className="about-subtitle">Background</h3>
//               <p>
//                 I am <strong>Nishanth.K</strong>, a passionate developer from Electrical and Electronics Engineering 
//                 at Karpagam Institute of Technology, Coimbatore. My journey in software development began during 
//                 my college years, where I developed a keen interest in coding and problem-solving.
//               </p>
//             </div>
            
//             <div className="about-card">
//               <h3 className="about-subtitle">Expertise</h3>
//               <p>
//                 I have a solid foundation in various programming languages and technologies, including 
//                 <strong> Java</strong>, <strong>Python</strong>, <strong>MERN stack</strong>, and <strong>SQL</strong>. 
//                 Since then, I have been continuously learning and honing my skills to become a proficient developer.
//               </p>
//             </div>
            
//             <div className="about-card">
//               <h3 className="about-subtitle">Approach</h3>
//               <p>
//                 With a proactive and collaborative approach, I thrive in dynamic environments where I can 
//                 contribute my expertise to develop high-quality software solutions. I am always eager to take 
//                 on new challenges and expand my knowledge in the ever-evolving field of technology.
//               </p>
//             </div>
            
//             <div className="about-card">
//               <h3 className="about-subtitle">Passion</h3>
//               <p>
//                 I am passionate about creating innovative solutions to real-world problems. My goal is to 
//                 leverage technology to make a positive impact and contribute to meaningful projects that 
//                 benefit society.
//               </p>
//             </div>
//           </div>
          
//           <div className="about-stats animate-on-scroll">
//             <div className="stats-grid">
//               <div className="stat-item">
//                 <div className="stat-number">5+</div>
//                 <div className="stat-label">Technologies</div>
//               </div>
//               <div className="stat-item">
//                 <div className="stat-number">6+</div>
//                 <div className="stat-label">Projects</div>
//               </div>
//               <div className="stat-item">
//                 <div className="stat-number">3+</div>
//                 <div className="stat-label">Awards</div>
//               </div>
//               <div className="stat-item">
//                 <div className="stat-number">100%</div>
//                 <div className="stat-label">Dedication</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect } from 'react';

export default function About() {
  const [animatedStats, setAnimatedStats] = useState({
    technologies: 0,
    projects: 0,
    awards: 0,
    dedication: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate stats
            const animateValue = (start, end, duration, key) => {
              const startTime = performance.now();
              const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const current = Math.floor(start + (end - start) * progress);
                
                setAnimatedStats(prev => ({ ...prev, [key]: current }));
                
                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };
              requestAnimationFrame(animate);
            };

            // Animate each stat
            animateValue(0, 5, 1000, 'technologies');
            animateValue(0, 6, 1200, 'projects');
            animateValue(0, 3, 800, 'awards');
            animateValue(0, 100, 1500, 'dedication');
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Java', level: 85, color: 'bg-orange-500' },
    { name: 'Python', level: 80, color: 'bg-blue-500' },
    { name: 'MERN Stack', level: 75, color: 'bg-green-500' },
    { name: 'SQL', level: 70, color: 'bg-purple-500' },
    { name: 'Problem Solving', level: 90, color: 'bg-red-500' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate developer with a strong foundation in modern technologies and a drive for innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Introduction Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Who I Am</h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                I am <span className="font-semibold text-slate-800">Nishanth.K</span>, a passionate developer from Electrical and Electronics Engineering 
                at Karpagam Institute of Technology, Coimbatore. My journey in software development began during 
                my college years, where I developed a keen interest in coding and problem-solving.
              </p>
            </div>

            {/* Two-column cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Expertise</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Proficient in <span className="font-semibold text-slate-800">Java, Python, MERN stack,</span> and <span className="font-semibold text-slate-800">SQL</span>. 
                  Continuously learning and adapting to new technologies in the ever-evolving field of software development.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Approach</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Proactive and collaborative mindset, thriving in dynamic environments where I can 
                  contribute expertise to develop high-quality software solutions.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 shadow-xl text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">My Mission</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-95">
                Passionate about creating innovative solutions to real-world problems. My goal is to 
                leverage technology to make a positive impact and contribute to meaningful projects that 
                benefit society and drive digital transformation.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600">{animatedStats.technologies}+</div>
                  <div className="text-sm text-slate-600 font-medium">Technologies</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600">{animatedStats.projects}+</div>
                  <div className="text-sm text-slate-600 font-medium">Projects</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600">{animatedStats.awards}+</div>
                  <div className="text-sm text-slate-600 font-medium">Awards</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600">{animatedStats.dedication}%</div>
                  <div className="text-sm text-slate-600 font-medium">Dedication</div>
                </div>
              </div>
            </div>

            {/* Skills Progress */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 delay-${index * 200}`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            {/* <div className="bg-slate-800 rounded-2xl p-6 shadow-xl text-white">
              <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
              <p className="text-slate-300 mb-6">
                Ready to collaborate on exciting projects? Let's discuss how we can work together.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 hover:scale-105"
              >
                Get In Touch
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div> */}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Journey</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-8">
              <div className="relative flex items-start">
                <div className="absolute left-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="ml-12">
                  <h4 className="text-lg font-semibold text-slate-800">Education</h4>
                  <p className="text-blue-600 font-medium">Electrical and Electronics Engineering</p>
                  <p className="text-slate-600">Karpagam Institute of Technology, Coimbatore</p>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="absolute left-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="ml-12">
                  <h4 className="text-lg font-semibold text-slate-800">Development Journey</h4>
                  <p className="text-purple-600 font-medium">Self-taught Full Stack Developer</p>
                  <p className="text-slate-600">Mastered multiple programming languages and frameworks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}