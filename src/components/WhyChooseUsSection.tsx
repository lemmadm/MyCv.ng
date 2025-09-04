import React from 'react';
import { Zap, ShieldCheck, Globe, DollarSign, Clock, Smartphone } from 'lucide-react'; // Using lucide-react for icons

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose MyCV.i.ng?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer the best solution for Nigerian professionals to showcase their talent online.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="feature-card bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast Delivery</h3>
            <p className="text-gray-600">
              Get your professional CV website live within 24 hours of submission and payment.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Reliable Hosting</h3>
            <p className="text-gray-600">
              Your website is hosted on a secure, high-performance server, ensuring 24/7 availability.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach, Local Touch</h3>
            <p className="text-gray-600">
              Showcase your skills to employers worldwide with a platform built for Nigerians.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="feature-card bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <DollarSign className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Unbeatable Price</h3>
            <p className="text-gray-600">
              Get a premium CV website for an incredibly affordable one-time fee of ₦2,500.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="feature-card bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Lifetime Updates</h3>
            <p className="text-gray-600">
              Enjoy free minor updates within 24 hours of delivery, and affordable updates thereafter.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="feature-card bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
              <Smartphone className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile-First Design</h3>
            <p className="text-gray-600">
              Your CV website will look stunning and function perfectly on all devices, from desktops to smartphones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;