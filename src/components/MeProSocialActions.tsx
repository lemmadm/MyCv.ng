import React from 'react';
import { Share2, Linkedin, Twitter, Instagram, Facebook, Download, UserPlus, CreditCard } from 'lucide-react';

interface MeProSocialActionsProps {
  linkedinUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  downloadCV: () => void;
  saveContact: () => void;
  shareCard: () => void;
  showPaymentModal: (type: 'bank' | 'card' | 'mobile' | 'general') => void;
}

const MeProSocialActions: React.FC<MeProSocialActionsProps> = ({
  linkedinUrl,
  twitterUrl,
  instagramUrl,
  facebookUrl,
  downloadCV,
  saveContact,
  shareCard,
  showPaymentModal,
}) => {
  return (
    <div className="md:col-span-1">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <Share2 className="w-5 h-5 mr-2 text-[#4A90E2]" />
        Connect & Actions
      </h3>

      {/* Social Media Links */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-lg text-center hover:bg-blue-700 transition-all duration-300 hover:scale-105">
          <Linkedin className="w-6 h-6 mx-auto mb-1" />
          <p className="text-xs">LinkedIn</p>
        </a>

        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="bg-sky-500 text-white p-3 rounded-lg text-center hover:bg-sky-600 transition-all duration-300 hover:scale-105">
          <Twitter className="w-6 h-6 mx-auto mb-1" />
          <p className="text-xs">Twitter</p>
        </a>

        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white p-3 rounded-lg text-center hover:bg-pink-600 transition-all duration-300 hover:scale-105">
          <Instagram className="w-6 h-6 mx-auto mb-1" />
          <p className="text-xs">Instagram</p>
        </a>

        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white p-3 rounded-lg text-center hover:bg-blue-900 transition-all duration-300 hover:scale-105">
          <Facebook className="w-6 h-6 mx-auto mb-1" />
          <p className="text-xs">Facebook</p>
        </a>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button onClick={downloadCV} className="w-full text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center bg-[#4A90E2] hover:bg-[#3A7BC8]">
          <Download className="w-5 h-5 mr-2" />
          Download Portfolio
        </button>

        <button onClick={saveContact} className="w-full text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center bg-[#FF968D] hover:bg-[#FF7F73]">
          <UserPlus className="w-5 h-5 mr-2" />
          Save Contact
        </button>

        <button onClick={() => showPaymentModal('general')} className="w-full text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center bg-[#00C851] hover:bg-[#00A63F]">
          <CreditCard className="w-5 h-5 mr-2" />
          Pay with Card/Transfer
        </button>

        <button onClick={shareCard} className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-all duration-300 flex items-center justify-center">
          <Share2 className="w-5 h-5 mr-2" />
          Share Card
        </button>
      </div>
    </div>
  );
};

export default MeProSocialActions;