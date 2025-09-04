import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  AddressBook, Phone, Mail, Globe, MapPin, Share2, Linkedin, Twitter, Instagram, Facebook,
  Download, UserPlus, Printer, Star, Briefcase, GraduationCap, CheckCircle, CreditCard, University, Smartphone, QrCode
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { showSuccess, showError } from '../utils/toast';

const MeProPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentModalContent, setPaymentModalContent] = useState<{ title: string; content: React.ReactNode } | null>(null);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [galleryModalContent, setGalleryModalContent] = useState<{ title: string; description: string; details: string[]; icon: React.ReactNode; color: string } | null>(null);

  const makeCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const sendEmail = (email: string) => {
    window.location.href = `mailto:${email}?subject=Hello from your Digital Business Card`;
  };

  const openWebsite = (url: string) => {
    window.open(url, '_blank');
  };

  const openWhatsApp = (phoneNumber: string, message: string = "Hello! I'm interested in connecting with you. I found your digital business card very impressive!") => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const downloadCV = () => {
    const cvContent = `ADEBAYO OKAFOR - SENIOR BUSINESS DEVELOPMENT MANAGER

CONTACT INFORMATION
Phone: +234 708 368 2007
Email: info@mycv.i.ng
Website: mycv.i.ng/me-pro
Location: Ilorin, Nigeria

PROFESSIONAL SUMMARY
Senior Business Development Manager with 8+ years of experience driving business growth and strategic partnerships across West Africa. Expertise in corporate development and client relationship management.

SKILLS
• Business Development (95%)
• Strategic Planning (90%)
• Client Relations (92%)
• Financial Analysis (88%)
• Salesforce CRM, Market Analysis
• Negotiation, Project Management
• Team Leadership, Partnership Development

EXPERIENCE
Senior Business Development Manager | Sterling Bank Plc | 2020 - Present
• Managed key client accounts worth over ₦2.5B
• Achieved 135% of annual revenue targets
• Led cross-functional teams of 15+ professionals

Business Development Associate | Access Bank Plc | 2018 - 2020
• Generated ₦800M in new business revenue
• Maintained 98% client retention rate
• Developed 25+ strategic partnerships

Relationship Manager | First Bank Nigeria | 2016 - 2018
• Managed portfolio of 50+ high-value clients
• Exceeded targets by 120% consistently
• Implemented new client onboarding processes

EDUCATION
MBA - Business Administration | Lagos Business School | 2014 - 2016
B.Sc Economics | University of Lagos | 2010 - 2014
Professional Certification | Chartered Institute of Bankers Nigeria | 2019`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Adebayo_Okafor_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    showSuccess('CV downloaded successfully!');
  };

  const saveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Adebayo Okafor
