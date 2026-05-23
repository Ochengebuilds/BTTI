import React from 'react';
import './StatsGrid.css';

const StatsGrid = () => {
  const stats = [
    { value: "95%", label: "Employment Rate", desc: "Graduates securing job placements within 6 months." },
    { value: "12+", label: "Modern Workshops", desc: "State-of-the-art labs designed for immersive training." },
    { value: "2,500+", label: "Active Students", desc: "A vibrant community of technical minds and innovators." },
    { value: "100%", label: "TVETA Approved", desc: "Fully accredited curriculum ensuring official standard excellence." }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-value">{stat.value}</div>
            <h3 className="stat-label">{stat.label}</h3>
            <p className="stat-desc">{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsGrid;