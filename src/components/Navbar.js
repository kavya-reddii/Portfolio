import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </button>
      <ul className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
        <li><NavLink to="/" exact="true" activeclassname="active" onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/about" activeclassname="active" onClick={closeMenu}>About</NavLink></li>
        <li><NavLink to="/skills" activeclassname="active" onClick={closeMenu}>Skills</NavLink></li>
        <li><NavLink to="/experience" activeclassname="active" onClick={closeMenu}>Experience</NavLink></li>
        <li><NavLink to="/projects" activeclassname="active" onClick={closeMenu}>Projects</NavLink></li>
        <li><NavLink to="/certifications" activeclassname="active" onClick={closeMenu}>Certifications</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active" onClick={closeMenu}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}
