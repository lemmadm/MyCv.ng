import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import PackageSelectionSection from '../components/PackageSelectionSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection'; // Import the new component
import OrderForm from '../components/OrderForm';

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
      <TestimonialsSection />
      <FAQSection /> {/* Render the FAQSection */}
      {/* More sections will be added here */}
      <div className="p-8 text-center">
        <p className="text-lg text-gray-600">More content from the original index.html will be migrated below.</p>
      </div>
    </>
  );
};

export default HomePage;