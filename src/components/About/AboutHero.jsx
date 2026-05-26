import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-bg">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80" 
          alt="BTTI Campus Main Block" 
          className="about-hero-img"
        />
        <div className="about-hero-overlay"></div>
      </div>
      
      <div className="about-hero-container">
        <div className="about-hero-3d-card">
          <h1 className="about-hero-title">About Us</h1>
          <div className="about-title-bar"></div>
          <p className="about-hero-tagline">
            Nurturing technical excellence, innovation, and holistic growth for future industry leaders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;