import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceEntry {
  title: string;
  company: string;
  years: string;
  description: string;
  highlights: string[];
  color: string;
}

interface MeProExperienceTabProps {
  experience: ExperienceEntry[];
}

const MeProExperienceTab: React.FC<MeProExperienceTabProps> = ({ experience }) => {
  return (
    <div id="experience-content" className="tab-content animate-fade-in">
      <div className="space-y-6">
        {experience.map((entry, index) => (
          <div key={index} className={`border-l-4 pl-6 border-[${entry.color}]`}>
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-gray-800">{entry.title}</h4>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{entry.years}</span>
            </div>
            <p className="text-gray-600 font-medium mb-2">{entry.company}</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">{entry.description}</p>
            <ul className="text-sm text-gray-600 space-y-1">
              {entry.highlights.map((highlight, hIndex) => (
                <li key={hIndex}>• {highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeProExperienceTab;