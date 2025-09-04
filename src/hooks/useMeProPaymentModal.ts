import React, { useState } from 'react';
import { showSuccess, showError } from '../utils/toast';
import { Smartphone, Mail } from 'lucide-react'; // Import icons for WhatsApp contact in modal

interface PaymentModalContent {
  title: string;
  content: React.ReactNode;
}

interface UseMeProPaymentModalReturn {
  isPaymentModalOpen: boolean;
  paymentModalContent: PaymentModalContent | null;
  showPaymentModal: (type: 'bank' | 'card' | 'mobile' | 'general') => void;
  closePaymentModal: () => void;
  openWhatsApp: (number: string, message?: string) => void;
}

const useMeProPaymentModal = (): UseMeProPaymentModalReturn => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentModalContent, setPaymentModalContent] = useState<PaymentModalContent | null>(null);

  const openWhatsApp = (phoneNumber: string, message: string = "Hello! I'm interested in connecting with you. I found your digital business card very impressive!") => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const initiateCardPayment = () => {
    showError('Card payment feature coming soon! Please use bank transfer or contact via WhatsApp.');
  };

  const showPaymentModal = (type: 'bank' | 'card' | 'mobile' | 'general') => {
    let title = 'Payment Information';
    let content: React.ReactNode = '';

    switch (type) {
      case 'bank':
        title = 'Bank Transfer Details';
        content = (
          <div className="text-left">
            <h4 className="font-semibold mb-3">Transfer to:</h4>
            <p><strong>Bank:</strong> GTBank</p>
            <p><strong>Account Name:</strong> Adebayo Okafor</p>
            <p><strong>Account Number:</strong> 0123456789</p>
            <p><strong>Amount:</strong> ₦25,000</p>
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-800">💡 <strong>Note:</strong> Send payment screenshot to WhatsApp after transfer</p>
            </div>
          </div>
        );
        break;
      case 'card':
        title = 'Card Payment';
        content = (
          <div className="text-center">
            <p className="mb-4">Secure card payment powered by Paystack</p>
            <button onClick={initiateCardPayment} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
              Pay ₦25,000 with Card
            </button>
          </div>
        );
        break;
      case 'mobile':
        title = 'Mobile Money';
        content = (
          <div className="text-left">
            <h4 className="font-semibold mb-3">Send to:</h4>
            <p><strong>Opay:</strong> 0803-123-4567</p>
            <p><strong>PalmPay:</strong> 0803-123-4567</p>
            <p><strong>Kuda:</strong> 0803-123-4567</p>
            <p><strong>Amount:</strong> ₦25,000</p>
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">📱 Send payment confirmation to WhatsApp</p>
            </div>
          </div>
        );
        break;
      default:
        content = (
          <div className="text-center">
            <p className="mb-4">Choose your preferred payment method:</p>
            <div className="space-y-2">
              <button onClick={() => showPaymentModal('bank')} className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">Bank Transfer</button>
              <button onClick={() => showPaymentModal('card')} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Card Payment</button>
              <button onClick={() => showPaymentModal('mobile')} className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">Mobile Money</button>
            </div>
          </div>
        );
    }
    setPaymentModalContent({ title, content });
    setIsPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setPaymentModalContent(null);
  };

  return {
    isPaymentModalOpen,
    paymentModalContent,
    showPaymentModal,
    closePaymentModal,
    openWhatsApp, // Expose openWhatsApp as it's used in the modal
  };
};

export default useMeProPaymentModal;