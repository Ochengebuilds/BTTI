import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        {/* Wrap logo to route back home instantly */}
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          BTTI<span>.</span>
        </Link>

        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/academics" onClick={() => setIsOpen(false)}>Academics</Link></li>
          {/* New Admission link added smoothly here */}
          <li><Link to="/admissions" onClick={() => setIsOpen(false)}>Admission</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>

        <button className="navbar-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;