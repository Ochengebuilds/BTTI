import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of 3 high-quality educational stock images
  const slides = [
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80"
  ];

  // Smoothly cycle slides every 5 seconds
  useEffect(() => {
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