import React from 'react';
import './AboutStats.css';

const AboutStats = () => {
  const metrics = [
    {
      id: 1,
      value: "10,000+",
      label: "Number of Students Since Inception",
      icon: "🎓",
      accentColor: "#3b82f6" /* Dynamic Blue */
    },
    {
      id: 2,
      value: "10",
      label: "Years of Excellence",
      icon: "🏢",
      accentColor: "#10b981" /* Tech Green */
    },
    {
      id: 3,
      value: "5,000+",
      label: "Scholarships Since Inception",
      icon: "📜",
      accentColor: "#f59e0b" /* Premium Amber */
    },
    {
      id: 4,
      value: "80%",
      label: "Employability Rate",
      icon: "👍",
      accentColor: "#8b5cf6" /* Sleek Purple */
    }
  ];

  return (
    <section className="about-stats">
      <div className="about-stats-container">
        <div className="about-stats-grid">
          {metrics.map((stat) => (
            <div 
              key={stat.id} 
              className="stat-3d-card"
              style={{ '--card-accent': stat.accentColor }}
            >
              {/* Radial gradient backing laser light */}
              <div className="stat-glow-mesh"></div>
              
              <div className="stat-card-inner">
                <div className="stat-icon-wrapper">
                  <span className="stat-icon">{stat.icon}</span>
                </div>
                <h2 className="stat-value">{stat.value}</h2>
                <div className="stat-divider"></div>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;