import React, { useState, useEffect } from 'react';
import './Hero.css';

// 1. IMPORT YOUR CENTRALIZED AZZETS MODULE
import { azzets } from '../../assets/assets.js';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 2. REFERENCE THE SLIDESHOW ARRAY DIRECTLY FROM YOUR UTILITY FILE
  const slides = azzets.heroSlides || [];

  // Smoothly cycle slides every 5 seconds
  useEffect(() => {
    if (slides.length === 0) return; // Guard clause in case the array is empty

    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section className="hero-section" id="home">
      {/* Background Image Slider Layer */}
      <div className="hero-slider-container">
        {slides.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      {/* Dark overlay for rich depth and maximum text readability */}
      <div className="hero-overlay"></div>

      {/* Main Container - Left Aligned */}
      <div className="hero-container">
        <div className="hero-content-left">
          <h1 className="hero-main-title">
            Our education is key to your successful future
          </h1>
          
          <p className="hero-description">
            We provide students with a high-quality technical education that allows them to develop their core personal skills and interests. We pay special attention to hands-on practical talent and transformational skills to form future leaders.
          </p>
          
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