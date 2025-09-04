import React from 'react';
import { CreditCard, University, Smartphone } from 'lucide-react';

interface MeProPaymentOptionsProps {
  showPaymentModal: (type: 'bank' | 'card' | 'mobile' | 'general') => void;
}

const MeProPaymentOptions: React.FC<MeProPaymentOptionsProps> = ({ showPaymentModal }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <CreditCard className="w-6 h-6 mr-3 text-[#4A90E2]" />
        Payment Options
      </h3>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 border-2 border-green-200 rounded-xl text-center hover:border-green-400 transition-all cursor-pointer" onClick={() => showPaymentModal('bank')}>
          <University className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800">Bank Transfer</h4>
          <p className="text-sm text-gray-600">GTBank, Access, UBA, etc.</p>
        </div>

        <div className="p-4 border-2 border-blue-200 rounded-xl text-center hover:border-blue-400 transition-all cursor-pointer" onClick={() => showPaymentModal('card')}>
          <CreditCard className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800">Debit/Credit Card</h4>
          <p className="text-sm text-gray-600">Visa, Mastercard, Verve</p>
        </div>

        <div className="p-4 border-2 border-purple-200 rounded-xl text-center hover:border-purple-400 transition-all cursor-pointer" onClick={() => showPaymentModal('mobile')}>
          <Smartphone className="w-8 h-8 text-purple-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800">Mobile Money</h4>
          <p className="text-sm text-gray-600">Opay, PalmPay, Kuda</p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600 mb-4">💰 <strong>MyCv.i.ng Service:</strong> ₦25,000 for Professional Digital CV</p>
        <p className="text-xs text-gray-500">Includes: Custom design, Professional hosting at mycv.i.ng/yourname, QR code, mobile optimization, and lifetime updates</p>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm font-medium text-blue-800">🎯 Perfect for: Executives, Managers, Consultants, and Business Professionals</p>
          <p className="text-xs text-blue-600 mt-1">Stand out in job applications and networking events with a professional digital presence</p>
        </div>
      </div>
    </div>
  );
};

export default MeProPaymentOptions;