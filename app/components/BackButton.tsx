'use client';

import Link from 'next/link';
import React from 'react';

interface BackButtonProps {
  href: string;
  text: string;
}

const BackButton: React.FC<BackButtonProps> = ({ href, text }) => {
  return (
    <Link href={href} className="btn btn-secondary">
      <span aria-hidden>←</span>
      {text}
    </Link>
  );
};

export default BackButton;
