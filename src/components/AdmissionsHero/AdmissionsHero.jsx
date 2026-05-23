import React from 'react';
import './AdmissionsHero.css';

const AdmissionsHero = () => {
  return (
    <section className="admissions-hero">
      <div className="admissions-hero-container">
        <div className="admissions-hero-text">
          <span className="admissions-tag">Join BTTI</span>
          <h1>Begin Your Professional Journey Today</h1>
          <p>
            Our application process is straightforward and fully digitalized. Select your preferred 
            intake term, check your department requirements, and secure your slot in our upcoming class.
          </p>
        </div>
        
        {/* Layered Floating Deadline Alert Block */}
        <div className="intake-deadline-card">
          <div className="card-pulse-badge">Open for Applications</div>
          <h3>Next Intake Deadline</h3>
          <div className="deadline-date">September 10, 2026</div>
          <p className="deadline-note">Applicable for both Regular and Evening parallel training blocks.</p>
          <div className="intake-progress-track">
            <div className="intake-progress-fill"></div>
          </div>
          <span className="slots-left-text">84% of class capacity reached</span>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsHero;