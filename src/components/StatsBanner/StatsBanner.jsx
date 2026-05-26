import React from 'react';
import './StatsBanner.css';

const StatsBanner = () => {
  const statItems = [
    { number: "5+", label: "Industry Departments" },
    { number: "1,500+", label: "Certified Graduates" },
    { number: "100%", label: "Practical Training" },
    { number: "Flexible", label: "Fee Installments" }
  ];

  return (
    <div className="stats-banner-wrapper">
      <div className="stats-glass-card">
        {statItems.map((item, index) => (
          <div key={index} className="stat-node">
            <h3 className="stat-number">{item.number}</h3>
            <p className="stat-label">{item.label}</p>
            {index < statItems.length - 1 && <div className="stat-divider" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBanner;