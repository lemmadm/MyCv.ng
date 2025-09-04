import React from 'react';
import { showSuccess, showError } from '../utils/toast';
import {
  profileData,
  contactData,
  skillsData,
  experienceData,
  educationData,
  portfolioData
} from '../data/meProData';

interface UseMeProActionsProps {
  openWhatsApp: (number: string, message?: string) => void;
  sendEmail: (email: string) => void;
  setIsGalleryModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setGalleryModalContent: React.Dispatch<React.SetStateAction<{ title: string; description: string; details: string[]; icon: React.ReactNode; color: string } | null>>;
}

interface UseMeProActionsReturn {
  makeCall: (phoneNumber: string) => void;
  sendEmail: (email: string) => void;
  openWebsite: (url: string) => void;
  downloadCV: () => void;
  saveContact: () => void;
  shareCard: () => void;
  openGalleryModal: (itemId: string) => void;
  requestCustomGallery: () => void;
}

const useMeProActions = ({
  openWhatsApp,
  sendEmail: sendEmailProp, // Rename to avoid conflict with local sendEmail
  setIsGalleryModalOpen,
  setGalleryModalContent,
}: UseMeProActionsProps): UseMeProActionsReturn => {

  const makeCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const sendEmail = (email: string) => {
    sendEmailProp(email); // Use the passed-in sendEmail function
  };

  const openWebsite = (url: string) => {
    window.open(url, '_blank');
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
    openWhatsApp(contactData.whatsapp, "Hi! I'm interested in adding a custom portfolio gallery to my MyCv.i.ng profile. Can you help me set this up with my own projects and achievements?");
  };

  return {
    makeCall,
    sendEmail,
    openWebsite,
    downloadCV,
    saveContact,
    shareCard,
    openGalleryModal,
    requestCustomGallery,
  };
};

export default useMeProActions;