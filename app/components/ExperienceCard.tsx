'use client';

import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  achievements: string[];
  skills: string[];
  companyIcon?: React.ReactNode;
  /** Hide the date pill (e.g. when date is shown on a horizontal timeline node) */
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
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel/50 p-6 transition-colors duration-200 hover:border-accent/35 md:p-7 ${className}`}
    >
      <div className="mb-5 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex min-w-0 flex-1 items-start gap-4">
          {companyIcon ? (
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 text-2xl"
              aria-hidden
            >
              {companyIcon}
            </div>
          ) : null}
          <div className="min-w-0 flex-1">
            <p className="mb-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent/80">
              Company
            </p>
            <h2 className="text-xl font-semibold leading-tight text-white md:text-2xl">
              {company}
            </h2>
            <p className="mt-1.5 text-sm font-medium text-zinc-400 md:text-base">{title}</p>
          </div>
        </div>
        {hideDate ? null : (
          <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs text-zinc-400">
            {date}
          </span>
        )}
      </div>

      <div className="mb-4 flex-grow">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Highlights
        </h3>
        <ul className="space-y-2.5 text-zinc-400">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex gap-3 text-sm leading-relaxed md:text-base">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" aria-hidden />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {skills.length > 0 ? (
        <div className="mt-auto flex flex-wrap gap-2 border-t border-white/5 pt-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
            >
              {skill}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ExperienceCard;
