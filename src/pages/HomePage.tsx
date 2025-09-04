import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import PackageSelectionSection from '../components/PackageSelectionSection';
import TestimonialsSection from '../components/TestimonialsSection'; // Import the new component
import OrderForm from '../components/OrderForm'; // Assuming this is already imported

const HomePage: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = React.useState<string | null>(null);

  const handlePackageSelect = (packageType: string) => {
    setSelectedPackage(packageType);
  };

  const handleBackToPackages = () => {
    setSelectedPackage(null);
  };

  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      {selectedPackage ? (
        <OrderForm packageType={selectedPackage} onBack={handleBackToPackages} />
      ) : (
        <PackageSelectionSection onPackageSelect={handlePackageSelect} />
      )}
      <TestimonialsSection /> {/* Render the TestimonialsSection */}
      {/* More sections will be added here */}
      <div className="p-8 text-center">
        <p className="text-lg text-gray-600">More content from the original index.html will be migrated below.</p>
      </div>
    </>
  );
};

export default HomePage;