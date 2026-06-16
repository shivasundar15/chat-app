import React from 'react';
import './LandingNavbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          SyncSpace
        </a>
        <div className="navbar-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="/login" className="nav-link">Login</a>
          <a href="/register" className="nav-link btn-primary">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
