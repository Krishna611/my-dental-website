import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <h1>Dental Clinic</h1>
        <ul>
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About Us</NavLink></li>
          <li><NavLink to="/services" className="nav-link">Services</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
          <li><NavLink to="/faq" className="nav-link">FAQ</NavLink></li>  {/* 👈 add this line */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
