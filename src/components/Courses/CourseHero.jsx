import React from 'react';
import './CourseHero.css';

const CourseHero = ({ data }) => {
  return (
    <section className="course-hero">
      <div className="course-hero-mesh position-left"></div>
      <div className="course-hero-mesh position-right"></div>
      <div className="course-hero-container">
        <div className="course-intro-column">
          <span className="course-dept-tag">{data.deptTag}</span>
          <h1 className="course-title">{data.title}</h1>
          <p className="course-lead-desc">{data.leadDesc}</p>
          <div className="course-quick-specs">
            <div className="spec-pill"><span className="spec-label">Duration:</span><span className="spec-value">{data.duration}</span></div>
            <div className="spec-pill"><span className="spec-label">Exam Body:</span><span className="spec-value">{data.examBody}</span></div>
            <div className="spec-pill"><span className="spec-label">Level:</span><span className="spec-value">{data.level}</span></div>
          </div>
        </div>
        <div className="instructor-card-column">
          <div className="instructor-3d-frame">
            <div className="instructor-img-wrapper">
              <img src={data.instructorImg} alt={data.instructorName} className="instructor-avatar" />
              <div className="image-glass-tint"></div>
            </div>
            <div className="instructor-glass-details">
              <h3>{data.instructorName}</h3>
              <p className="instructor-role">{data.instructorRole}</p>
              <div className="instructor-badge">Verified Lead Lecturer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;