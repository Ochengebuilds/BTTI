import React from 'react';
import './AboutOverview.css';

const AboutOverview = () => {
  const academicHighlights = [
    { title: "TVETA Accreditation", description: "Fully accredited by the Ministry of Education & TVETA to deliver top-tier technical training modules." },
    { title: "National Exam Centre", description: "Official examination venue for the Kenya National Examinations Council (KNEC) and NITA assessments." },
    { title: "Industrial Pipeline", description: "Guaranteed attachment and structural internship pathways with leading corporate enterprises." },
    { title: "Holistic Development", description: "Built-in mentorship tracks designed to nurture leadership traits and essential 21st-century soft skills." }
  ];

  return (
    <section className="about-overview">
      <div className="overview-container">
        
        {/* Left Informative Column */}
        <div className="overview-text-block">
          <h2 className="overview-lead-title">
            Providing a rich, stimulating environment through quality, innovative instruction.
          </h2>
          <p className="overview-para">
            At Beacon Technical Training Institute, we ensure that our students receive a highly interactive and personalized learning experience that will aid them in reaching their full potential. Learners are exposed to courses that present a sound theoretical foundation as well as robust practical applications.
          </p>
          <p className="overview-para">
            Our comprehensive approach better prepares talent for global industrial landscapes, elevating their competitive edge across all technology and engineering verticals.
          </p>

          {/* Academic Highlights Grid */}
          <div className="highlights-3d-grid">
            {academicHighlights.map((item, index) => (
              <div key={index} className="highlight-glass-card">
                <div className="highlight-indicator"></div>
                <h4 className="highlight-title">{item.title}</h4>
                <p className="highlight-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Graphical Column (3D Layered Frame) */}
        <div className="overview-graphic-block">
          <div className="perspective-wrapper">
            <div className="graphic-3d-card">
              <img 
                src="https://images.pexels.com/photos/7949366/pexels-photo-7949366.jpeg?auto=format&fit=crop&w=800&q=80" 
                alt="Students in practical lecture session" 
                className="graphic-img"
              />
              <div className="card-ambient-shadow"></div>
            </div>
            <div className="floating-accent-box"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutOverview;