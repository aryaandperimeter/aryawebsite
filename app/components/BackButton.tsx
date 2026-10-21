'use client';

import Link from 'next/link';
import React from 'react';

interface BackButtonProps {
  href: string;
  text: string;
}

const BackButton: React.FC<BackButtonProps> = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-line/15 px-6 py-2.5 text-sm font-medium text-fg-secondary transition-colors duration-200 hover:border-accent/50 hover:text-fg"
    >
      <span aria-hidden>←</span>
      {text}
    </Link>
  );
};

export default BackButton;
