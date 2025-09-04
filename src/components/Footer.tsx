import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Zap, Phone, Flag } from 'lucide-react'; // Using lucide-react for icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-3 mb-4">
          <img src="images/fav.png" alt="MyCV.i.ng Logo" className="w-8 h-8" />
          <span className="text-2xl font-bold">MyCV.i.ng</span>
        </div>
        <p className="text-gray-400 mb-6">Professional CV websites made simple • Proudly Nigerian 🌟</p>
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm mb-6">
          <span className="flex items-center gap-1">
            <Lock className="w-4 h-4" /> SSL Secured
          </span>
          <span className="flex items-center gap-1">
            <Zap className="w-4 h-4" /> Fast Delivery
          </span>
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4" /> 24/7 Support
          </span>
          <span className="flex items-center gap-1">
            <Flag className="w-4 h-4" /> Made in Nigeria
          </span>
        </div>
        <nav className="flex flex-wrap justify-center items-center gap-6 text-sm mb-6">
          <Link to="/our-terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link>
          <Link to="/refund" className="hover:text-blue-400 transition-colors">Refund Policy</Link>
          <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
        </nav>
        <p className="text-xs text-gray-500">© 2025 MyCV.i.ng - Empowering Nigerian Professionals Worldwide</p>
      </div>
    </footer>
  );
};

export default Footer;