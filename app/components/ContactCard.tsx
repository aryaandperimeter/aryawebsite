'use client';

import React, { useState } from 'react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
  color?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ 
  icon, 
  title, 
  value, 
  link,
  color = '#ff00ff', // Default: magenta
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <div 
      className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="relative h-full"
        style={{
          padding: '2px',
          borderRadius: '0.5rem',
          background: 'black',
          border: `2px solid ${color}`,
          boxShadow: `0 0 10px ${color}40`,
        }}
      >
        <div className="flex items-center space-x-4 p-4 bg-black rounded-lg">
          <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-cyan-300 text-lg">{value}</p>
          </div>
        </div>
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