import React from 'react';
import './CourseHero.css';

const CourseHero = () => {
  return (
    <section className="course-hero">
      {/* Background Neon Blur Ambient Nodes */}
      <div className="course-hero-mesh position-left"></div>
      <div className="course-hero-mesh position-right"></div>
      
      <div className="course-hero-container">
        
        {/* Left Side: Course Metadata Details */}
        <div className="course-intro-column">
          <span className="course-dept-tag">Department of ICT</span>
          <h1 className="course-title">Diploma in Information Communication Technology</h1>
          <p className="course-lead-desc">
            Master full-stack software development, structured systems engineering, database architectures, and advanced network infrastructure via intensive hands-on lab pipelines.
          </p>
          
          <div className="course-quick-specs">
            <div className="spec-pill">
              <span className="spec-label">Duration:</span>
              <span className="spec-value">3 Years (Modular)</span>
            </div>
            <div className="spec-pill">
              <span className="spec-label">Exam Body:</span>
              <span className="spec-value">KNEC</span>
            </div>
            <div className="spec-pill">
              <span className="spec-label">Level:</span>
              <span className="spec-value">Diploma</span>
            </div>
          </div>
        </div>

        {/* Right Side: 3D Floating Instructor Profile Card */}
        <div className="instructor-card-column">
          <div className="instructor-3d-frame">
            <div className="instructor-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" 
                alt="Head of ICT Department" 
                className="instructor-avatar"
              />
              <div className="image-glass-tint"></div>
            </div>
            <div className="instructor-glass-details">
              <h3>Madam Grace Khayesi</h3>
              <p className="instructor-role">Head of Department — ICT</p>
              <div className="instructor-badge">Verified Lead Lecturer</div>
            </div>
            <div className="card-ambient-shadow-glow"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CourseHero;