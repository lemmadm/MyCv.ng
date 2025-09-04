import React from 'react';
import { Link } from 'react-router-dom';
import { Home, FileText, Shield, DollarSign } from 'lucide-react'; // Using lucide-react for icons

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer">
            <img src="images/logo.webp" alt="MyCV.i.ng Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-gray-900">MyCV.i.ng</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
              <Home className="w-4 h-4 mr-1" /> Home
            </Link>
            <Link to="/our-terms" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
              <FileText className="w-4 h-4 mr-1" /> Terms
            </Link>
            <Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
              <Shield className="w-4 h-4 mr-1" /> Privacy
            </Link>
            <Link to="/refund" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
              <DollarSign className="w-4 h-4 mr-1" /> Refund
            </Link>
            <span className="text-sm text-gray-600">🇳🇬 Made for Nigerians</span>
          </nav>
          {/* Mobile menu button would go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;