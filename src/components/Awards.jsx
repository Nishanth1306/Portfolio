import React, { useState, useEffect } from 'react';
import ecell from "../assets/E-cell.jpg"
import esummit from "../assets/E-summit.jpg"
import eleader from "../assets/Anna-university.jpg"

export default function Awards() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ awards: 10, institutions: 8, commitment: 9});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate stats
            const animateValue = (start, end, duration, key, suffix = '') => {
              const startTime = performance.now();
              const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const current = Math.floor(start + (end - start) * progress);
                
                setAnimatedStats(prev => ({ ...prev, [key]: current + suffix }));
                
                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };
              requestAnimationFrame(animate);
            };

            animateValue(0, 3, 800, 'awards');
            animateValue(0, 2, 1000, 'institutions');
            animateValue(0, 100, 1200, 'commitment', '%');
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('awards');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const awards = [
    {
      id: 1,
      title: "E-Leader Workshop",
      organization: "Anna University Regional Campus, Coimbatore",
      description: "Participated in a comprehensive 2-day E-Leader Workshop focused on entrepreneurship and leadership development, gaining valuable insights into modern business strategies.",
      image :eleader,
      year: "2024",
      category: "Leadership",
      icon: "👑",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      title: "E-cell Swearing-in Ceremony",
      organization: "Karpagam Institute of Technology",
      description: "Successfully completed the swearing-in ceremony as a member of the E-cell, demonstrating commitment to entrepreneurship and innovation within the academic community.",
      image: ecell,
      year: "2024",
      category: "Entrepreneurship",
      icon: "🚀",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      id: 3,
      title: "E-summit 2024 Participation",
      organization: "IIT Bombay",
      description: "Led the E-cell Karpagam team as CEO to participate in the prestigious E-summit 2024 at IIT Bombay, showcasing innovative ideas and networking with industry leaders.",
      image: esummit,
      year: "2024",
      category: "Innovation",
      icon: "💡",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    }
  ];

  const categoryStats = [
    { label: "Leadership", count: 1, icon: "👑", color: "text-blue-600" },
    { label: "Entrepreneurship", count: 1, icon: "🚀", color: "text-green-600" },
    { label: "Innovation", count: 1, icon: "💡", color: "text-orange-600" }
  ];

  return (
    <section id="awards" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Awards & <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Recognitions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Celebrating achievements and milestones in my entrepreneurial and leadership journey
          </p>
        </div>

  
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {categoryStats.map((category, index) => (
            <div key={category.label} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className={`text-2xl font-bold mb-2 ${category.color}`}>{category.count}</h3>
              <p className="text-slate-600 font-medium">{category.label}</p>
            </div>
          ))}
        </div>


        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {awards.map((award, index) => (
            <div
              key={award.id}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >

              <div className="relative h-48 overflow-hidden">
                <img 
                  src={award.image} 
                  alt={award.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
 
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center bg-gradient-to-r ${award.color} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}>
                    <span className="mr-1">{award.icon}</span>
                    {award.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {award.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-slate-900 transition-colors">
                  {award.title}
                </h3>
                <p className={`font-medium mb-3 ${award.textColor}`}>
                  {award.organization}
                </p>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  {award.description}
                </p>

             
                <div className="flex items-center justify-between">
                  <div className={`inline-flex items-center ${award.bgColor} px-4 py-2 rounded-full`}>
                    <span className="text-lg mr-2">🏆</span>
                    <span className={`text-sm font-bold ${award.textColor}`}>Achievement</span>
                  </div>
                  
               
                  <button className="group-hover:bg-slate-100 p-2 rounded-full transition-colors duration-200">
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Achievement Summary */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full transform -translate-x-24 translate-y-24"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Recognition Highlights</h3>
              <p className="text-slate-300 text-lg">A testament to dedication and continuous growth</p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    {animatedStats.awards}
                  </div>
                  <div className="text-slate-300 font-medium text-lg">Total Awards</div>
                  <div className="text-slate-400 text-sm mt-1">Excellence in multiple domains</div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {animatedStats.institutions}
                  </div>
                  <div className="text-slate-300 font-medium text-lg">Institutions</div>
                  <div className="text-slate-400 text-sm mt-1">Recognized by prestigious organizations</div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                    {animatedStats.commitment}
                  </div>
                  <div className="text-slate-300 font-medium text-lg">Commitment</div>
                  <div className="text-slate-400 text-sm mt-1">Dedication to excellence</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <p className="text-slate-300 text-lg mb-6">
                These achievements represent my commitment to continuous learning and leadership development.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-2xl font-bold text-slate-900 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Let's Collaborate
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Achievement Timeline</h3>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-orange-500"></div>
            
            <div className="space-y-8">
              {awards.map((award, index) => (
                <div key={award.id} className="relative flex items-start">
                  <div className={`absolute left-4 w-8 h-8 bg-gradient-to-r ${award.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                    {award.icon}
                  </div>
                  <div className="ml-16 bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-800">{award.title}</h4>
                      <span className="text-sm text-slate-500 font-medium">{award.year}</span>
                    </div>
                    <p className="text-slate-600 text-sm">{award.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}