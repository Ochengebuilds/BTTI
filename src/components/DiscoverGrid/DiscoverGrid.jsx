import React, { useState } from 'react';
import './DiscoverGrid.css';

// 1. IMPORT YOUR CENTRALIZED AZZETS MODULE
import { azzets } from '../../assets/assets.js'; 

const DiscoverGrid = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  // 2. MAP THE IMAGES TO YOUR REFACTORED LOCAL ASSET PATHS
  const discoverItems = [
    {
      id: "college-life",
      title: "College Life",
      tagline: "Vibrant Campus Experience",
      homeImage: azzets.discover.collegeLife,
      summary: "Explore student activities, co-curricular clubs, and our vibrant community life outside the standard lecture halls.",
      fullContent: {
        bannerImage: azzets.discover.collegeLife, // Uses same optimized asset file
        introduction: "At Beacon Technical Training Institute, learning extends far beyond textbooks and lecture rooms. We believe in nurturing wholesome individuals by fostering a vibrant, inclusive campus life experience.",
        paragraphs: [
          "Our students engage in various clubs, sports, and cultural festivals throughout the academic calendar. From dramatic arts and music ensembles to intense inter-college football tournaments, there is a space for every talent to thrive.",
          "We also place a strong emphasis on leadership development. Through the Student Council body, learners practice governance, event organization, and peer mentorship, building essential soft skills highly valued in today's corporate global landscape."
        ]
      }
    },
    {
      id: "alumni",
      title: "Alumni Hub",
      tagline: "Success Beyond Graduation",
      homeImage: azzets.discover.alumni,
      summary: "Meet our graduates making significant waves across various technical and corporate fields globally.",
      fullContent: {
        bannerImage: azzets.discover.alumni,
        introduction: "The true measure of an institution's impact lies in the success of its alumni network. BTTI graduates consistently demonstrate excellence across industrial sectors.",
        paragraphs: [
          "Our alumni network spans hundreds of technical professionals, software developers, structural engineers, and culinary artists who maintain close ties with the campus. They frequently return to deliver guest lectures and offer exclusive internship tracks.",
          "Through our dedicated tracking initiatives, over 85% of our graduates secure permanent employment or launch independent tech consultancies within six months of finalizing their final modular TVET examinations."
        ]
      }
    },
    {
      id: "sponsorship",
      title: "Sponsorship & Partners",
      tagline: "Empowering Through Education",
      homeImage: azzets.discover.partners,
      summary: "Partner programs and funding opportunities driving technical education access for deserving youths.",
      fullContent: {
        bannerImage: azzets.discover.partners,
        introduction: "We strongly believe that economic constraints should never stand in the way of high-quality, practical technical skill acquisition.",
        paragraphs: [
          "In collaboration with international foundations, local industry leaders, and community non-profits, BTTI offers robust tuition subsidy frameworks and work-study scholarship plans for underprivileged youths.",
          "Corporate sponsors don't just provide tuition funding; they actively equip our computing labs and engineering workshops with cutting-edge equipment, ensuring students train on standard contemporary platforms."
        ]
      }
    }
  ];

  if (activeArticle) {
    return (
      <article className="blog-page-view">
        <div className="blog-container">
          <button className="back-home-btn" onClick={() => setActiveArticle(null)}>
            ← Back to Homepage
          </button>
          
          <div className="blog-hero-wrapper">
            <img 
              src={activeArticle.fullContent.bannerImage} 
              alt={activeArticle.title} 
              className="blog-banner-img"
            />
            <div className="blog-hero-overlay">
              <span className="blog-tag">{activeArticle.tagline}</span>
              <h1 className="blog-main-title">{activeArticle.title}</h1>
            </div>
          </div>

          <div className="blog-body-content">
            <p className="blog-intro-lead">
              {activeArticle.fullContent.introduction}
            </p>
            {activeArticle.fullContent.paragraphs.map((para, i) => (
              <p key={i} className="blog-text-paragraph">{para}</p>
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <section className="discover-section" id="discover-btti">
      <div className="discover-container">
        <div className="discover-header">
          <h2 className="discover-section-title">Discover BTTI</h2>
          <p className="discover-section-subtitle">Explore our community, success legacies, and strategic developmental pathways</p>
        </div>

        <div className="discover-3d-grid">
          {discoverItems.map((item) => (
            <div key={item.id} className="discover-glass-card">
              <div className="discover-image-frame">
                <img src={item.homeImage} alt={item.title} className="discover-card-img" />
                <span className="discover-card-tag">{item.title}</span>
              </div>
              <div className="discover-card-details">
                <h3 className="discover-card-title">{item.tagline}</h3>
                <p className="discover-card-summary">{item.summary}</p>
                <button 
                  className="discover-read-more-btn"
                  onClick={() => setActiveArticle(item)}
                >
                  Read More <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverGrid;