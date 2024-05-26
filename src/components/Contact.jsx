import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-details">
        <p><strong>Name:</strong> Nishanth K</p>
        <p><strong>Email:</strong> <a href="mailto:nishanthkumar1363@gmail.com">nishanthkumar1363@gmail.com</a></p>
        <p><strong>Phone:</strong> (+91)9342559603</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nishanth--k/" target="_blank" rel="noopener noreferrer">Nishanth K</a></p>
      </div>
    </section>
  );
};

export default Contact;
