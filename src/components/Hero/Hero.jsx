import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-banner-wrapper">
        {/* Main Background Image - Eager loaded for high SEO performance scores */}
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=80" 
          alt="Beacon Technical Training College Campus Main Building" 
          className="hero-bg-image"
          loading="eager"
        />
        
        {/* Gradient dark overlay layer for maximum text readability */}
        <div className="hero-overlay"></div>

        {/* Text and CTA card container aligned to the bottom-left like SOSH.jpg */}
        <div className="hero-content-card">
          <h1 className="hero-main-title">
            Our education is key to your successful future
          </h1>
          
          <div className="hero-subtext-grid">
            <p className="hero-description">
              We provide students with a high-quality technical education that allows them to develop their core personal skills and interests.
            </p>
            <p className="hero-description">
              We pay special attention to the development of team spirit, hands-on practical talent, and transformational skills to form future leaders.
            </p>
          </div>
          
          <div className="hero-cta-container">
            <a href="#academics" className="btn-primary">Explore Courses</a>
            <a href="#admissions" className="btn-secondary">Apply Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;