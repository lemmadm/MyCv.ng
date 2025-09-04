import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, HelpCircle, MessageSquare, PhoneCall, PlusCircle, AlertTriangle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { showSuccess } from '../utils/toast';

const ErrorPage: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.bg-white.p-6');
    cards.forEach(card => {
      const handleMouseEnter = () => {
        (card as HTMLElement).style.transform = 'translateY(-5px) scale(1.02)';
      };
      const handleMouseLeave = () => {
        (card as HTMLElement).style.transform = 'translateY(0) scale(1)';
      };
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    // Add click feedback to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      const handleClick = () => {
        (button as HTMLElement).style.transform = 'scale(0.95)';
        setTimeout(() => {
          (button as HTMLElement).style.transform = '';
        }, 150);
      };
      button.addEventListener('click', handleClick);
      return () => {
        button.removeEventListener('click', handleClick);
      };
    });
  }, []);

  const handleFloatingClick = () => {
    setClickCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount === 5) {
        showSuccess('🎉 You found the easter egg! You clicked the 404 five times! 🎉');
        return 0; // Reset count after easter egg
      }
      return newCount;
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />

      {/* Main Error Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Animation */}
          <div className="mb-12">
            <div className="relative">
              {/* Large 404 */}
              <div
                className="text-8xl md:text-9xl font-bold text-gray-200 floating select-none cursor-pointer"
                onClick={handleFloatingClick}
              >
                <br />
                404
              </div>

              {/* Floating Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center bounce pulse-glow">
                  <FileText className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Oops! Wrong Address
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              The page you're looking for doesn't exist at this address.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl max-w-lg mx-auto mb-8">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-red-800 mb-2">Common Reasons:</h3>
                  <ul className="text-red-700 text-sm space-y-1 text-left">
                    <li>• You typed the wrong URL</li>
                    <li>• The CV website name doesn't exist</li>
                    <li>• The link you clicked is broken</li>
                    <li>• The page has been moved or deleted</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Home className="w-5 h-5 mr-2" /> Go to Homepage
              </Link>
            </div>

            <p className="text-gray-500 text-sm">or try one of the options below</p>
          </div>

          {/* Helpful Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-lg mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PlusCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Create Your CV</h3>
              <p className="text-gray-600 text-sm mb-4">Turn your CV into a website in 24 hours</p>
              <Link to="/#package-selection" className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center">
                Get Started - ₦2,500
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-gray-600 text-sm mb-4">Contact us if you can't find what you're looking for</p>
              <button onClick={() => window.open('https://wa.me/2347083682007?text=Hi! I got an error and I need help finding a CV website.', '_blank')} className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center justify-center">
                <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp Us
              </button>
            </div>
          </div>

          {/* URL Format Help */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl max-w-2xl mx-auto">
            <h4 className="font-bold text-blue-800 mb-3 flex items-center">
              <LinkIcon className="w-5 h-5 mr-2" />
              Correct URL Format
            </h4>
            <p className="text-blue-700 mb-3">CV websites on MyCV.i.ng follow this format:</p>
            <div className="bg-blue-100 p-3 rounded font-mono text-blue-800 text-center">
              www.<span className="font-bold text-blue-600">yourname</span>.mycv.i.ng
            </div>
            <p className="text-blue-600 text-sm mt-3">
              <strong>Example:</strong> www.john-doe.mycv.i.ng or www.adebayo.mycv.i.ng
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Custom icon for Link, as lucide-react doesn't have a direct 'link' icon that matches the original intent
const LinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
  </svg>
);

const Home: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2 2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>
);

export default ErrorPage;