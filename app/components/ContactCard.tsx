'use client';

import React, { useState } from 'react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, value, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <div 
      className={`flex items-center space-x-4 transition-all duration-300 ${isHovered ? 'transform scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-cyan-300 text-lg">{value}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export default ContactCard; 