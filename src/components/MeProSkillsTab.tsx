import React, { useRef, useEffect } from 'react';
import { Star } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

interface CoreCompetency {
  name: string;
  color: string;
}

interface MeProSkillsTabProps {
  skills: Skill[];
  coreCompetencies: CoreCompetency[];
}

const MeProSkillsTab: React.FC<MeProSkillsTabProps> = ({ skills, coreCompetencies }) => {
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([]);

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
  }, [skills]); // Re-run effect if skills data changes

  return (
    <div id="skills-content" className="tab-content animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          {skills.map((skill, index) => (
            <div className="mb-4" key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  ref={el => skillBarsRef.current[index] = el}
                  className="h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ background: skill.color, width: '0%' }}
                  data-target-width={`${skill.percentage}%`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Core Competencies</h4>
          <div className="flex flex-wrap gap-2">
            {coreCompetencies.map((comp, index) => (
              <span key={index} className={`px-3 py-1 rounded-full text-sm text-white bg-[${comp.color}]`}>{comp.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeProSkillsTab;