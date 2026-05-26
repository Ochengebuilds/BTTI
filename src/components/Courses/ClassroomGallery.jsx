import React from 'react';
import './ClassroomGallery.css';

const ClassroomGallery = ({ data }) => {
  return (
    <section className="classroom-gallery">
      <div className="gallery-container">
        <div className="gallery-section-header">
          <span className="gallery-pretitle">Active Training Environments</span>
          <h2 className="gallery-main-title">Ongoing Class Sessions & Practical Labs</h2>
        </div>
        <div className="gallery-asymmetric-mesh">
          {data.sessions.map((item, index) => (
            <div key={index} className="gallery-session-card">
              <div className="session-image-frame">
                <img src={item.imgUrl} alt={item.title} className="session-img" />
                <span className="session-tag-node">{item.tag}</span>
              </div>
              <div className="session-meta-panel">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassroomGallery;