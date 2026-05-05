'use client';

import React from 'react';

export type ExperienceAccent = 'fuchsia' | 'cyan' | 'violet';

const accentMap: Record<
  ExperienceAccent,
  { border: string; boxShadow: string; hoverGlow: string }
> = {
  fuchsia: {
    border: '2px solid #ff00ff',
    boxShadow: '0 0 14px rgba(255, 0, 255, 0.35)',
    hoverGlow: 'rgba(255, 0, 255, 0.12)',
  },
  cyan: {
    border: '2px solid #22d3ee',
    boxShadow: '0 0 14px rgba(34, 211, 238, 0.35)',
    hoverGlow: 'rgba(34, 211, 238, 0.12)',
  },
  violet: {
    border: '2px solid #a78bfa',
    boxShadow: '0 0 14px rgba(167, 139, 250, 0.35)',
    hoverGlow: 'rgba(167, 139, 250, 0.12)',
  },
};

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  achievements: string[];
  skills: string[];
  companyIcon?: React.ReactNode;
  accent?: ExperienceAccent;
  /** Hide left gradient bar (e.g. when used beside a timeline rail) */
  hideInnerBar?: boolean;
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
  accent = 'fuchsia',
  hideInnerBar = false,
  hideDate = false,
  className = '',
}) => {
  const a = accentMap[accent];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.005] hover:shadow-2xl md:rounded-[1.25rem] ${className}`}
      style={{
        background: 'linear-gradient(155deg, rgba(28, 26, 34, 0.92) 0%, rgba(10, 10, 16, 0.96) 100%)',
        border: a.border,
        boxShadow: a.boxShadow,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse 85% 55% at 0% 0%, ${a.hoverGlow} 0%, transparent 55%)`,
        }}
      />

      <div className="relative flex gap-5 p-6 md:gap-6 md:p-8">
        {!hideInnerBar ? (
          <div
            className="mt-1 hidden w-1 shrink-0 rounded-full sm:block"
            style={{
              background: 'linear-gradient(180deg, #ff00ff 0%, #22d3ee 100%)',
              boxShadow: '0 0 12px rgba(255, 0, 255, 0.45)',
            }}
            aria-hidden
          />
        ) : null}

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="mb-5 flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div className="flex min-w-0 flex-1 items-start gap-4">
              {companyIcon ? (
                <div
                  className="shrink-0 rounded-xl border border-cyan-400/35 bg-cyan-950/30 p-3 shadow-[0_0_24px_rgba(34,211,238,0.15)] md:p-4"
                  aria-hidden
                >
                  <div className="flex h-14 w-14 items-center justify-center md:h-16 md:w-16 lg:h-[4.5rem] lg:w-[4.5rem] [&>svg]:h-10 [&>svg]:w-10 md:[&>svg]:h-12 md:[&>svg]:w-12 lg:[&>svg]:h-14 lg:[&>svg]:w-14">
                    {companyIcon}
                  </div>
                </div>
              ) : null}
              <div className="min-w-0 flex-1">
                <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-fuchsia-300/90">
                  Company
                </p>
                <h2
                  className="text-2xl font-bold leading-tight text-white md:text-3xl lg:text-[1.75rem]"
                  style={{ textShadow: '0 0 24px rgba(255, 0, 255, 0.25)' }}
                >
                  {company}
                </h2>
                <p className="mt-2 text-base font-medium text-purple-200/95 md:text-lg">
                  {title}
                </p>
              </div>
            </div>
            {hideDate ? null : (
              <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-cyan-400/35 bg-cyan-950/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-cyan-200 sm:text-right">
                {date}
              </span>
            )}
          </div>

          <div className="mb-4 flex-grow">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
              Highlights
            </h3>
            <ul className="space-y-3 text-gray-300">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex gap-3 text-sm leading-relaxed md:text-base">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400"
                    style={{ boxShadow: '0 0 8px rgba(244, 114, 244, 0.7)' }}
                    aria-hidden
                  />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {skills.length > 0 ? (
            <div className="mt-auto border-t border-white/5 pt-4">
              <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full px-3 py-1 text-sm"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(0, 128, 128, 0.35) 0%, rgba(147, 51, 234, 0.25) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#fff',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
