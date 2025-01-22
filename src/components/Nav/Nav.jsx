import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../Nav/assets/Logo.png";
import './Nav.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      {/* Icône du menu hamburger */}
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* Liens de navigation */}
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="">Accueil</Link>
          </li>
          <li>
            <Link to="">Nos formations</Link>
          </li>
          <li>
            <Link to="">Feedback</Link>
          </li>
          <li>
            <Link to="">Contactez-nous</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;