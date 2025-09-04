import React from 'react';
import { Star, Briefcase, GraduationCap, QrCode } from 'lucide-react';
import MeProSkillsTab from './MeProSkillsTab';
import MeProExperienceTab from './MeProExperienceTab';
import MeProEducationTab from './MeProEducationTab';
import MeProPortfolioTab from './MeProPortfolioTab';

interface MeProTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  skillsData: {
    skills: { name: string; percentage: number; color: string }[];
    coreCompetencies: { name: string; color: string }[];
  };
  experienceData: {
    title: string;
    company: string;
    years: string;
    description: string;
    highlights: string[];
    color: string;
  }[];
  educationData: {
    degree: string;
    institution: string;
    years: string;
    description: string;
    color: string;
  }[];
  portfolioData: {
    [key: string]: {
      id: string;
      title: string;
      description: string;
      details: string[];
      icon: React.ReactNode;
      color: string;
      tags: { name: string; bgColor: string; textColor: string }[];
    };
  };
  openGalleryModal: (itemId: string) => void;
  requestCustomGallery: () => void;
}

const MeProTabs: React.FC<MeProTabsProps> = ({
  activeTab,
  setActiveTab,
  skillsData,
  experienceData,
  educationData,
  portfolioData,
  openGalleryModal,
  requestCustomGallery,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 mb-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('skills')}
          className={`px-4 py-3 font-medium text-sm border-b-2 transition-all ${activeTab === 'skills' ? 'text-[#4A90E2] border-[#4A90E2]' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
        >
          <Star className="w-4 h-4 mr-2 inline-block" />Skills
        </button>
        <button
          onClick={() => setActiveTab('experience')}
          className={`px-4 py-3 font-medium text-sm border-b-2 transition-all ${activeTab === 'experience' ? 'text-[#4A90E2] border-[#4A90E2]' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
        >
          <Briefcase className="w-4 h-4 mr-2 inline-block" />Experience
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`px-4 py-3 font-medium text-sm border-b-2 transition-all ${activeTab === 'education' ? 'text-[#4A90E2] border-[#4A90E2]' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
        >
          <GraduationCap className="w-4 h-4 mr-2 inline-block" />Education
        </button>
        <button
          onClick={() => setActiveTab('portfolio')}
          className={`px-4 py-3 font-medium text-sm border-b-2 transition-all ${activeTab === 'portfolio' ? 'text-[#4A90E2] border-[#4A90E2]' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
        >
          <QrCode className="w-4 h-4 mr-2 inline-block" />Portfolio
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'skills' && <MeProSkillsTab skills={skillsData.skills} coreCompetencies={skillsData.coreCompetencies} />}
      {activeTab === 'experience' && <MeProExperienceTab experience={experienceData} />}
      {activeTab === 'education' && <MeProEducationTab education={educationData} />}
      {activeTab === 'portfolio' && (
        <MeProPortfolioTab
          galleryItems={portfolioData}
          openGalleryModal={openGalleryModal}
          requestCustomGallery={requestCustomGallery}
        />
      )}
    </div>
  );
};

export default MeProTabs;