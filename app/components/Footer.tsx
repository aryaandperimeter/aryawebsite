'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="wrap section-y">
        <p className="text-14 text-muted">© {new Date().getFullYear()} Arya Sharma. All rights reserved.</p>
      </div>
    </footer>
  );
}
