import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">Where Team Collaboration Happens</h1>
        <p className="hero-subtitle">
          Bring your team together in a single, shared workspace. Communicate, manage tasks, and track progress, all in one place.
        </p>
        <a href="/register" className="btn-primary hero-btn">Get Started for Free</a>
      </div>
    </section>
  );
};

export default HeroSection;
