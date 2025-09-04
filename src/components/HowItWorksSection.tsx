import React from 'react';
import { Upload, Layout, Send, Rocket } from 'lucide-react'; // Using lucide-react for icons

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Simple Steps to Your Professional CV Website
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          We've made the process incredibly easy and fast. Get your online CV in just 3 simple steps!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="feature-card bg-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Submit Your CV & Details</h3>
            <p className="text-gray-600">
              Upload your existing CV (PDF/Word) and fill out a quick form with your contact info and desired domain.
            </p>
          </div>

          {/* Step 2 */}
          <div className="feature-card bg-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Layout className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. We Design & Build</h3>
            <p className="text-gray-600">
              Our expert team transforms your CV content into a stunning, mobile-friendly website design.
            </p>
          </div>

          {/* Step 3 */}
          <div className="feature-card bg-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Send className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Go Live in 24 Hours!</h3>
            <p className="text-gray-600">
              Receive your unique website link (e.g., yourname.mycv.i.ng) via email and SMS, ready to share.
            </p>
          </div>

          {/* Step 4 (Added for consistency with original HTML's implied steps) */}
          <div className="feature-card bg-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Start Sharing!</h3>
            <p className="text-gray-600">
              Instantly share your professional online CV on LinkedIn, job applications, and social media.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;