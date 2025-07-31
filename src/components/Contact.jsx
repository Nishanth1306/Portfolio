import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: faEnvelope,
      label: "Email",
      value: "nishanthkumar1363@gmail.com",
      link: "mailto:nishanthkumar1363@gmail.com",
      type: "email"
    },
    {
      icon: faPhone,
      label: "Phone",
      value: "(+91) 9342559603",
      link: "tel:+919342559603",
      type: "phone"
    },
    {
      icon: faLinkedin,
      label: "LinkedIn",
      value: "Nishanth K",
      link: "https://www.linkedin.com/in/nishanth--k/",
      type: "social"
    },
    {
      icon: faMapMarkerAlt,
      label: "Location",
      value: "Coimbatore, Tamil Nadu, India",
      link: null,
      type: "location"
    }
  ];

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Get In Touch</h2>
        <p className="section-subtitle animate-on-scroll">
          Let's connect and discuss how we can work together
        </p>
        
        <div className="contact-content">
          <div className="contact-info animate-on-scroll">
            <h3 className="contact-subtitle">Contact Information</h3>
            <p className="contact-description">
              I'm always open to discussing new opportunities, interesting projects, 
              and innovative ideas. Feel free to reach out!
            </p>
            
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={info.icon} />
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-label">{info.label}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="contact-value"
                        target={info.type === "social" ? "_blank" : undefined}
                        rel={info.type === "social" ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="contact-form-container animate-on-scroll">
            <div className="contact-form-card">
              <h3 className="form-title">Send a Message</h3>
              <p className="form-subtitle">
                Have a project in mind? Let's discuss it!
              </p>
              
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="form-input" 
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-textarea" 
                    placeholder="Tell me about your project or idea..."
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary form-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="contact-footer animate-on-scroll">
          <div className="footer-card">
            <h3>Let's Work Together</h3>
            <p>
              I'm passionate about creating innovative solutions and always excited 
              to take on new challenges. Whether you have a project in mind or just 
              want to connect, I'd love to hear from you!
            </p>
            <div className="footer-actions">
              <a href="mailto:nishanthkumar1363@gmail.com" className="btn btn-primary">
                <FontAwesomeIcon icon={faEnvelope} className="btn-icon" />
                Send Email
              </a>
              <a 
                href="https://www.linkedin.com/in/nishanth--k/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FontAwesomeIcon icon={faLinkedin} className="btn-icon" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
