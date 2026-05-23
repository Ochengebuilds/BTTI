import React from 'react';
import './AcademicsHero.css';

const AcademicsHero = () => {
  return (
    <section className="academics-hero">
      <div className="academics-hero-overlay"></div>
      <div className="academics-hero-container">
        <span className="academics-tag">Our Programs</span>
        <h1 className="academics-title">Industry-Driven Curriculums</h1>
        <p className="academics-lead">
          Explore our fully accredited certificate and diploma programs. Designed alongside industry experts, 
          our courses combine rigorous theoretical principles with intensive hands-on lab work.
        </p>
      </div>
    </section>
  );
};

export default AcademicsHero;