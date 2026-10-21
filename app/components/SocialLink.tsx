'use client';

import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-line/15 text-fg-secondary transition-colors duration-200 hover:border-accent/50 hover:text-fg"
    >
      {icon}
    </a>
  );
};

export default SocialLink;
