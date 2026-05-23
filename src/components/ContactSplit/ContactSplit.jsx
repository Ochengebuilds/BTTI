import React, { useState } from 'react';
import './ContactSplit.css';

const ContactSplit = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent successfully.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact-split-section">
      <div className="contact-split-container">
        
        {/* Info Column */}
        <div className="contact-info-col">
          <div className="info-3d-card">
            <span className="info-icon">📍</span>
            <div>
              <h3>Our Campus</h3>
              <p>Magadi Road, Ongata Rongai, Kenya</p>
            </div>
          </div>

          <div className="info-3d-card">
            <span className="info-icon">✉️</span>
            <div>
              <h3>Email Inquiries</h3>
              <p>admissions@btti.ac.ke</p>
              <p>info@btti.ac.ke</p>
            </div>
          </div>

          <div className="info-3d-card">
            <span className="info-icon">📞</span>
            <div>
              <h3>Call Center</h3>
              <p>+254 700 000 000</p>
              <p>Mon - Fri, 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-col">
          <form className="contact-3d-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="John Doe" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="johndoe@example.com" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                placeholder="Admission Enquiry" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Write your message here..." 
                required
              ></textarea>
            </div>

            <button type="submit" className="form-submit-btn">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSplit;