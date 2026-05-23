import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        {/* Clean Logo representation - No h1 here to keep page SEO pristine */}
        <div className="navbar-logo">
          BTTI<span>.</span>
        </div>

        {/* Navigation Links - Injects 'active' layout state on mobile viewport trigger */}
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#academics" onClick={() => setIsOpen(false)}>Academics</a></li>
          <li><a href="#admissions" onClick={() => setIsOpen(false)}>Admissions</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>

        {/* Font Awesome Mobile Interaction Toggle Button */}
        <button 
          className="navbar-toggle-btn" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;