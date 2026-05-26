import React from 'react';
import './CourseCurriculum.css';

const CourseCurriculum = () => {
  const modules = [
    {
      num: "I",
      title: "Module I: System Foundations",
      skills: ["Introduction to ICT & Research Ethics", "Computer Applications Technology", "Structured Programming (C / C++)", "Operating Systems Setup & Shell Layouts"]
    },
    {
      num: "II",
      title: "Module II: Systems Engineering",
      skills: ["Systems Analysis & Structural Modeling", "Object-Oriented Programming (Java Engine)", "Database Management Architecture (SQL)", "Quantitative Engineering Principles"]
    },
    {
      num: "III",
      title: "Module III: Advanced Architectures",
      skills: ["Data Communication & Network Topologies", "Full-Stack Web Development Frameworks", "Management Information Systems (MIS)", "Industrial Attachment & Capstone Project"]
    }
  ];

  return (
    <section className="course-curriculum">
      <div className="curriculum-container">
        
        <div className="curriculum-header">
          <h2>Official Course Syllabus Matrix</h2>
          <div className="curriculum-accent-line"></div>
        </div>

        <div className="curriculum-matrix-grid">
          {modules.map((mod, index) => (
            <div key={index} className="curriculum-glass-node">
              <div className="module-stamp-wrapper">
                <span className="module-stamp-num">{mod.num}</span>
              </div>
              <h3 className="curriculum-node-title">{mod.title}</h3>
              <ul className="curriculum-skills-list">
                {mod.skills.map((skill, idx) => (
                  <li key={idx}>
                    <span className="skill-bullet-laser"></span>
                    <span className="skill-text-node">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CourseCurriculum;