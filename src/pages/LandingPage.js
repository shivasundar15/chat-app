import React from 'react';
import Navbar from '../features/landing/components/LandingNavbar';
import HeroSection from '../features/landing/components/HeroSection';
import FeaturesSection from '../features/landing/components/FeaturesSection';
import Footer from '../features/landing/components/LandingFooter';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