ORG:Sterling Bank Plc
TITLE:Senior Business Development Manager
TEL:+2347083682007
EMAIL:info@mycv.i.ng
URL:https://mycv.i.ng/me-pro
ADR:;;Ilorin;;Nigeria
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Adebayo_Okafor_Contact.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    showSuccess('Contact saved successfully!');
  };

  const shareCard = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Adebayo Okafor - Digital Business Card',
        text: 'Check out my digital business card!',
        url: window.location.href
      })
        .then(() => showSuccess('Card shared successfully!'))
        .catch((error) => showError('Failed to share card: ' + error.message));
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => showSuccess('Card URL copied to clipboard!'))
        .catch(() => showError('Failed to copy URL. Please try manually.'));
    }
  };

  const switchTab = (tabName: string) => {
    setActiveTab(tabName);
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

  const galleryItems = {
    'project1': {
      title: 'Market Expansion Project',
      description: 'Led strategic expansion into 3 new markets across West Africa, achieving 40% revenue growth within 18 months.',
      details: [
        '• Conducted comprehensive market research and analysis',
        '• Developed go-to-market strategies for each region',
        '• Built local partnerships and distribution networks',
        '• Achieved ₦800M in new revenue streams',
        '• Managed cross-functional team of 15 professionals'
      ],
      icon: <Briefcase className="w-10 h-10 text-white" />,
      color: 'from-blue-400 to-purple-500'
    },
    'project2': {
      title: 'Partnership Development',
      description: 'Secured 15+ strategic partnerships worth ₦1.2B in total value, expanding business reach and capabilities.',
      details: [
        '• Identified and evaluated potential strategic partners',
        '• Negotiated complex partnership agreements',
        '• Established joint venture frameworks',
        '• Created partnership performance metrics',
        '• Maintained ongoing relationship management'
      ],
      icon: <Share2 className="w-10 h-10 text-white" />,
      color: 'from-green-400 to-blue-500'
    },
    'project3': {
      title: 'Team Leadership Excellence',
      description: 'Built and managed high-performing team of 12 professionals, achieving 95% employee satisfaction.',
      details: [
        '• Recruited and onboarded top talent',
        '• Implemented performance management systems',
        '• Conducted regular training and development programs',
        '• Achieved 25% improvement in team productivity',
        '• Maintained 98% employee retention rate'
      ],
      icon: <UserPlus className="w-10 h-10 text-white" />,
      color: 'from-orange-400 to-red-500'
    },
    'cert1': {
      title: 'ACIB Professional Certification',
      description: 'Associate Member of the Chartered Institute of Bankers Nigeria - comprehensive banking expertise.',
      details: [
        '• Completed rigorous banking operations curriculum',
        '• Specialized in risk management and compliance',
        '• Certified in financial services regulation',
        '• Ongoing professional development requirements',
        '• Member of professional banking community'
      ],
      icon: <GraduationCap className="w-10 h-10 text-white" />,
      color: 'from-yellow-400 to-orange-500'
    },
    'award1': {
      title: 'Excellence Award 2023',
      description: 'Outstanding Performance in Business Development - Sterling Bank recognition for exceptional results.',
      details: [
        '• Exceeded annual targets by 150%',
        '• Generated ₦2.1B in new business revenue',
        '• Maintained 98% client satisfaction rating',
        '• Led innovative business development initiatives',
        '• Recognized among top 5% of performers company-wide'
      ],
      icon: <Star className="w-10 h-10 text-white" />,
      color: 'from-purple-400 to-pink-500'
    },
    'speaking1': {
      title: 'Industry Speaking Engagement',
      description: 'Keynote speaker on "Digital Banking Transformation" at FinTech Lagos 2023 conference.',
      details: [
        '• Presented to 500+ industry professionals',
        '• Shared insights on digital transformation strategies',
        '• Discussed emerging fintech trends in Africa',
        '• Participated in expert panel discussions',
        '• Featured in industry publications'
      ],
      icon: <Phone className="w-10 h-10 text-white" />, // Using Phone for microphone
      color: 'from-teal-400 to-blue-500'
    }
  };

  const openGalleryModal = (itemId: keyof typeof galleryItems) => {
    const item = galleryItems[itemId];
    if (!item) return;

    setGalleryModalContent({
      title: item.title,
      description: item.description,
      details: item.details,
      icon: item.icon,
      color: item.color
    });
    setIsGalleryModalOpen(true);
  };

  const requestCustomGallery = () => {
    openWhatsApp('+2347083682007', "Hi! I'm interested in adding a custom portfolio gallery to my MyCv.i.ng profile. Can you help me set this up with my own projects and achievements?");
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetWidth = entry.target.getAttribute('data-target-width');
          if (targetWidth) {
            (entry.target as HTMLElement).style.width = targetWidth;
          }
        } else {
          // Optionally reset width when not intersecting if you want re-animation on scroll back
          // (entry.target as HTMLElement).style.width = '0%';
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    skillBarsRef.current.forEach(bar => {
      if (bar) {
        observer.observe(bar);
      }
    });

    return () => {
      skillBarsRef.current.forEach(bar => {
        if (bar) {
          observer.unobserve(bar);
        }
      });
    };
  }, [activeTab]); // Re-run effect if activeTab changes to re-observe new bars

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4A90E2] to-[#2D2D2D] p-4 flex flex-col">
      <Header />

      {/* Main Card Container */}
      <div className="max-w-4xl mx-auto my-8 flex-grow">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white rounded-2xl px-6 py-3 shadow-lg">
              <h1 className="text-2xl font-bold text-[#4A90E2]">MyCv.i.ng</h1>
              <p className="text-xs text-gray-600">Professional CV Platform</p>
            </div>
          </div>
          <p className="text-white/80">Hosted at: mycv.i.ng/me-pro • Professional • Interactive • Modern</p>
        </div>

        {/* Business Card */}
        <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Section */}
            <div className="md:col-span-1 text-center">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto">
                  AO
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse"></div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-2">Adebayo Okafor</h2>
              <p className="text-lg font-medium mb-4 text-[#4A90E2]">Senior Business Development Manager</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Driving business growth and strategic partnerships across West Africa. 8+ years experience in corporate development and client relationship management.
              </p>

              {/* QR Code */}
              <div className="mt-6">
                <div className="w-20 h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjcwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjAiIHk9IjcwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI4MCIgeT0iMTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTAiIHk9IjgwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjQwIiB5PSI0MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K')] bg-no-repeat bg-center bg-contain mx-auto mb-2"></div>
                <p className="text-xs text-gray-500">Scan to save contact</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="md:col-span-1 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <AddressBook className="w-5 h-5 mr-2 text-[#4A90E2]" />
                Contact Info
              </h3>

              <div className="p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer" onClick={() => makeCall('+2347083682007')}>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-500" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-800">+234 708 368 2007</p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer" onClick={() => openWhatsApp('+2347083682007')}>
                <div className="flex items-center">
                  <Smartphone className="w-5 h-5 text-green-600" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="font-medium text-gray-800">+234 708 368 2007</p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer" onClick={() => sendEmail('info@mycv.i.ng')}>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-800">info@mycv.i.ng</p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer" onClick={() => openWebsite('https://mycv.i.ng')}>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-purple-500" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Professional CV</p>
                    <p className="font-medium text-gray-800">mycv.i.ng</p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-800">Ilorin, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Actions */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Share2 className="w-5 h-5 mr-2 text-[#4A90E2]" />
                Connect & Actions
              </h3>

              {/* Social Media Links */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <a href="https://linkedin.com/company/lemmaiot" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-lg text-center hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                  <Linkedin className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs">LinkedIn</p>
                </a>

                <a href="https://twitter.com/adebayookafor" target="_blank" rel="noopener noreferrer" className="bg-sky-500 text-white p-3 rounded-lg text-center hover:bg-sky-600 transition-all duration-300 hover:scale-105">
                  <Twitter className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs">Twitter</p>
                </a>

                <a href="https://instagram.com/lemmaiot/feed" target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white p-3 rounded-lg text-center hover:bg-pink-600 transition-all duration-300 hover:scale-105">
                  <Instagram className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs">Instagram</p>
                </a>

                <a href="https://facebook.com/Lemmaiot" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white p-3 rounded-lg text-center hover:bg-blue-900 transition-all duration-300 hover:scale-105">
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
          </div>
        </div>

        {/* Professional Information Tabs */}
        <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 mb-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-gray-200 mb-6">
            <button
              onClick={() => switchTab('skills')}
              className={`px-4 py-3 font-medium text-sm border-b-2 transition-all ${activeTab === 'skills' ? 'text-[#4A90E2] border-[#4A90E2]' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
            >
              <Star className="w-4 h-4 mr-2 inline-block" />Skills
            </button>
            <button
              onClick={() => switchTab('experience')}
              className={`px-4 py-3 font-medium text-sm border-b-2 transition-all ${activeTab === 'experience' ? 'text-[#4A90E2] border-[#4A90E2]' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
            >
              <Briefcase className="w-4 h-4 mr-2 inline-block" />Experience
            </button>
            <button
              onClick={() => switchTab('education')}
              className={`px-4 py-3 font-medium text-sm border-b-2 transition-all ${activeTab === 'education' ? 'text-[#4A90E2] border-[#4A90E2]' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
            >
              <GraduationCap className="w-4 h-4 mr-2 inline-block" />Education
            </button>
            <button
              onClick={() => switchTab('gallery')}
              className={`px-4 py-3 font-medium text-sm border-b-2 transition-all ${activeTab === 'gallery' ? 'text-[#4A90E2] border-[#4A90E2]' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
            >
              <QrCode className="w-4 h-4 mr-2 inline-block" />Portfolio
            </button>
          </div>

          {/* Skills Tab Content */}
          {activeTab === 'skills' && (
            <div id="skills-content" className="tab-content animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Business Development</span>
                      <span className="text-sm text-gray-500">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        ref={el => skillBarsRef.current[0] = el}
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ background: '#4A90E2', width: '0%' }}
                        data-target-width="95%"
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Strategic Planning</span>
                      <span className="text-sm text-gray-500">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        ref={el => skillBarsRef.current[1] = el}
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ background: '#FF968D', width: '0%' }}
                        data-target-width="90%"
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Client Relations</span>
                      <span className="text-sm text-gray-500">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        ref={el => skillBarsRef.current[2] = el}
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ background: '#4A90E2', width: '0%' }}
                        data-target-width="92%"
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Financial Analysis</span>
                      <span className="text-sm text-gray-500">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        ref={el => skillBarsRef.current[3] = el}
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ background: '#FF968D', width: '0%' }}
                        data-target-width="88%"
                      ></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Core Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-sm text-white bg-[#4A90E2]">Salesforce CRM</span>
                    <span className="px-3 py-1 rounded-full text-sm text-white bg-[#FF968D]">Market Analysis</span>
                    <span className="px-3 py-1 rounded-full text-sm text-white bg-[#4A90E2]">Negotiation</span>
                    <span className="px-3 py-1 rounded-full text-sm text-white bg-[#FF968D]">Project Management</span>
                    <span className="px-3 py-1 rounded-full text-sm text-white bg-[#4A90E2]">Team Leadership</span>
                    <span className="px-3 py-1 rounded-full text-sm text-white bg-[#FF968D]">Financial Planning</span>
                    <span className="px-3 py-1 rounded-full text-sm text-white bg-[#4A90E2]">Partnership Development</span>
                    <span className="px-3 py-1 rounded-full text-sm text-white bg-[#FF968D]">Risk Management</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Experience Tab Content */}
          {activeTab === 'experience' && (
            <div id="experience-content" className="tab-content animate-fade-in">
              <div className="space-y-6">
                <div className="border-l-4 pl-6 border-[#4A90E2]">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">Senior Business Development Manager</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2020 - Present</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">Sterling Bank Plc</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">Leading strategic partnerships across West Africa, managing a portfolio worth ₦2.5B, and driving 35% revenue growth through innovative business solutions and client relationship management.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Managed key client accounts worth over ₦2.5B</li>
                    <li>• Achieved 135% of annual revenue targets</li>
                    <li>• Led cross-functional teams of 15+ professionals</li>
                  </ul>
                </div>

                <div className="border-l-4 pl-6 border-[#FF968D]">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">Business Development Associate</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2018 - 2020</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">Access Bank Plc</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">Developed new market opportunities, managed key client accounts, and collaborated with cross-functional teams to deliver comprehensive financial solutions to corporate clients.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Generated ₦800M in new business revenue</li>
                    <li>• Maintained 98% client retention rate</li>
                    <li>• Developed 25+ strategic partnerships</li>
                  </ul>
                </div>

                <div className="border-l-4 pl-6 border-[#4A90E2]">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">Relationship Manager</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2016 - 2018</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">First Bank Nigeria</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">Managed high-net-worth client portfolios, provided financial advisory services, and achieved 120% of annual targets through strategic client engagement and service excellence.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Managed portfolio of 50+ high-value clients</li>
                    <li>• Exceeded targets by 120% consistently</li>
                    <li>• Implemented new client onboarding processes</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Education Tab Content */}
          {activeTab === 'education' && (
            <div id="education-content" className="tab-content animate-fade-in">
              <div className="space-y-6">
                <div className="border-l-4 pl-6 border-[#4A90E2]">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">MBA - Business Administration</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2014 - 2016</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">Lagos Business School</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Specialized in Strategic Management and Corporate Finance. Graduated with Distinction, focusing on emerging market business strategies and financial analysis.</p>
                </div>

                <div className="border-l-4 pl-6 border-[#FF968D]">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">B.Sc Economics</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2010 - 2014</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">University of Lagos</p>
                  <p className="text-gray-600 text-sm leading-relaxed">First Class Honours in Economics with focus on Development Economics and Financial Markets. Active in student leadership and debate society.</p>
                </div>

                <div className="border-l-4 pl-6 border-[#4A90E2]">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">Professional Certification</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">2019</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">Chartered Institute of Bankers Nigeria</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Associate Member (ACIB) - Comprehensive certification in banking operations, risk management, and financial services regulation.</p>
                </div>
              </div>
            </div>
          )}

          {/* Gallery Tab Content */}
          {activeTab === 'gallery' && (
            <div id="gallery-content" className="tab-content animate-fade-in">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Professional Portfolio & Achievements</h4>
                <p className="text-gray-600 text-sm mb-6">Showcasing key projects, certifications, and professional milestones</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Project 1 */}
                <div className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer" onClick={() => openGalleryModal('project1')}>
                  <div className={`w-full h-32 bg-gradient-to-br ${galleryItems.project1.color} rounded-lg mb-4 flex items-center justify-center`}>
                    {galleryItems.project1.icon}
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-2">Market Expansion Project</h5>
                  <p className="text-sm text-gray-600">Led strategic expansion into 3 new markets, achieving 40% revenue growth</p>
                  <div className="mt-3">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Strategy</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full ml-1">Growth</span>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer" onClick={() => openGalleryModal('project2')}>
                  <div className={`w-full h-32 bg-gradient-to-br ${galleryItems.project2.color} rounded-lg mb-4 flex items-center justify-center`}>
                    {galleryItems.project2.icon}
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-2">Partnership Development</h5>
                  <p className="text-sm text-gray-600">Secured 15+ strategic partnerships worth ₦1.2B in total value</p>
                  <div className="mt-3">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Partnerships</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full ml-1">Negotiation</span>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer" onClick={() => openGalleryModal('project3')}>
                  <div className={`w-full h-32 bg-gradient-to-br ${galleryItems.project3.color} rounded-lg mb-4 flex items-center justify-center`}>
                    {galleryItems.project3.icon}
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-2">Team Leadership</h5>
                  <p className="text-sm text-gray-600">Built and managed high-performing team of 12 professionals</p>
                  <div className="mt-3">
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Leadership</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full ml-1">Management</span>
                  </div>
                </div>

                {/* Certificate 1 */}
                <div className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer" onClick={() => openGalleryModal('cert1')}>
                  <div className={`w-full h-32 bg-gradient-to-br ${galleryItems.cert1.color} rounded-lg mb-4 flex items-center justify-center`}>
                    {galleryItems.cert1.icon}
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-2">ACIB Certification</h5>
                  <p className="text-sm text-gray-600">Associate Member, Chartered Institute of Bankers Nigeria</p>
                  <div className="mt-3">
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Banking</span>
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full ml-1">Certified</span>
                  </div>
                </div>

                {/* Award */}
                <div className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer" onClick={() => openGalleryModal('award1')}>
                  <div className={`w-full h-32 bg-gradient-to-br ${galleryItems.award1.color} rounded-lg mb-4 flex items-center justify-center`}>
                    {galleryItems.award1.icon}
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-2">Excellence Award 2023</h5>
                  <p className="text-sm text-gray-600">Outstanding Performance in Business Development - Sterling Bank</p>
                  <div className="mt-3">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Award</span>
                    <span className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full ml-1">Excellence</span>
                  </div>
                </div>

                {/* Speaking Engagement */}
                <div className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer" onClick={() => openGalleryModal('speaking1')}>
                  <div className={`w-full h-32 bg-gradient-to-br ${galleryItems.speaking1.color} rounded-lg mb-4 flex items-center justify-center`}>
                    {galleryItems.speaking1.icon}
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-2">Industry Speaker</h5>
                  <p className="text-sm text-gray-600">Keynote on "Digital Banking Transformation" at FinTech Lagos 2023</p>
                  <div className="mt-3">
                    <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">Speaking</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full ml-1">FinTech</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 mb-4">💡 <strong>Pro Tip:</strong> Click on any item to view detailed information</p>
                <button onClick={requestCustomGallery} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all">
                  <PlusCircle className="w-5 h-5 mr-2" />Request Custom Gallery Setup
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Payment Options Section */}
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

        {/* Quick Actions Footer */}
        <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Ready to Connect?</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => sendEmail('info@mycv.i.ng')} className="px-6 py-2 rounded-full text-white font-medium transition-all hover:scale-105 bg-[#4A90E2] hover:bg-[#3A7BC8]">
              <Mail className="w-5 h-5 mr-2 inline-block" />Send Message
            </button>
            <button onClick={() => openWhatsApp('+2347083682007')} className="px-6 py-2 rounded-full text-white font-medium transition-all hover:scale-105 bg-[#25D366]">
              <Smartphone className="w-5 h-5 mr-2 inline-block" />WhatsApp Me
            </button>
            <button onClick={() => makeCall('+2347083682007')} className="px-6 py-2 rounded-full text-white font-medium transition-all hover:scale-105 bg-[#FF968D]">
              <Phone className="w-5 h-5 mr-2 inline-block" />Call Now
            </button>
            <button onClick={() => openWebsite('https://mycv.i.ng/me-pro')} className="px-6 py-2 rounded-full bg-gray-600 text-white font-medium hover:bg-gray-700 transition-all hover:scale-105">
              <Globe className="w-5 h-5 mr-2 inline-block" />View Full CV
            </button>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {isPaymentModalOpen && paymentModalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">{paymentModalContent.title}</h3>
              <button onClick={() => setIsPaymentModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <XCircle className="w-6 h-6" />
              </button>
            </div>
            {paymentModalContent.content}
            <div className="mt-6 text-center">
              <button onClick={() => openWhatsApp('+2347083682007')} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                <Smartphone className="w-5 h-5 mr-2" />Contact on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Modal */}
      {isGalleryModalOpen && galleryModalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${galleryModalContent.color} rounded-xl flex items-center justify-center mr-4`}>
                  {galleryModalContent.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{galleryModalContent.title}</h3>
                  <p className="text-gray-600">{galleryModalContent.description}</p>
                </div>
              </div>
              <button onClick={() => setIsGalleryModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">Key Highlights:</h4>
              <div className="space-y-2">
                {galleryModalContent.details.map((detail, index) => (
                  <p key={index} className="text-gray-700 text-sm">{detail}</p>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-3">
              <button onClick={() => openWhatsApp('+2347083682007', `Hi! I'm interested in discussing your project: ${galleryModalContent.title}.`)} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                <Smartphone className="w-5 h-5 mr-2" />Discuss This Project
              </button>
              <button onClick={() => sendEmail('info@mycv.i.ng')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                <Mail className="w-5 h-5 mr-2" />Request Details
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default MeProPage;