import React from 'react';
import { XCircle, Smartphone } from 'lucide-react';

interface MeProPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  openWhatsApp: (number: string, message?: string) => void;
}

const MeProPaymentModal: React.FC<MeProPaymentModalProps> = ({ isOpen, onClose, title, content, openWhatsApp }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XCircle className="w-6 h-6" />
          </button>
        </div>
        {content}
        <div className="mt-6 text-center">
          <button onClick={() => openWhatsApp('+2347083682007')} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            <Smartphone className="w-5 h-5 mr-2" />Contact on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeProPaymentModal;