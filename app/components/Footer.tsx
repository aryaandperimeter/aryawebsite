'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="relative py-8 text-center text-gray-400 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Arya Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 