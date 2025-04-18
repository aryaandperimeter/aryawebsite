'use client';

import React from 'react';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ 
  href, 
  children, 
  className = "", 
  style = {} 
}) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={className}
      style={style}
    >
      {children}
    </a>
  );
};

export default ExternalLink; 