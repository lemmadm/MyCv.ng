import React from 'react';
import { XCircle, Smartphone, Mail } from 'lucide-react';

interface MeProGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: {
    title: string;
    description: string;
    details: string[];
    icon: React.ReactNode;
    color: string;
  } | null;
  openWhatsApp: (number: string, message?: string) => void;
  sendEmail: (email: string) => void;
}

const MeProGalleryModal: React.FC<MeProGalleryModalProps> = ({ isOpen, onClose, content, openWhatsApp, sendEmail }) => {
  if (!isOpen || !content) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center">
            <div className={`w-16 h-16 bg-gradient-to-br ${content.color} rounded-xl flex items-center justify-center mr-4`}>
              {content.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{content.title}</h3>
              <p className="text-gray-600">{content.description}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XCircle className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">Key Highlights:</h4>
          <div className="space-y-2">
            {content.details.map((detail, index) => (
              <p key={index} className="text-gray-700 text-sm">{detail}</p>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-3">
          <button onClick={() => openWhatsApp('+2347083682007', `Hi! I'm interested in discussing your project: ${content.title}.`)} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            <Smartphone className="w-5 h-5 mr-2" />Discuss This Project
          </button>
          <button onClick={() => sendEmail('info@mycv.i.ng')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Mail className="w-5 h-5 mr-2" />Request Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeProGalleryModal;