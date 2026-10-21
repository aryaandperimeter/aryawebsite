'use client';

import React from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  index?: number;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon, index, className = '' }) => {
  return (
    <div
      className={`emphasis-border card-surface group relative h-full rounded-2xl border border-line/15 bg-panel/60 p-7 text-center transition-colors duration-200 ${className}`}
    >
      {index ? (
        <span className="absolute left-5 top-5 font-mono text-xs text-fg-muted">
          {String(index).padStart(2, '0')}
        </span>
      ) : null}

      <div className="mb-5 flex justify-center">
        <div className="group-emphasis-border group-emphasis-text flex h-12 w-12 items-center justify-center rounded-full border border-line/10 text-fg-secondary transition-colors duration-200">
          {icon}
        </div>
      </div>

      <h3 className="mb-5 font-serif text-lg font-semibold text-fg">{title}</h3>

      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="rounded-full border border-line/10 px-3 py-1 text-xs text-fg-tertiary"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
