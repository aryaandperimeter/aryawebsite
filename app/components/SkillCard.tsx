'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NeonBorder from './NeonBorder';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <NeonBorder
        color="#ff00ff"
        pulseSpeed={3}
        borderWidth={2}
        glowIntensity={10}
        className="p-6 rounded-xl backdrop-blur-md bg-black/30 h-full flex flex-col"
      >
        <div className="text-center flex flex-col h-full">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <div className="flex flex-wrap justify-center gap-2 mt-auto">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-900/30 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </NeonBorder>
    </motion.div>
  );
};

export default SkillCard; 