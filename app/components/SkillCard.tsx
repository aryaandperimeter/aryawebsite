'use client';

import React from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, className = '' }) => {
  return (
    <div className={`flex h-full flex-col ${className}`}>
      <h3 className="font-serif text-28 font-normal text-fg">{title}</h3>
      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-14 text-forest">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
