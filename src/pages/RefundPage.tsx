import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, DollarSign, CheckCircle, XCircle, Info, MessageSquare, Mail, PhoneCall, Zap, Edit, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { showSuccess, showError, showLoading, dismissToast } from '../utils/toast';

const RefundPage: React.FC = () => {
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

  const handleContactClick = (type: 'whatsapp' | 'email' | 'phone', subject?: string) => {
    if (type === 'whatsapp') {
      window.open('https://wa.me/2347083682007?text=Hi! I need to request a refund for my CV website order.', '_blank');
    } else if (type === 'email') {
      window.location.href = `mailto:refund@mycv.i.ng?subject=${subject || 'Refund Request'}`;
    } else if (type === 'phone') {
      window.location.href = 'tel:+2347083682007';
    }
  };

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
            Refund Policy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            We stand behind our service quality. Here's our fair and transparent refund policy.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Refund Policy Overview</h2>
            <p className="text-xl text-gray-600">Simple, fair refund terms that protect both you and our business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">If we don't deliver what we promised, you get your money back.</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">48-Hour Window</h3>
              <p className="text-gray-600">Request refunds within 48 hours if we fail to deliver as promised.</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Processing</h3>
              <p className="text-gray-600">Valid refunds processed within 3-5 business days back to your payment method.</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💯 Our Commitment to You</h2>
              <p className="text-gray-700 leading-relaxed">
                At MyCV.i.ng, we're confident in our service quality. This refund policy ensures you're protected if we don't deliver what we promise, while also protecting our business from misuse. We believe in being fair and transparent with all our customers.
              </p>
            </div>
          </div>

          {/* When You Can Get a Refund */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">1</div>
              When You Can Get a Refund
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              We offer refunds in specific situations where we fail to meet our service commitments:
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl border-l-4 border-green-400">
                <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Non-Delivery After 48 Hours</h4>
                  <p className="text-gray-700">If we fail to deliver your CV website within 48 hours of receiving both payment and your CV document, you're eligible for a full refund.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-400">
                <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Technical Failure</h4>
                  <p className="text-gray-700">If technical issues on our end prevent us from creating or hosting your website, and we cannot resolve them within 48 hours.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-xl border-l-4 border-purple-400">
                <Info className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Service Not as Described</h4>
                  <p className="text-gray-700">If the delivered website significantly differs from our service description (missing mobile compatibility, broken functionality, etc.).</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                <DollarSign className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Payment Processing Error</h4>
                  <p className="text-gray-700">If you were charged multiple times due to a payment processing error, we'll refund the duplicate charges immediately.</p>
                </div>
              </div>
            </div>
          </div>

          {/* When Refunds Are NOT Available */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">2</div>
              When Refunds Are NOT Available
            </h2>

            <div className="bg-red-50 p-6 rounded-xl mb-6">
              <h4 className="font-bold text-red-800 mb-3">🚫 No Refunds After Successful Delivery</h4>
              <p className="text-red-700 leading-relaxed">
                Once we successfully deliver your CV website as promised, refunds are not available. This protects our business from customers who might try to get free work after receiving their website.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-red-200 p-6 rounded-xl">
                <h4 className="font-bold text-red-800 mb-3">❌ Change of Mind</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Deciding you don't want a CV website anymore</li>
                  <li>• Preferring a different design style</li>
                  <li>• Finding another service provider</li>
                  <li>• Personal financial reasons</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-red-200 p-6 rounded-xl">
                <h4 className="font-bold text-red-800 mb-3">❌ Customer Issues</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Providing incorrect or incomplete CV</li>
                  <li>• Delayed response to our communications</li>
                  <li>• Requesting major changes after delivery</li>
                  <li>• Dissatisfaction with your own CV content</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-6 rounded-r-xl">
              <h4 className="font-bold text-yellow-800 mb-2">💡 Alternative Solutions</h4>
              <p className="text-yellow-700">
                Instead of refunds, we offer free minor updates within 24 hours of delivery, and paid updates (₦500) after that. This ensures you get exactly what you want.
              </p>
            </div>
          </div>

          {/* How to Request a Refund */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">3</div>
              How to Request a Refund
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              If you believe you're eligible for a refund based on our policy, here's how to request one:
            </p>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-blue-800 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                  Contact Us Within 48 Hours
                </h4>
                <p className="text-blue-700 mb-3">Refund requests must be made within 48 hours of the expected delivery time or discovery of the issue.</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <button onClick={() => handleContactClick('whatsapp')} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    WhatsApp
                  </button>
                  <button onClick={() => handleContactClick('email', 'Refund Request')} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Email
                  </button>
                  <button onClick={() => handleContactClick('phone')} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Phone
                  </button>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-bold text-green-800 mb-4 flex items-center">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                  Provide Required Information
                </h4>
                <p className="text-green-700 mb-3">Include these details in your refund request:</p>
                <ul className="text-green-600 space-y-1 text-sm">
                  <li>• Your full name and contact information</li>
                  <li>• Payment receipt or transaction ID</li>
                  <li>• Reason for refund request</li>
                  <li>• Any relevant screenshots or documentation</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="font-bold text-purple-800 mb-4 flex items-center">
                  <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                  Wait for Review and Response
                </h4>
                <p className="text-purple-700">We'll review your request within 24 hours and respond with our decision. If approved, refunds are processed within 3-5 business days.</p>
              </div>
            </div>
          </div>

          {/* Refund Processing */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">4</div>
              Refund Processing
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                <h4 className="font-bold text-green-800 mb-3">⚡ Processing Time</h4>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Review: Within 24 hours</li>
                  <li>• Approval notification: Same day</li>
                  <li>• Refund processing: 3-5 business days</li>
                  <li>• Bank processing: 1-3 additional days</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-800 mb-3">💳 Refund Method</h4>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>• Same payment method used for purchase</li>
                  <li>• Bank transfer for cash payments</li>
                  <li>• Full amount minus any processing fees</li>
                  <li>• Confirmation email sent when processed</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-6 rounded-r-xl">
              <h4 className="font-bold text-yellow-800 mb-2">📋 Important Notes</h4>
              <ul className="text-yellow-700 space-y-1 text-sm">
                <li>• Refunds are processed in Nigerian Naira (₦)</li>
                <li>• Payment gateway fees may be deducted from refunds</li>
                <li>• You'll receive email confirmation at each step</li>
                <li>• Contact us if you don't receive your refund within the stated timeframe</li>
              </ul>
            </div>
          </div>

          {/* Partial Refunds */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">5</div>
              Partial Refunds
            </h2>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl mb-6">
              <h4 className="font-bold text-gray-900 mb-3">🔄 When We Offer Partial Refunds</h4>
              <p className="text-gray-700 leading-relaxed">
                In some cases, we may offer partial refunds when the service was partially delivered or when there were minor issues that didn't completely prevent delivery.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-6 bg-orange-50 rounded-xl">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">50%</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Significant Delays</h4>
                  <p className="text-gray-700">If we deliver your website 24-48 hours late due to our error, we may offer a 50% refund as compensation.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-yellow-50 rounded-xl">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">25%</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Minor Quality Issues</h4>
                  <p className="text-gray-700">For minor issues that we can't immediately fix but don't prevent the website from functioning properly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dispute Resolution */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">6</div>
              Dispute Resolution
            </h2>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl mb-6">
              <h4 className="font-bold text-gray-900 mb-3">🤝 Fair Resolution Process</h4>
              <p className="text-gray-700 leading-relaxed">
                If you disagree with our refund decision, we have a fair dispute resolution process to ensure all concerns are properly addressed.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white border-2 border-blue-200 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Direct Discussion</h4>
                <p className="text-gray-600 text-sm">We'll first try to resolve the issue through direct communication and find a mutually acceptable solution.</p>
              </div>

              <div className="text-center p-6 bg-white border-2 border-green-200 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Management Review</h4>
                <p className="text-gray-600 text-sm">If needed, we'll escalate to management for a fresh perspective on your case.</p>
              </div>

              <div className="text-center p-6 bg-white border-2 border-purple-200 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Final Decision</h4>
                <p className="text-gray-600 text-sm">Our management team will make a final decision within 48 hours of escalation.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Need to Request a Refund?</h2>
          <p className="text-xl mb-12 text-green-100">Contact us immediately if you believe you're eligible for a refund under our policy.</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-green-100 mb-4">Fastest response for urgent refund requests</p>
              <button onClick={() => handleContactClick('whatsapp')} className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request Refund
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-green-100 mb-4">Detailed refund requests with documentation</p>
              <button onClick={() => handleContactClick('email', 'Refund Request - Order #')} className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Email Request
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneCall className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-green-100 mb-4">Speak directly with our support team</p>
              <button onClick={() => handleContactClick('phone')} className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call Now
              </button>
            </div>
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h4 className="text-xl font-bold mb-4">⏰ Remember: 48-Hour Window</h4>
            <p className="text-green-100">
              Refund requests must be made within 48 hours of the expected delivery time or discovery of the issue.
              Don't wait - contact us immediately if you have concerns!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RefundPage;