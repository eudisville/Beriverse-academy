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
        <Link to="/"><img src="BA.jpg" alt="" /></Link>
      </div>
      {/* Icône du menu hamburger */}
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* Liens de navigation */}
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Nos Formations</Link></li>
          <li><Link to="/">Bootcamp</Link></li>
          <li><Link to="/">A venir</Link></li>
          <li><Link to="/">BA Community</Link></li>
          <li><Link to="/">Marketplace</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;