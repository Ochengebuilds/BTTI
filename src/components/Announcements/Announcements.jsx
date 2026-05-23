import React from 'react';
import './Announcements.css';

const Announcements = () => {
  const posts = [
    {
      id: 1,
      tag: "Intake",
      tagClass: "tag-intake",
      title: "May & September 2026 Admissions Open",
      date: "May 15, 2026",
      desc: "Applications are currently being processed for our Diploma and Certificate courses. Secure your slot early to access full practical workshop modules."
    },
    {
      id: 2,
      tag: "ICT Department",
      tagClass: "tag-tech",
      title: "New Advanced Web Dev Frameworks Added",
      date: "May 10, 2026",
      desc: "To keep our ICT curriculum aligned with global tech demands, our programming labs are introducing full-stack React and modern state management."
    },
    {
      id: 3,
      tag: "Attachments",
      tagClass: "tag-career",
      title: "Industrial Attachment Partnerships Expanded",
      date: "May 02, 2026",
      desc: "We have finalized technical placement agreements with leading industrial firms, guaranteeing direct field experience for all engineering students."
    }
  ];

  return (
    <section className="announcements-section" id="admissions">
      <div className="section-header">
        <span className="section-subtitle">Stay Updated</span>
        <h2 className="section-main-title">Latest Announcements & Intakes</h2>
      </div>

      <div className="cards-grid">
        {posts.map((post) => (
          <article className="announcement-card" key={post.id}>
            <div className="card-top">
              <span className={`card-tag ${post.tagClass}`}>{post.tag}</span>
              <span className="card-date">{post.date}</span>
            </div>
            <h3 className="card-title">{post.title}</h3>
            <p className="card-description">{post.desc}</p>
            <a href="#contact" className="card-link">
              Read More <span>&rarr;</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Announcements;