'use client';

import React from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon, className = '' }) => {
  return (
    <div
      className={`group h-full rounded-2xl border border-white/10 bg-panel/60 p-7 text-center transition-colors duration-200 hover:border-accent/40 ${className}`}
    >
      <div className="mb-5 flex justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition-colors duration-200 group-hover:border-accent/40 group-hover:text-accent">
          {icon}
        </div>
      </div>

      <h3 className="mb-5 text-lg font-semibold text-white">{title}</h3>

      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
