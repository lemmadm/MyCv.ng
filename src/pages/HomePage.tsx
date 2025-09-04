import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection'; // Import the new component

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorksSection /> {/* Render the HowItWorksSection */}
      {/* More sections will be added here */}
      <div className="p-8 text-center">
        <p className="text-lg text-gray-600">More content from the original index.html will be migrated below.</p>
      </div>
    </>
  );
};

export default HomePage;