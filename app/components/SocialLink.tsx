'use client';

import React, { useState } from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center transition-all duration-300 ${isHovered ? 'bg-purple-800/50 transform scale-110' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
    </a>
  );
};

export default SocialLink; 