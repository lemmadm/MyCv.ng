import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react'; // Using lucide-react for icons

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Background pattern or image can go here */}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Turn Your CV into a <span className="block md:inline-block text-yellow-300">Professional Website</span> in 24 Hours!
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90 animate-fade-in-up delay-200">
          Get a sleek, mobile-friendly online CV hosted at <strong className="font-semibold">yourname.mycv.i.ng</strong>. Perfect for job applications, LinkedIn, and networking.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in-up delay-400">
          <a href="#package-selection" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
            <ArrowRight className="w-5 h-5 mr-2" /> Get Started Now - ₦2,500
          </a>
          <a href="#how-it-works" className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 mr-2" /> How It Works
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base opacity-80 animate-fade-in-up delay-600">
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-300" /> Mobile Friendly
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-300" /> Professional Design
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-300" /> Fast Delivery
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-300" /> Affordable Pricing
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;