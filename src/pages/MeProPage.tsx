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

// Import static data
import {
  profileData,
  contactData,
  socialLinks,
  skillsData,
  experienceData,
  educationData,
  portfolioData
} from '../data/meProData';

// Import custom hooks
import useMeProPaymentModal from '../hooks/useMeProPaymentModal';
import useMeProActions from '../hooks/useMeProActions';

const MeProPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [galleryModalContent, setGalleryModalContent] = useState<{ title: string; description: string; details: string[]; icon: React.ReactNode; color: string } | null>(null);

  // Use the custom payment modal hook
  const {
    isPaymentModalOpen,
    paymentModalContent,
    showPaymentModal,
    closePaymentModal,
    openWhatsApp,
  } = useMeProPaymentModal();

  // Use the custom actions hook
  const {
    makeCall,
    sendEmail,
    openWebsite,
    downloadCV,
    saveContact,
    shareCard,
    openGalleryModal,
    requestCustomGallery,
  } = useMeProActions({
    openWhatsApp,
    sendEmail: (email) => { window.location.href = `mailto:${email}?subject=Hello from your Digital Business Card`; },
    setIsGalleryModalOpen,
    setGalleryModalContent,
  });

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
        onClose={closePaymentModal}
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