import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Column 1: Brand & Identity */}
        <div className="footer-column brand-column">
          <div className="footer-logo">
            BTTI<span>.</span>
          </div>
          <p className="brand-tagline">
            Empowering technical minds and crafting future leaders with industry-ready practical skills.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home"><FontAwesomeIcon icon={faChevronRight} className="link-arrow" /> Home</a></li>
            <li><a href="#about"><FontAwesomeIcon icon={faChevronRight} className="link-arrow" /> About Us</a></li>
            <li><a href="#admissions"><FontAwesomeIcon icon={faChevronRight} className="link-arrow" /> Admissions</a></li>
            <li><a href="#contact"><FontAwesomeIcon icon={faChevronRight} className="link-arrow" /> Contact</a></li>
          </ul>
        </div>

        {/* Column 3: ICT Programs Focus */}
        <div className="footer-column">
          <h3 className="footer-heading">ICT Programs</h3>
          <ul className="footer-links">
            <li><a href="#academics"><FontAwesomeIcon icon={faChevronRight} className="link-arrow" /> Web Development</a></li>
            <li><a href="#academics"><FontAwesomeIcon icon={faChevronRight} className="link-arrow" /> Database Systems</a></li>
            <li><a href="#academics"><FontAwesomeIcon icon={faChevronRight} className="link-arrow" /> Network Engineering</a></li>
            <li><a href="#academics"><FontAwesomeIcon icon={faChevronRight} className="link-arrow" /> Cyber Security</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer-column info-column">
          <h3 className="footer-heading">Contact Details</h3>
          <p className="contact-item"><strong>Location:</strong> Magadi Road, Ongata Rongai, Kenya</p>
          <p className="contact-item"><strong>Email:</strong> info@beaconcollege.ac.ke</p>
          <p className="contact-item"><strong>Call:</strong> +254 700 000000</p>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {currentYear} Beacon Technical Training Institute. All rights reserved.</p>
          <p className="designer-credit">Designed by Ochenge Builds</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;