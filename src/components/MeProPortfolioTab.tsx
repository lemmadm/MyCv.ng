import React from 'react';
import { PlusCircle, QrCode } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  tags: { name: string; bgColor: string; textColor: string }[];
}

interface MeProPortfolioTabProps {
  galleryItems: { [key: string]: GalleryItem & { details: string[] } }; // Full item data
  openGalleryModal: (itemId: string) => void;
  requestCustomGallery: () => void;
}

const MeProPortfolioTab: React.FC<MeProPortfolioTabProps> = ({ galleryItems, openGalleryModal, requestCustomGallery }) => {
  return (
    <div id="gallery-content" className="tab-content animate-fade-in">
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Professional Portfolio & Achievements</h4>
        <p className="text-gray-600 text-sm mb-6">Showcasing key projects, certifications, and professional milestones</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(galleryItems).map(([key, item]) => (
          <div key={key} className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer" onClick={() => openGalleryModal(item.id)}>
            <div className={`w-full h-32 bg-gradient-to-br ${item.color} rounded-lg mb-4 flex items-center justify-center`}>
              {item.icon}
            </div>
            <h5 className="font-semibold text-gray-800 mb-2">{item.title}</h5>
            <p className="text-sm text-gray-600">{item.description}</p>
            <div className="mt-3">
              {item.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className={`px-2 py-1 rounded-full text-xs font-semibold bg-[${tag.bgColor}] text-[${tag.textColor}] ${tagIndex > 0 ? 'ml-1' : ''}`}>{tag.name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 mb-4">💡 <strong>Pro Tip:</strong> Click on any item to view detailed information</p>
        <button onClick={requestCustomGallery} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all">
          <PlusCircle className="w-5 h-5 mr-2" />Request Custom Gallery Setup
        </button>
      </div>
    </div>
  );
};

export default MeProPortfolioTab;