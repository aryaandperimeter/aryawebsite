'use client';

import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  achievements: string[];
  skills: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  date,
  achievements,
  skills,
}) => {
  return (
    <div 
      className="relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
      style={{
        background: 'linear-gradient(145deg, rgba(30, 30, 30, 0.8) 0%, rgba(20, 20, 20, 0.9) 100%)',
        border: '2px solid #ff00ff',
        boxShadow: '0 0 10px #ff00ff40',
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.2) 0%, transparent 70%)',
        }}
      />
      
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <span className="text-cyan-300 text-sm font-medium">{date}</span>
          </div>
          <p className="text-cyan-300 text-lg">{company}</p>
        </div>
        
        {/* Achievements */}
        <div className="mb-4 flex-grow">
          <h4 className="text-sm font-semibold mb-2 text-white">Key Achievements:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
        
        {/* Skills */}
        <div className="mt-auto">
          <h4 className="text-sm font-semibold mb-2 text-white">Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm rounded-full"
                style={{
                  background: 'linear-gradient(90deg, rgba(0, 128, 128, 0.3) 0%, rgba(0, 128, 255, 0.3) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard; 