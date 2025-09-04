import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Zap, Phone, Flag, Shield, DollarSign, FileText, ChevronDown, HelpCircle, Upload, Layout, Send, Rocket, Star, Zap as ZapIcon, ShieldCheck, Globe, DollarSign as DollarSignIcon, Clock, Smartphone, Mail, MessageSquare, PhoneCall, Info, XCircle, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

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

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollIndicator = document.getElementById('scrollIndicator');
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;

      if (scrollIndicator) {
        scrollIndicator.style.transform = `scaleX(${scrollPercent})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-green-600 transform scale-x-0 origin-left z-50 transition-transform duration-300" id="scrollIndicator"></div>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 animate-float">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Your privacy matters to us. Here's how we protect your personal information and CV data.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-4 text-blue-100">
              <Clock className="w-6 h-6" />
              <span className="font-semibold">Last Updated: 16th August, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Privacy at a Glance</h2>
            <p className="text-xl text-gray-600">Here's what you need to know about how we handle your data</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">We Protect Your CV</h3>
              <p className="text-gray-600">Your CV files are confidential and deleted after delivery unless you request updates.</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Data Selling</h3>
              <p className="text-gray-600">We never sell, rent, or share your personal information with third parties or marketers.</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSignIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600">We don't store your payment details. All transactions are handled securely by trusted providers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🛡️ Your Privacy Matters</h2>
              <p className="text-gray-700 leading-relaxed">
                At MyCV.i.ng, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our service to create your CV website. We're committed to being transparent about our practices and protecting your data.
              </p>
            </div>
          </div>

          {/* What Information We Collect */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="w-8 h-8 text-blue-600 mr-3" />
              What Information We Collect
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When you use our service, we may collect the following information to create your professional CV website:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">📝 Personal Information</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Your full name</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Email address</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Phone number (WhatsApp preferred)</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">📄 Professional Information</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Your CV (PDF or Word format)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Payment receipts or transaction details</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Optional design preferences</li>
                </ul>
              </div>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mt-6 rounded-r-xl">
              <h4 className="font-bold text-red-800 mb-2">🚫 What We DON'T Collect</h4>
              <p className="text-red-700">
                We do not collect sensitive personal data such as passwords, bank details, biometric data, or any information not directly related to creating your CV website.
              </p>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Info className="w-8 h-8 text-green-600 mr-3" />
              How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We use your submitted information solely for legitimate business purposes related to providing our CV website service:
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Creating and Publishing Your CV Website</h4>
                  <p className="text-gray-700">Transform your CV into a professional, mobile-friendly website that showcases your skills and experience.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Communication & Updates</h4>
                  <p className="text-gray-700">Keep you informed about your order status, delivery timeline, and provide customer support when needed.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Service Improvement</h4>
                  <p className="text-gray-700">Analyze feedback and usage patterns to enhance our service quality and user experience.</p>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-6 rounded-r-xl">
              <h4 className="font-bold text-yellow-800 mb-2">✋ What We DON'T Do</h4>
              <p className="text-yellow-700">
                <strong>We do not sell, rent, or share your personal information with any third-party services or marketers.</strong> Your data stays with us and is used only for the purposes stated above.
              </p>
            </div>
          </div>

          {/* Document Confidentiality */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Lock className="w-8 h-8 text-purple-600 mr-3" />
              Document Confidentiality
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl mb-6">
              <h4 className="font-bold text-gray-900 mb-3">🔒 Your CV is Safe With Us</h4>
              <p className="text-gray-700 leading-relaxed">
                Your CV and all submitted files are treated as strictly confidential. They are only accessed by our professional team members who need to build your website, and are never published, shared, or stored publicly without your explicit consent.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-green-200 p-6 rounded-xl">
                <h4 className="font-bold text-green-800 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Automatic Deletion
                </h4>
                <p className="text-gray-700">We delete raw CV files after your website is successfully delivered, unless you specifically request long-term update support.</p>
              </div>
              <div className="bg-white border-2 border-blue-200 p-6 rounded-xl">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center">
                  <Lock className="w-5 h-5 mr-2" />
                  Limited Access
                </h4>
                <p className="text-gray-700">Only authorized team members involved in creating your website have access to your CV content during the development process.</p>
              </div>
            </div>
          </div>

          {/* Payment Security */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <DollarSignIcon className="w-8 h-8 text-green-600 mr-3" />
              Payment Security
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mb-6">
              <h4 className="font-bold text-gray-900 mb-3">💳 Your Payment Details Are Protected</h4>
              <p className="text-gray-700 leading-relaxed">
                Payments are handled via secure third-party providers like Paystack or Flutterwave. <strong>MyCV.i.ng does not store or process your credit/debit card details.</strong> All payment transactions are encrypted and handled securely through these trusted payment platforms.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white border-2 border-green-200 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h5 className="font-bold text-gray-900 mb-1">Encrypted</h5>
                <p className="text-sm text-gray-600">All transactions use bank-level encryption</p>
              </div>
              <div className="text-center p-4 bg-white border-2 border-blue-200 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <XCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h5 className="font-bold text-gray-900 mb-1">Not Stored</h5>
                <p className="text-sm text-gray-600">We never store your card details</p>
              </div>
              <div className="text-center p-4 bg-white border-2 border-purple-200 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h5 className="font-bold text-gray-900 mb-1">Trusted</h5>
                <p className="text-sm text-gray-600">Paystack & Flutterwave certified</p>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <HelpCircle className="w-8 h-8 text-yellow-600 mr-3" />
              Your Rights & Control
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              You have full control over your personal data. Here are your rights as our customer:
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
                <XCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Request Data Deletion</h4>
                  <p className="text-gray-700">Ask us to permanently delete your personal data and CV files from our systems at any time.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-400">
                <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Request Corrections</h4>
                  <p className="text-gray-700">Ask for corrections or updates to your personal details if they become outdated or incorrect.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl border-l-4 border-green-400">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Withdraw Consent</h4>
                  <p className="text-gray-700">Withdraw your consent for data processing at any time, though this may affect our ability to provide services.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-xl border-l-4 border-purple-400">
                <FileText className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Access Your Data</h4>
                  <p className="text-gray-700">Request a copy of all personal data we have about you in a readable format.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl mt-6">
              <h4 className="font-bold text-gray-900 mb-2">📞 How to Exercise Your Rights</h4>
              <p className="text-gray-700">
                To exercise any of these rights, simply contact us directly through WhatsApp, email, or phone. We'll respond to your request within 48 hours and complete most requests within 7 business days.
              </p>
            </div>
          </div>

          {/* Data Retention & Cookies */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="w-6 h-6 text-orange-600 mr-3" />
                Data Retention
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We retain your data only as long as necessary to provide the service and for basic support.
              </p>
              <div className="bg-orange-50 p-4 rounded-xl">
                <h4 className="font-bold text-orange-800 mb-2">⏰ Retention Period</h4>
                <ul className="text-orange-700 space-y-1 text-sm">
                  <li>• CV files: Deleted after delivery (unless you request updates)</li>
                  <li>• Contact info: Kept for customer support</li>
                  <li>• Payment records: As required by law</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Info className="w-6 h-6 text-indigo-600 mr-3" />
                Cookies & Tracking
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We use basic website tracking tools to improve site performance and understand user behavior.
              </p>
              <div className="bg-indigo-50 p-4 rounded-xl">
                <h4 className="font-bold text-indigo-800 mb-2">🍪 What We Track</h4>
                <ul className="text-indigo-700 space-y-1 text-sm">
                  <li>• Basic site usage (pages visited, time spent)</li>
                  <li>• Technical info (browser, device type)</li>
                  <li>• No personally identifiable information</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <ZapIcon className="w-8 h-8 text-red-600 mr-3" />
              Policy Updates
            </h2>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-3">📋 Staying Current</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Privacy Policy may be updated from time to time to reflect changes in our practices, legal requirements, or service improvements. All changes will be reflected on this page with a new "Last Updated" date.
              </p>
              <div className="bg-white p-4 rounded-lg border-l-4 border-red-400">
                <p className="text-gray-700 text-sm">
                  <strong>We'll notify you:</strong> If we make significant changes that affect how we handle your data, we'll send you an email notification before the changes take effect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Questions About Your Privacy?</h2>
          <p className="text-xl mb-12 text-green-100">We're here to help! Contact us if you have any questions or concerns about this Privacy Policy.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-green-100 mb-4">Quick privacy questions</p>
              <button onClick={() => window.open('https://wa.me/2347083682007?text=Hi! I have a question about your Privacy Policy.', '_blank')} className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Chat Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-green-100 mb-4">Detailed privacy inquiries</p>
              <button onClick={() => window.location.href='mailto:info@mycv.i.ng?subject=Privacy Policy Question'} className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Email Us
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneCall className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-green-100 mb-4">Speak with our team</p>
              <button onClick={() => window.location.href='tel:+2347083682007'} className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call Now
              </button>
            </div>
          </div>
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h4 className="text-xl font-bold mb-4">🛡️ Your Privacy is Our Priority</h4>
            <p className="text-green-100">
              We take your privacy seriously and are committed to protecting your personal information.
              If you have any concerns or need clarification about how we handle your data, don't hesitate to reach out.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;