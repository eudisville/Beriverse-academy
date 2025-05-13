import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/"><img src="BA logo PNG.png" alt="" /></Link>
      </div>
      {/* Icône du menu hamburger */}
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* Liens de navigation */}
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Masterclasses</Link></li>
          <li><Link to="/">Bootcamps</Link></li>
          <li><Link to="/">A venir</Link></li>
          <li><Link to="/">Communauté</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;