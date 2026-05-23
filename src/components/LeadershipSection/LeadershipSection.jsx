import React from 'react';
import './LeadershipSection.css';

const LeadershipSection = () => {
  const leaders = [
    { name: "Dr. Evans Mwangi", role: "Principal / Director", bio: "Over 15 years overseeing technical curriculum and higher education infrastructure development." },
    { name: "Grace Omwamba", role: "Head of ICT Department", bio: "Specialist in full-stack architectures, driving cutting-edge software training paths." },
    { name: "Eng. David Kiprop", role: "Head of Engineering", bio: "Pioneering industry integration pipelines and modern workshop safety systems." }
  ];

  return (
    <section className="leaders-section">
      <div className="leaders-container">
        <div className="section-header">
          <h2>Institutional Leadership</h2>
          <p>The visionary team directing our academic rigor and operational standards.</p>
        </div>

        <div className="leaders-grid">
          {leaders.map((leader, idx) => (
            <div className="leader-profile-card" key={idx}>
              {/* Geometric Placeholder Card for 3D Visual Weight */}
              <div className="leader-avatar-block">
                <span>{leader.name.split(' ').pop().charAt(0)}</span>
              </div>
              <div className="leader-meta">
                <h3>{leader.name}</h3>
                <span className="leader-role">{leader.role}</span>
                <p className="leader-bio">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;