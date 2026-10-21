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
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-colors duration-200 hover:border-accent/50 hover:text-white"
    >
      {icon}
    </a>
  );
};

export default SocialLink;
