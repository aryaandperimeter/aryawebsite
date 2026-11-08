'use client';

import React from 'react';

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
      {icon}
      {label}
    </a>
  );
};

export default SocialLink;
