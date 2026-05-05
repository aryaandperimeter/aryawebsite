'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon, className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className={`h-full ${className}`}
    >
      <div
        className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.14] px-6 pb-7 pt-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.55)] backdrop-blur-md md:px-7 md:pb-8 md:pt-9"
        style={{
          background:
            'radial-gradient(ellipse 120% 70% at 50% 0%, rgba(168, 85, 247, 0.22) 0%, transparent 55%), linear-gradient(165deg, rgba(12, 10, 18, 0.92) 0%, rgba(8, 6, 14, 0.88) 45%, rgba(5, 4, 12, 0.9) 100%)',
          boxShadow:
            '0 8px 40px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.06) inset, 0 1px 0 rgba(255, 255, 255, 0.1) inset',
        }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent"
          aria-hidden
        />

        <div className="relative mb-5 flex justify-center md:mb-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-fuchsia-400/40 bg-fuchsia-500/20 shadow-[0_0_32px_rgba(192,38,211,0.35)] md:h-16 md:w-16">
            {icon}
          </div>
        </div>

        <h3
          className="mb-5 text-lg font-bold text-white md:mb-6 md:text-xl lg:text-2xl"
          style={{ textShadow: '0 0 20px rgba(255, 0, 255, 0.18)' }}
        >
          {title}
        </h3>

        <div className="relative flex flex-wrap justify-center gap-2 md:gap-2.5">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-full px-3.5 py-1.5 text-sm text-white backdrop-blur-sm md:px-4 md:py-2 md:text-base"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.35), 0 0 18px rgba(168, 85, 247, 0.12)',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
