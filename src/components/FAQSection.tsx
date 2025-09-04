import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react'; // Using lucide-react for icons

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800 hover:text-blue-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <p className="mt-3 text-gray-600 leading-relaxed animate-fade-in">
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How long does it take to get my CV website?",
      answer: "Your professional CV website will be ready and live within 24 hours of receiving both your payment and your CV document (PDF or Word format)."
    },
    {
      question: "What is the cost of a CV website?",
      answer: "Our standard package costs just ₦2,500. This is a one-time fee for design, hosting, and a unique subdomain (yourname.mycv.i.ng)."
    },
    {
      question: "What if I don't have a CV document?",
      answer: "No problem! We offer a 'Custom Creation' package where you provide us with your details (experience, education, skills) through a form, and we'll craft your CV website from scratch for ₦5,000."
    },
    {
      question: "Can I make changes to my website after it's delivered?",
      answer: "Yes! Minor updates (e.g., contact details, small text corrections) are free within 24 hours of delivery. After that, updates cost a small fee of ₦500 per request."
    },
    {
      question: "Is my personal information and CV safe with MyCV.i.ng?",
      answer: "Absolutely. We treat your CV and personal data with the utmost confidentiality. Your CV files are deleted after delivery, and we never share or sell your information to third parties. All payments are processed securely by trusted payment gateways."
    },
    {
      question: "What domain will my CV website be hosted on?",
      answer: "Your website will be hosted on a unique subdomain under our platform, for example: www.yourname.mycv.i.ng. You choose your desired 'yourname' during the order process."
    },
    {
      question: "What if I'm not satisfied with my website?",
      answer: "We strive for 100% satisfaction. If the delivered website significantly differs from our service description or has technical issues, you may be eligible for a refund within 48 hours. We also offer free minor updates to ensure you're happy."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Find quick answers to the most common questions about our CV website service.
        </p>

        <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl shadow-lg p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Still have questions? We're here to help!
          </p>
          <a
            href="https://wa.me/2347083682007?text=Hi! I have a question about MyCV.i.ng."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <HelpCircle className="w-5 h-5 mr-2" /> Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;