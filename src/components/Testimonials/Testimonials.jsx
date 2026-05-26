import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance in pixels to trigger a slide change
  const minSwipeDistance = 50;

  const studentReviews = [
    {
      name: "Alex Kipkoech",
      course: "Diploma in ICT (Alumni)",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "The hands-on practical training in the computer labs at BTTI completely transformed my understanding of software engineering. The instructors don't just teach theory; they guide you through building real-world projects."
    },
    {
      name: "Grace Mutua",
      course: "Electrical & Electronics Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "What I love most about BTTI is the attention given to modern technical skills. Navigating the workshops and working directly with industrial instrumentation gave me the confidence to handle technical challenges seamlessly."
    },
    {
      name: "Brian Omondi",
      course: "Hospitality & Cosmetology",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "BTTI provided me with exceptional industry mentorship. The attachment pipeline supported me right into an internship immediately after my final module, allowing me to build solid professional networks early."
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % studentReviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + studentReviews.length) % studentReviews.length);
  };

  // Capture where the touch gesture starts
  const onTouchStart = (e) => {
    setTouchEnd(null); 
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Track the finger movement
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Calculate gesture vector on finger lift
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Students Say</h2>
          <p className="testimonials-subtitle">Real stories from the next generation of technical leaders</p>
        </div>

        <div className="slider-wrapper">
          <button className="nav-btn prev-btn" onClick={handlePrev} aria-label="Previous testimonial">‹</button>
          
          {/* Glassmorphic card loaded with touch hooks */}
          <div 
            className="testimonial-3d-card"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="student-profile">
              <div className="avatar-glow-ring">
                <img 
                  src={studentReviews[currentIndex].image} 
                  alt={`${studentReviews[currentIndex].name} Profile`} 
                  className="student-avatar"
                />
              </div>
              <div className="student-meta">
                <h3 className="student-name">{studentReviews[currentIndex].name}</h3>
                <span className="student-course">{studentReviews[currentIndex].course}</span>
              </div>
            </div>
            
            <div className="testimonial-quote-block">
              <span className="quote-mark">“</span>
              <p className="student-quote">{studentReviews[currentIndex].quote}</p>
            </div>
          </div>

          <button className="nav-btn next-btn" onClick={handleNext} aria-label="Next testimonial">›</button>
        </div>

        <div className="slider-dots">
          {studentReviews.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;