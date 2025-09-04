import React from 'react';
import { GraduationCap } from 'lucide-react';

interface EducationEntry {
  degree: string;
  institution: string;
  years: string;
  description: string;
  color: string;
}

interface MeProEducationTabProps {
  education: EducationEntry[];
}

const MeProEducationTab: React.FC<MeProEducationTabProps> = ({ education }) => {
  return (
    <div id="education-content" className="tab-content animate-fade-in">
      <div className="space-y-6">
        {education.map((entry, index) => (
          <div key={index} className={`border-l-4 pl-6 border-[${entry.color}]`}>
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-gray-800">{entry.degree}</h4>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{entry.years}</span>
            </div>
            <p className="text-gray-600 font-medium mb-2">{entry.institution}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{entry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeProEducationTab;