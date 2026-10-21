'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line/10 py-10 md:py-12">
      <div className="container mx-auto px-4 text-center md:px-6 lg:px-8">
        <p className="text-sm text-fg-muted">
          © {new Date().getFullYear()} Arya Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
