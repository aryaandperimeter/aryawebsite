'use client';

import Link from 'next/link';
import React, { useState } from 'react';

interface BackButtonProps {
  href: string;
  text: string;
}

const BackButton: React.FC<BackButtonProps> = ({ href, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={href} 
      className={`glass-card px-8 py-3 rounded-full font-semibold inline-block backdrop-blur-md bg-black/30 border border-white/10 shadow-2xl transition-all duration-300 ${isHovered ? 'bg-white/10 -translate-y-1 shadow-purple-500/20' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </Link>
  );
};

export default BackButton; 