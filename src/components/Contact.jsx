'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, User, MessageSquare, ArrowRight } from './icons';
import { profile } from '@/data/profile';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      link: `mailto:${profile.email}`,
      type: 'email',
      color: 'bg-indigo-700',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      link: profile.phoneHref,
      type: 'phone',
      color: 'bg-indigo-700',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Nishanth K',
      link: profile.linkedin,
      type: 'social',
      color: 'bg-indigo-700',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile.location,
      link: null,
      type: 'location',
      color: 'bg-indigo-700',
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || `Role discussion — ${formData.name || 'Hiring'}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n— ${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-slate-50 py-20 px-4">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-700 rounded-2xl mb-6">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Contact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            For roles and project discussions: email or LinkedIn. The form opens your mail client with a draft — nothing is faked as “sent”.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <User className="w-6 h-6 text-indigo-700" />
                Direct lines
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Recruiters: LinkedIn or email. Include role, location, and timeline. Notice period on request.
              </p>
              <div className="grid gap-4">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={info.label}
                      className="group relative overflow-hidden bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{info.label}</h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-gray-900 font-medium hover:text-indigo-700 transition-colors duration-200 flex items-center gap-2"
                              target={info.type === 'social' ? '_blank' : undefined}
                              rel={info.type === 'social' ? 'noopener noreferrer' : undefined}
                            >
                              {info.value}
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </a>
                          ) : (
                            <span className="text-gray-900 font-medium">{info.value}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-xl"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                <Send className="w-6 h-6 text-indigo-700" />
                Draft an email
              </h3>
              <p className="text-gray-600">Opens mailto with your note. Attach the role spec if you have one.</p>
            </div>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Software Engineer role — [Company]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 resize-none"
                  placeholder="Role, team, location, and timeline."
                  rows="5"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-700 text-white px-8 py-4 rounded-xl font-medium hover:bg-indigo-800 transition flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Open email draft
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
