import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Clock, DollarSign, Zap, ShieldCheck, Rocket, Edit, Globe, XCircle, CheckCircle, Info, PhoneCall, MessageSquare, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
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
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Clear, fair terms for our CV website service. We believe in transparency and protecting both you and our business.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Terms at a Glance</h2>
            <p className="text-xl text-gray-600">Here's what you need to know about using MyCV.i.ng</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">24-Hour Delivery</h3>
              <p className="text-gray-600 text-sm">Your CV website ready within 24 hours of payment and CV submission.</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">₦2,500 Flat Rate</h3>
              <p className="text-gray-600 text-sm">Simple, transparent pricing. Payment required before we start building.</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Edit className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Free Updates</h3>
              <p className="text-gray-600 text-sm">Minor updates free within 24 hours. ₦500 for updates after that.</p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Your Domain</h3>
              <p className="text-gray-600 text-sm">Hosted at yourname.mycv.i.ng with professional design and mobile support.</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Welcome to MyCV.i.ng</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to MyCV.i.ng, a service provided to help individuals convert their traditional CVs into personalized websites hosted under our platform (e.g. www.yourname.mycv.i.ng). By using this service, you agree to the following terms and conditions. We've made these terms clear and fair for everyone.
              </p>
            </div>
          </div>

          {/* Service Overview */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="terms-number mr-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">1</span>
              Service Overview
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl mb-6">
              <h4 className="font-bold text-gray-900 mb-3">🚀 What We Do</h4>
              <p className="text-gray-700 leading-relaxed">
                MyCV.i.ng provides a done-for-you service where we design and host a personal CV website based on your submitted CV (in PDF or Word format). The service is completed within 24 hours after both payment and document submission are confirmed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-blue-200 p-6 rounded-xl">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  What's Included
                </h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Professional website design</li>
                  <li>• Mobile-friendly layout</li>
                  <li>• Custom URL (yourname.mycv.i.ng)</li>
                  <li>• 24-hour delivery</li>
                  <li>• Basic hosting included</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-green-200 p-6 rounded-xl">
                <h4 className="font-bold text-green-800 mb-3 flex items-center">
                  <Info className="w-5 h-5 mr-2" />
                  Requirements
                </h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• CV in PDF or Word format</li>
                  <li>• Full payment before we start</li>
                  <li>• Valid contact information</li>
                  <li>• Accurate CV content</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing and Payment */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="terms-number mr-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">2</span>
              Pricing and Payment
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                <h4 className="font-bold text-green-800 mb-3">💰 Simple Pricing</h4>
                <div className="text-3xl font-bold text-green-600 mb-2">₦2,500</div>
                <p className="text-green-700 text-sm">Flat rate for all CV websites. No hidden fees or surprise charges.</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-800 mb-3">⚡ Payment First</h4>
                <p className="text-blue-700 text-sm mb-3">Payment must be made in full before your website is created.</p>
                <div className="text-xs text-blue-600 bg-blue-100 p-2 rounded">
                  This ensures we can start working on your project immediately.
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
                <h4 className="font-bold text-red-800 mb-3">🚫 No Refunds</h4>
                <p className="text-red-700 text-sm mb-3">All payments are non-refundable once the service is delivered.</p>
                <div className="text-xs text-red-600 bg-red-100 p-2 rounded">
                  We deliver exactly what we promise, so refunds aren't needed.
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-6 rounded-r-xl">
              <h4 className="font-bold text-yellow-800 mb-2">💳 Secure Payment Methods</h4>
              <p className="text-yellow-700">
                We accept payments through secure platforms like Paystack and Flutterwave. Your payment information is always protected.
              </p>
            </div>
          </div>

          {/* Submission Requirements */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="terms-number mr-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">3</span>
              Submission Requirements
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              To process your request efficiently, you must provide the following:
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Current CV Document</h4>
                  <p className="text-gray-700">A current version of your CV in PDF or Word format. Make sure it's up-to-date and contains all the information you want on your website.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <DollarSign className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Valid Payment Receipt</h4>
                  <p className="text-gray-700">A valid payment receipt or payment through our provided secure form. This confirms your order and allows us to start immediately.</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mt-6 rounded-r-xl">
              <h4 className="font-bold text-orange-800 mb-2">⚠️ Important Note</h4>
              <p className="text-orange-700">
                <strong>Incomplete submissions may delay the delivery time.</strong> Please ensure you provide all required documents to avoid delays in getting your website.
              </p>
            </div>
          </div>

          {/* Delivery Timeline */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="terms-number mr-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">4</span>
              Delivery Timeline
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
              <h4 className="font-bold text-gray-900 mb-3">⏰ Our Promise</h4>
              <p className="text-gray-700 leading-relaxed">
                Websites are typically delivered within 24 hours of receiving both the CV and payment receipt. We work around the clock to meet this commitment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-green-200 p-6 rounded-xl">
                <h4 className="font-bold text-green-800 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Normal Timeline
                </h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Payment received: Immediate confirmation</li>
                  <li>• CV processing: 2-4 hours</li>
                  <li>• Website building: 8-16 hours</li>
                  <li>• Final delivery: Within 24 hours</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-yellow-200 p-6 rounded-xl">
                <h4 className="font-bold text-yellow-800 mb-3 flex items-center">
                  <XCircle className="w-5 h-5 mr-2" />
                  Possible Delays
                </h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Peak periods (holidays, weekends)</li>
                  <li>• Complex CV formatting requirements</li>
                  <li>• Technical issues (rare)</li>
                  <li>• We'll always communicate delays</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Post-Delivery Updates */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="terms-number mr-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">5</span>
              Post-Delivery Updates
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              We understand that you might need to make changes after your website is delivered. Here's our update policy:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                <h4 className="font-bold text-green-800 mb-3">✅ Free Updates (First 24 Hours)</h4>
                <p className="text-green-700 mb-3">Minor updates requested within 24 hours of delivery are completely free:</p>
                <ul className="text-green-600 space-y-1 text-sm">
                  <li>• Contact details changes</li>
                  <li>• CV version updates</li>
                  <li>• Small text corrections</li>
                  <li>• Link updates</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-800 mb-3">💰 Paid Updates (After 24 Hours)</h4>
                <p className="text-blue-700 mb-3">Updates after 24 hours incur a service charge:</p>
                <div className="bg-blue-100 p-3 rounded mb-3">
                  <div className="text-2xl font-bold text-blue-600">₦500</div>
                  <div className="text-sm text-blue-600">per update request</div>
                </div>
                <p className="text-blue-600 text-sm">This covers our time and ensures quality service.</p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-xl">
              <h4 className="font-bold text-purple-800 mb-2">🎨 Major Changes</h4>
              <p className="text-purple-700">
                Major redesigns or layout overhauls may require a separate quote. We'll discuss this with you before starting any major work.
              </p>
            </div>
          </div>

          {/* Content Responsibility */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="terms-number mr-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">6</span>
              Content Responsibility
            </h2>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl mb-6">
              <h4 className="font-bold text-gray-900 mb-3">📝 Your Content, Your Responsibility</h4>
              <p className="text-gray-700 leading-relaxed">
                You are solely responsible for the accuracy and truthfulness of the information submitted in your CV. MyCV.i.ng will not be liable for any inaccuracies, outdated information, or consequences resulting from your submitted content.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-green-200 p-6 rounded-xl">
                <h4 className="font-bold text-green-800 mb-3">✅ What We Do</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Format your content professionally</li>
                  <li>• Create an attractive design</li>
                  <li>• Ensure mobile compatibility</li>
                  <li>• Host your website securely</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-red-200 p-6 rounded-xl">
                <h4 className="font-bold text-red-800 mb-3">❌ What We Don't Do</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Verify information accuracy</li>
                  <li>• Check employment history</li>
                  <li>• Validate qualifications</li>
                  <li>• Edit content for truthfulness</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-6 rounded-r-xl">
              <h4 className="font-bold text-yellow-800 mb-2">⚖️ Legal Note</h4>
              <p className="text-yellow-700">
                Please ensure all information in your CV is accurate and truthful. False information could have legal or professional consequences that are your responsibility, not ours.
              </p>
            </div>
          </div>

          {/* Website Hosting and Access */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="terms-number mr-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">7</span>
              Website Hosting and Access
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Your Website Domain
                </h4>
                <p className="text-blue-700 mb-3">Your CV website will be hosted under the domain <strong>www.mycv.i.ng</strong></p>
                <div className="bg-blue-100 p-3 rounded">
                  <p className="text-blue-600 text-sm">
                    <strong>URL Format:</strong> www.yourname.mycv.i.ng (based on availability)
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-bold text-green-800 mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  URL Flexibility
                </h4>
                <p className="text-green-700">We reserve the right to adjust the URL format if a name is already taken. We'll always inform you of the final URL.</p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl">
                <h4 className="font-bold text-red-800 mb-3 flex items-center">
                  <XCircle className="w-5 h-5 mr-2" />
                  Content Standards
                </h4>
                <p className="text-red-700">MyCV.i.ng reserves the right to remove or suspend any website that contains inappropriate, false, or harmful content.</p>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="terms-number mr-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">8</span>
              Intellectual Property
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                <h4 className="font-bold text-green-800 mb-3">✅ Your Content Rights</h4>
                <p className="text-green-700 mb-3">The content you submit remains your property. This includes:</p>
                <ul className="text-green-600 space-y-1 text-sm">
                  <li>• Your CV information</li>
                  <li>• Personal details</li>
                  <li>• Work experience</li>
                  <li>• Educational background</li>
                  <li>• Any photos you provide</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-800 mb-3">🏢 Our Platform Rights</h4>
                <p className="text-blue-700 mb-3">The design and platform structure remain our property:</p>
                <ul className="text-blue-600 space-y-1 text-sm">
                  <li>• Website templates and designs</li>
                  <li>• MyCV.i.ng platform code</li>
                  <li>• Hosting infrastructure</li>
                  <li>• Brand elements and logos</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mt-6 rounded-r-xl">
              <h4 className="font-bold text-purple-800 mb-2">🚫 Usage Restrictions</h4>
              <p className="text-purple-700">
                The design and platform structure of MyCV.i.ng cannot be duplicated, redistributed, or used to create competing services.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="terms-number mr-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">9</span>
              Changes to Terms
            </h2>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-3">📋 Keeping Terms Current</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update these Terms and Conditions from time to time to reflect changes in our services, legal requirements, or business practices. All changes will be posted on this page with a "last updated" date.
              </p>
              <div className="bg-white p-4 rounded-lg border-l-4 border-orange-400">
                <p className="text-gray-700 text-sm">
                  <strong>We'll notify you:</strong> If we make significant changes that affect your rights or obligations, we'll send you an email notification before the changes take effect.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Questions About These Terms?</h2>
          <p className="text-xl mb-12 text-green-100">We're here to help clarify anything about our terms and conditions!</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-green-100 mb-4">Quick questions about terms</p>
              <button onClick={() => window.open('https://wa.me/2348012345678?text=Hi! I have a question about your Terms and Conditions.', '_blank')} className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Chat Now
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-green-100 mb-4">Detailed legal questions</p>
              <button onClick={() => window.location.href='mailto:info@mycv.i.ng?subject=Terms and Conditions Question'} className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
            <h4 className="text-xl font-bold mb-4">📋 Fair and Transparent</h4>
            <p className="text-green-100">
              We believe in clear, fair terms that protect both you and our business.
              If anything isn't clear, please don't hesitate to ask for clarification.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsPage;