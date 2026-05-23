import React, { useState } from 'react';
import './CourseCatalog.css';

const CourseCatalog = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Information Technology', 'Engineering', 'Business'];

  const courses = [
    { id: 1, category: 'Information Technology', level: 'Diploma', title: 'ICT & Full-Stack Web Development', duration: '2 Years', modules: 'React, Node.js, Database Architectures, Networking' },
    { id: 2, category: 'Information Technology', level: 'Certificate', title: 'Computer Support & Maintenance', duration: '1 Year', modules: 'Hardware Diagnostics, System Configuration, Basics of OS' },
    { id: 3, category: 'Engineering', level: 'Diploma', title: 'Electrical & Electronics Engineering', duration: '3 Years', modules: 'Power Systems, Control Engineering, Digital Electronics' },
    { id: 4, category: 'Engineering', level: 'Certificate', title: 'Electrical Installation & Wiring', duration: '1 Year', modules: 'Domestic Wiring, Industrial Safety, Blueprint Systems' },
    { id: 5, category: 'Business', level: 'Diploma', title: 'Business Management & Entrepreneurship', duration: '2 Years', modules: 'Financial Accounting, Project Management, Digital Marketing' },
    { id: 6, category: 'Business', level: 'Certificate', title: 'Sales & Social Media Marketing', duration: '1 Year', modules: 'Content Strategy, Lead Conversion, Brand Optimization' }
  ];

  const filteredCourses = activeFilter === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  return (
    <section className="catalog-section">
      <div className="catalog-container">
        
        {/* Modern Flat Pills Filter Bar */}
        <div className="filter-bar">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Cards Grid Layout */}
        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <div className="course-3d-card" key={course.id}>
              <div className="course-badge-row">
                <span className="course-level-tag">{course.level}</span>
                <span className="course-duration">{course.duration}</span>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <span className="course-dept">{course.category}</span>
              
              <div className="course-divider"></div>
              
              <div className="course-details">
                <h4>Core Modules:</h4>
                <p>{course.modules}</p>
              </div>

              <button className="course-enroll-btn">View Syllabus</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CourseCatalog;