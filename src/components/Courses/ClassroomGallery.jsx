import React from 'react';
import './ClassroomGallery.css';

const ClassroomGallery = () => {
  const sessions = [
    {
      imgUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80",
      tag: "Software Engineering Lab",
      title: "Full-Stack Development Bootcamps",
      desc: "Students building high-performance decentralized web applications directly on MERN and Next.js technology structures."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9aae9d?auto=format&fit=crop&w=700&q=80",
      tag: "Hardware & Networking",
      title: "Infrastructure Topology Architecture",
      desc: "Live routing, configuration management setups, and mechanical termination practices inside our specialized Cisco lab panels."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=80",
      tag: "Systems Analysis Block",
      title: "Database Engineering Seminars",
      desc: "Collaborative threat modeling, SQL/NoSQL schema planning, and administrative workflow orchestration deep-dives."
    }
  ];

  return (
    <section className="classroom-gallery">
      <div className="gallery-container">
        
        <div className="gallery-section-header">
          <span className="gallery-pretitle">Active Training Environments</span>
          <h2 className="gallery-main-title">Ongoing Class Sessions & Practical Labs</h2>
          <p className="gallery-subtitle">
            We bridge theory with execution. Check out actual live capture views across our daily engineering streams.
          </p>
        </div>

        <div className="gallery-asymmetric-mesh">
          {sessions.map((item, index) => (
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