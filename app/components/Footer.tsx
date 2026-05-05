'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/55 py-10 backdrop-blur-md md:py-12">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/45 to-transparent"
        aria-hidden
      />
      <div className="container mx-auto px-4 text-center md:px-6 lg:px-8">
        <p className="text-sm text-gray-400 md:text-base">
          © {new Date().getFullYear()} Arya Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
