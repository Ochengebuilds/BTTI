import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  const departments = [
    { name: "Information Communication Technology", path: "/courses/ict" },
    { name: "Electrical & Electronics Engineering", path: "/courses/electrical" },
    { name: "Building and Construction", path: "/courses/building" },
    { name: "Hospitality & Institutional Management", path: "/courses/hospitality" },
    { name: "Fashion and Design", path: "/courses/fashion" }
  ];

  // Helper to cleanly close out menus upon navigating paths
  const handleNavigation = () => {
    setMenuOpen(false);
    setDropdownActive(false);
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar-container">
        
        {/* Brand Logo */}
        <div className="navbar-logo">
          <Link to="/" onClick={handleNavigation}>BTTI<span>.</span></Link>
        </div>
        
        {/* Mobile Hamburger Toggle Icon Button */}
        <div 
          className={`mobile-menu-toggle ${menuOpen ? 'toggle-active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </div>
        
        {/* Main Navigation Links Drawer */}
        <ul className={`nav-links ${menuOpen ? 'mobile-drawer-open' : ''}`}>
          <li>
            <Link to="/" onClick={handleNavigation}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleNavigation}>About</Link>
          </li>
          
          {/* Courses Dropdown Accordion Item */}
          <li 
            className="nav-dropdown-wrapper"
            onMouseEnter={() => window.innerWidth > 960 && setDropdownActive(true)}
            onMouseLeave={() => window.innerWidth > 960 && setDropdownActive(false)}
            onClick={() => window.innerWidth <= 960 && setDropdownActive(!dropdownActive)}
          >
            <span className="nav-dropdown-trigger">
              Courses <span className={`dropdown-arrow ${dropdownActive ? 'open' : ''}`}>▼</span>
            </span>
            
            {/* Glass Dropdown Tray Layout */}
            <div className={`courses-glass-dropdown ${dropdownActive ? 'show' : ''}`}>
              {departments.map((dept, index) => (
                <Link 
                  key={index} 
                  to={dept.path} 
                  className="dropdown-item-link"
                  onClick={handleNavigation}
                >
                  <div className="item-hover-laser"></div>
                  <span className="item-text">{dept.name}</span>
                </Link>
              ))}
            </div>
          </li>

          <li>
            <Link to="/admission" onClick={handleNavigation}>Admission</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleNavigation}>Contact</Link>
          </li>
        </ul>

      </nav>
      
      {/* Background overlay screen shield mask to exit mobile drawer on outer blur taps */}
      {menuOpen && <div className="drawer-overlay-shield" onClick={handleNavigation}></div>}
    </div>
  );
};

export default Navbar;