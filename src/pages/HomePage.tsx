import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import PackageSelectionSection from '../components/PackageSelectionSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import OrderForm from '../components/OrderForm';
import Footer from '../components/Footer'; // Import the new component

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
      <FAQSection />
      <Footer /> {/* Render the Footer component */}
    </>
  );
};

export default HomePage;