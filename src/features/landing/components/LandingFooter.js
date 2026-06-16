import React from 'react';
import './LandingFooter.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} SyncSpace. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
