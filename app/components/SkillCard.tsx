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
        className="p-6 md:p-8 lg:p-10 rounded-xl backdrop-blur-md bg-black/30 h-full flex flex-col"
      >
        <div className="text-center flex flex-col h-full">
          <div className="mb-4 md:mb-6 lg:mb-8">{icon}</div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">{title}</h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-auto">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 md:px-4 md:py-2 bg-purple-900/30 rounded-full text-sm md:text-base lg:text-lg"
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