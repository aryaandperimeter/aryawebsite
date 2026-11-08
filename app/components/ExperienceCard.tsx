'use client';

import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  achievements: string[];
  skills: string[];
  companyIcon?: React.ReactNode;
  /** Hide the date when it is shown somewhere else */
  hideDate?: boolean;
  className?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  date,
  achievements,
  skills,
  companyIcon,
  hideDate = false,
  className = '',
}) => {
  return (
    <article className={`card flex h-full flex-col ${className}`}>
      {hideDate ? null : <p className="font-serif text-20 text-muted">{date}</p>}

      <div className={`${hideDate ? '' : 'mt-4'} flex min-w-0 items-start gap-3`}>
        {companyIcon ? (
          <span className="mt-1 shrink-0 text-forest" aria-hidden>
            {companyIcon}
          </span>
        ) : null}
        <div className="min-w-0">
          <h2 className="font-serif text-28 font-normal leading-[1.2] text-fg">{company}</h2>
          <p className="mt-2 text-20 font-bold text-fg">{title}</p>
        </div>
      </div>

      <ul className="mt-6 flex-grow space-y-3">
        {achievements.map((achievement) => (
          <li key={achievement} className="flex gap-3 text-16 text-fg">
            <span className="font-serif text-forest" aria-hidden>
              —
            </span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      {skills.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
          {skills.map((skill) => (
            <span key={skill} className="text-14 text-forest">
              {skill}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
};

export default ExperienceCard;
