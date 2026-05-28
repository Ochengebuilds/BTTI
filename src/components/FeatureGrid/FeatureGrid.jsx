import React from 'react';
import './FeatureGrid.css';

// 1. IMPORT YOUR CENTRALIZED AZZETS OBJECT
import { azzets } from '../../assets/assets.js';

const FeatureGrid = () => {
  return (
    <section className="bento-section" id="about">
      <div className="bento-container">
        
        {/* Block 1: Main About Text Card */}
        <div className="bento-card text-card main-about">
          <span className="bento-tag">About Us</span>
          <h2 className="bento-title">Transformational skills for a brighter career.</h2>
          <p className="bento-text">
            We inspire, we educate, and we shape technical talent through rigorous hands-on practice and strong character development.
          </p>
        </div>
        
        {/* Block 2: Image Card - Students */}
        <div className="bento-card img-card student-life">
          <img 
            src={azzets.features.studentLife} 
            alt="Students collaborating on projects at Beacon Technical Training College" 
            loading="lazy"
          />
        </div>
        
        {/* Block 3: Image Card with Overlay Text - ICT Labs */}
        <div className="bento-card img-card ict-lab">
          <img 
            src={azzets.features.ictLab} 
            alt="Modern computer laboratory equipment for ICT students" 
            loading="lazy"
          />
          <div className="bento-overlay-text">
            A place to build your practical software and web projects.
          </div>
        </div>
        
        {/* Block 4: Long Vertical Image Card - Engineering Workshop */}
        <div className="bento-card img-card workshop-vertical">
          <img 
            src={azzets.features.workshop} 
            alt="Hands-on training in Electrical and Electronics Engineering workshop" 
            loading="lazy"
          />
          <div className="bento-overlay-text">
            Guaranteed industrial attachments & heavy field training.
          </div>
        </div>

        {/* Block 5: Wide Horizontal Image Card - Classroom Environment */}
        <div className="bento-card img-card classroom-wide">
          <img 
            src={azzets.features.classroom} 
            alt="Modern interactive study lecture halls" 
            loading="lazy"
          />
        </div>

        {/* Block 6: Secondary Text Card - Infrastructure */}
        <div className="bento-card text-card modern-equipment">
          <span className="bento-tag">Workspaces</span>
          <h2 className="bento-title">Modern Equipment</h2>
          <p className="bento-text">
            Our practical rooms are equipped with industry-standard production tools to ensure complete professional readiness before graduation.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeatureGrid;