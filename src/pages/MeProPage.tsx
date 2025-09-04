import React, { useState, useEffect } from 'react';
import {
  Briefcase, GraduationCap, Star, Share2, UserPlus, Phone, Mail, Globe, PlusCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { showSuccess, showError } from '../utils/toast';

// Import new modular components
import MeProProfileCard from '../components/MeProProfileCard';
import MeProContactInfo from '../components/MeProContactInfo';
import MeProSocialActions from '../components/MeProSocialActions';
import MeProTabs from '../components/MeProTabs';
import MeProPaymentOptions from '../components/MeProPaymentOptions';
import MeProPaymentModal from '../components/MeProPaymentModal';
import MeProGalleryModal from '../components/MeProGalleryModal';

const MeProPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentModalContent, setPaymentModalContent] = useState<{ title: string; content: React.ReactNode } | null>(null);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [galleryModalContent, setGalleryModalContent] = useState<{ title: string; description: string; details: string[]; icon: React.ReactNode; color: string } | null>(null);

  // Data for the page
  const profileData = {
    name: 'Adebayo Okafor',
    title: 'Senior Business Development Manager',
    summary: 'Driving business growth and strategic partnerships across West Africa. 8+ years experience in corporate development and client relationship management.',
    initials: 'AO',
  };

  const contactData = {
    phone: '+2347083682007',
    whatsapp: '+2347083682007',
    email: 'info@mycv.i.ng',
    website: 'mycv.i.ng',
    location: 'Ilorin, Nigeria',
  };

  const socialLinks = {
    linkedin: 'https://linkedin.com/company/lemmaiot',
    twitter: 'https://twitter.com/adebayookafor',
    instagram: 'https://instagram.com/lemmaiot/feed',
    facebook: 'https://facebook.com/Lemmaiot',
  };

  const skillsData = {
    skills: [
      { name: 'Business Development', percentage: 95, color: '#4A90E2' },
      { name: 'Strategic Planning', percentage: 90, color: '#FF968D' },
      { name: 'Client Relations', percentage: 92, color: '#4A90E2' },
      { name: 'Financial Analysis', percentage: 88, color: '#FF968D' },
    ],
    coreCompetencies: [
      { name: 'Salesforce CRM', color: '#4A90E2' },
      { name: 'Market Analysis', color: '#FF968D' },
      { name: 'Negotiation', color: '#4A90E2' },
      { name: 'Project Management', color: '#FF968D' },
      { name: 'Team Leadership', color: '#4A90E2' },
      { name: 'Financial Planning', color: '#FF968D' },
      { name: 'Partnership Development', color: '#4A90E2' },
      { name: 'Risk Management', color: '#FF968D' },
    ],
  };

  const experienceData = [
    {
      title: 'Senior Business Development Manager',
      company: 'Sterling Bank Plc',
      years: '2020 - Present',
      description: 'Leading strategic partnerships across West Africa, managing a portfolio worth ₦2.5B, and driving 35% revenue growth through innovative business solutions and client relationship management.',
      highlights: [
        'Managed key client accounts worth over ₦2.5B',
        'Achieved 135% of annual revenue targets',
        'Led cross-functional teams of 15+ professionals',
      ],
      color: '#4A90E2',
    },
    {
      title: 'Business Development Associate',
      company: 'Access Bank Plc',
      years: '2018 - 2020',
      description: 'Developed new market opportunities, managed key client accounts, and collaborated with cross-functional teams to deliver comprehensive financial solutions to corporate clients.',
      highlights: [
        'Generated ₦800M in new business revenue',
        'Maintained 98% client retention rate',
        'Developed 25+ strategic partnerships',
      ],
      color: '#FF968D',
    },
    {
      title: 'Relationship Manager',
      company: 'First Bank Nigeria',
      years: '2016 - 2018',
      description: 'Managed high-net-worth client portfolios, provided financial advisory services, and achieved 120% of annual targets through strategic client engagement and service excellence.',
      highlights: [
        'Managed portfolio of 50+ high-value clients',
        'Exceeded targets by 120% consistently',
        'Implemented new client onboarding processes',
      ],
      color: '#4A90E2',
    },
  ];

  const educationData = [
    {
      degree: 'MBA - Business Administration',
      institution: 'Lagos Business School',
      years: '2014 - 2016',
      description: 'Specialized in Strategic Management and Corporate Finance. Graduated with Distinction, focusing on emerging market business strategies and financial analysis.',
      color: '#4A90E2',
    },
    {
      degree: 'B.Sc Economics',
      institution: 'University of Lagos',
      years: '2010 - 2014',
      description: 'First Class Honours in Economics with focus on Development Economics and Financial Markets. Active in student leadership and debate society.',
      color: '#FF968D',
    },
    {
      degree: 'Professional Certification',
      institution: 'Chartered Institute of Bankers Nigeria',
      years: '2019',
      description: 'Associate Member (ACIB) - Comprehensive certification in banking operations, risk management, and financial services regulation.',
      color: '#4A90E2',
    },
  ];

  const portfolioData = {
    'project1': {
      id: 'project1',
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
      color: 'from-blue-400 to-purple-500',
      tags: [{ name: 'Strategy', bgColor: 'blue-100', textColor: 'blue-800' }, { name: 'Growth', bgColor: 'green-100', textColor: 'green-800' }]
    },
    'project2': {
      id: 'project2',
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
      color: 'from-green-400 to-blue-500',
      tags: [{ name: 'Partnerships', bgColor: 'purple-100', textColor: 'purple-800' }, { name: 'Negotiation', bgColor: 'yellow-100', textColor: 'yellow-800' }]
    },
    'project3': {
      id: 'project3',
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
      color: 'from-orange-400 to-red-500',
      tags: [{ name: 'Leadership', bgColor: 'red-100', textColor: 'red-800' }, { name: 'Management', bgColor: 'blue-100', textColor: 'blue-800' }]
    },
    'cert1': {
      id: 'cert1',
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
      color: 'from-yellow-400 to-orange-500',
      tags: [{ name: 'Banking', bgColor: 'yellow-100', textColor: 'yellow-800' }, { name: 'Certified', bgColor: 'orange-100', textColor: 'orange-800' }]
    },
    'award1': {
      id: 'award1',
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
      color: 'from-purple-400 to-pink-500',
      tags: [{ name: 'Award', bgColor: 'purple-100', textColor: 'purple-800' }, { name: 'Excellence', bgColor: 'pink-100', textColor: 'pink-800' }]
    },
    'speaking1': {
      id: 'speaking1',
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
      color: 'from-teal-400 to-blue-500',
      tags: [{ name: 'Speaking', bgColor: 'teal-100', textColor: 'teal-800' }, { name: 'FinTech', bgColor: 'blue-100', textColor: 'blue-800' }]
    }
  };

  // Action functions (moved from original MeProPage)
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
Phone: ${contactData.phone}
Email: ${contactData.email}
Website: https://mycv.i.ng/me-pro
Location: ${contactData.location}

PROFESSIONAL SUMMARY
${profileData.summary}

SKILLS
${skillsData.skills.map(s => `• ${s.name} (${s.percentage}%)`).join('\n')}
${skillsData.coreCompetencies.map(c => `• ${c.name}`).join('\n')}

EXPERIENCE
${experienceData.map(e => `${e.title} | ${e.company} | ${e.years}\n${e.description}\n${e.highlights.map(h => `  ${h}`).join('\n')}`).join('\n\n')}

EDUCATION
${educationData.map(e => `${e.degree} | ${e.institution} | ${e.years}\n${e.description}`).join('\n\n')}
`;

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
FN:${profileData.name}
ORG:Sterling Bank Plc
TITLE:${profileData.title}
TEL:${contactData.phone}
EMAIL:${contactData.email}
URL:https://mycv.i.ng/me-pro
ADR:;;${contactData.location};;Nigeria
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
        title: `${profileData.name} - Digital Business Card`,
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

  const openGalleryModal = (itemId: string) => {
    const item = portfolioData[itemId];
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
            <MeProProfileCard
              name={profileData.name}
              title={profileData.title}
              summary={profileData.summary}
              initials={profileData.initials}
            />

            <MeProContactInfo
              phone={contactData.phone}
              whatsapp={contactData.whatsapp}
              email={contactData.email}
              website={contactData.website}
              location={contactData.location}
              makeCall={makeCall}
              sendEmail={sendEmail}
              openWebsite={openWebsite}
              openWhatsApp={openWhatsApp}
            />

            <MeProSocialActions
              linkedinUrl={socialLinks.linkedin}
              twitterUrl={socialLinks.twitter}
              instagramUrl={socialLinks.instagram}
              facebookUrl={socialLinks.facebook}
              downloadCV={downloadCV}
              saveContact={saveContact}
              shareCard={shareCard}
              showPaymentModal={showPaymentModal}
            />
          </div>
        </div>

        {/* Professional Information Tabs */}
        <MeProTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          skillsData={skillsData}
          experienceData={experienceData}
          educationData={educationData}
          portfolioData={portfolioData}
          openGalleryModal={openGalleryModal}
          requestCustomGallery={requestCustomGallery}
        />

        {/* Payment Options Section */}
        <MeProPaymentOptions showPaymentModal={showPaymentModal} />

        {/* Quick Actions Footer */}
        <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Ready to Connect?</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => sendEmail(contactData.email)} className="px-6 py-2 rounded-full text-white font-medium transition-all hover:scale-105 bg-[#4A90E2] hover:bg-[#3A7BC8]">
              <Mail className="w-5 h-5 mr-2 inline-block" />Send Message
            </button>
            <button onClick={() => openWhatsApp(contactData.whatsapp)} className="px-6 py-2 rounded-full text-white font-medium transition-all hover:scale-105 bg-[#25D366]">
              <Phone className="w-5 h-5 mr-2 inline-block" />WhatsApp Me
            </button>
            <button onClick={() => makeCall(contactData.phone)} className="px-6 py-2 rounded-full text-white font-medium transition-all hover:scale-105 bg-[#FF968D]">
              <Phone className="w-5 h-5 mr-2 inline-block" />Call Now
            </button>
            <button onClick={() => openWebsite(`https://${contactData.website}/me-pro`)} className="px-6 py-2 rounded-full bg-gray-600 text-white font-medium hover:bg-gray-700 transition-all hover:scale-105">
              <Globe className="w-5 h-5 mr-2 inline-block" />View Full CV
            </button>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <MeProPaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        title={paymentModalContent?.title || ''}
        content={paymentModalContent?.content || null}
        openWhatsApp={openWhatsApp}
      />

      {/* Gallery Modal */}
      <MeProGalleryModal
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        content={galleryModalContent}
        openWhatsApp={openWhatsApp}
        sendEmail={sendEmail}
      />

      <Footer />
    </div>
  );
};

export default MeProPage;