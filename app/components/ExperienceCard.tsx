'use client';

import React from 'react';
import InteractiveElement from './InteractiveElement';

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  achievements: string[];
  skills: string[];
}

export default function ExperienceCard({
  title,
  company,
  date,
  achievements,
  skills,
}: ExperienceCardProps) {
  return (
    <InteractiveElement type="card" className="glass-card p-8 backdrop-blur-md bg-black/30 border border-white/10 shadow-2xl">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-purple-400">{company}</p>
          <p className="text-gray-400 text-sm">{date}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-white mb-2">Key Achievements</h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <h4 className="text-lg font-semibold text-white mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-purple-500/10 text-purple-300 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </InteractiveElement>
  );
} 