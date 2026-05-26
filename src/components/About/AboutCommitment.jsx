import React from 'react';
import './AboutCommitment.css';

const AboutCommitment = () => {
  return (
    <section className="about-commitment">
      <div className="commitment-container">
        
        {/* Image Display Panel */}
        <div className="commitment-visual-frame">
          <img 
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80" 
            alt="Graduates celebrating technical achievement" 
            className="commitment-img"
          />
        </div>

        {/* Floating Commitment Quote Block */}
        <div className="commitment-text-frame">
          <div className="quote-icon-3d">“</div>
          <blockquote className="commitment-quote">
            We are committed. Because all people deserve unwavering support in their most vulnerable moments.
          </blockquote>
          <div className="quote-attribution-line"></div>
        </div>

      </div>
    </section>
  );
};

export default AboutCommitment;