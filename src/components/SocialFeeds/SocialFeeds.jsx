import React from 'react';
import './SocialFeeds.css';

const SocialFeeds = () => {
  return (
    <section className="feeds-section" id="social-media">
      <div className="feeds-container">
        
        {/* Left Column: YouTube Video Embed */}
        <div className="feed-card youtube-card">
          <h2 className="feed-title">Follow us on YouTube</h2>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/X1c3jwasDTc" /* Replace with your actual BTTI video embed link code */
              title="Beacon Technical Training Institute Overview Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Column: Facebook Page Embed Plugin */}
        <div className="feed-card facebook-card">
          <h2 className="feed-title">Follow us on Facebook</h2>
          <div className="facebook-wrapper">
            <iframe 
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBeaconTechnical&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"S 
              width="100%" 
              height="100%" 
              style={{ border: 'none', overflow: 'hidden' }} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Beacon Technical Training Institute Facebook Feed"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialFeeds;