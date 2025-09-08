import React from 'react';
import annaUniversity from '../assets/Anna-university.jpg';
import eCell from '../assets/E-cell.jpg';
import eSummit from '../assets/E-summit.jpg';

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
    <section id="awards" className="py-20 px-4 bg-gradient-to-br from-white via-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Awards & Recognitions</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Celebrating achievements and milestones in my journey</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => (
            <div key={award.id} className="group rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <img src={award.image} alt={award.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-white/90 text-gray-800 border border-gray-200 shadow">
                    {award.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-900">{award.title}</h3>
                  <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-md bg-slate-100 text-slate-700 border border-slate-200">{award.year}</span>
                </div>
                <p className="mt-1 text-indigo-600 font-semibold text-sm">{award.organization}</p>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{award.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-3xl rounded-2xl bg-white/90 border border-gray-200 shadow-sm p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Recognition Highlights</h3>
            <div className="grid grid-cols-3 gap-6">
              {[{ n: '3', l: 'Awards' }, { n: '2', l: 'Institutions' }, { n: '100%', l: 'Commitment' }].map((s, i) => (
                <div key={i} className="rounded-xl bg-slate-50 border border-slate-200 p-6">
                  <div className="text-3xl font-extrabold text-indigo-600">{s.n}</div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}