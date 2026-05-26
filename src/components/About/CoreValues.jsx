import React from 'react';
import './CoreValues.css';

const CoreValues = () => {
  const values = [
    {
      number: "01",
      title: "Faith-Led Foundation",
      description: "We are proudly led by our faith in Jesus Christ, guiding our ethics, community interactions, and commitment to student development."
    },
    {
      number: "02",
      title: "Unwavering Commitment",
      description: "Dedicated to equipping every student with robust, future-proof technical competencies regardless of background or constraints."
    },
    {
      number: "03",
      title: "Excellence in Execution",
      description: "We hold a simple standard: we do it very well. Our labs, instructors, and practical training spaces reflect deep professional quality."
    },
    {
      number: "04",
      title: "Social Purpose & Impact",
      description: "We do it for good. Our ultimate goal is the holistic transformation of our immediate community and national technical landscapes."
    }
  ];

  return (
    <section className="core-values-section">
      {/* Dynamic Background Mesh Blur Accents */}
      <div className="values-mesh-glow position-1"></div>
      <div className="values-mesh-glow position-2"></div>

      <div className="core-values-container">
        
        {/* Left Fixed/Sticky Heading Block */}
        <div className="values-heading-column">
          <span className="values-pretitle">Our Driving Principles</span>
          <h2 className="values-main-title">Our Core Values</h2>
          <div className="values-accent-glow-line"></div>
          <p className="values-side-summary">
            These four strategic pillars shape our learning culture, institutional focus, and instructional pipelines daily.
          </p>
        </div>

        {/* Right 3D Stacked Card Column */}
        <div className="values-stack-column">
          {values.map((item, index) => (
            <div key={index} className="value-3d-glass-card">
              <div className="value-card-header">
                <span className="value-index-number">{item.number}</span>
                <h3 className="value-card-title">{item.title}</h3>
              </div>
              <p className="value-card-body">{item.description}</p>
              <div className="value-card-border-glow"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;