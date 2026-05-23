import React from 'react';
import './ContactHero.css';

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero-container">
        <span className="contact-tag">Get In Touch</span>
        <h1 className="contact-title">We’re Here to Help You Connect</h1>
        <p className="contact-lead">
          Have questions about admissions, academic modules, or campus life? 
          Reach out to our team directly, and we’ll get back to you as soon as possible.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;