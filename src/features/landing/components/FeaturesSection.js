import React from 'react';
import './FeaturesSection.css';

const Feature = ({ title, description }) => (
  <div className="feature">
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      title: 'Real-Time Messaging',
      description: 'Communicate instantly with your team through channels and direct messages.',
    },
    {
      title: 'Task Management',
      description: 'Create, assign, and track tasks with a built-in Kanban board.',
    },
    {
      title: 'File Sharing',
      description: 'Securely share files and documents with your team members.',
    },
     {
      title: 'Team Activity Tracking',
      description: 'Stay updated with a real-time feed of all workspace activities.',
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <h2 className="features-title">All The Tools You Need in One Place</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
