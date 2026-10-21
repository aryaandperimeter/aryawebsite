'use client';

import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setIsLight(document.documentElement.getAttribute('data-theme') === 'light');
  }, []);

  const toggle = () => {
    const next = isLight ? 'dark' : 'light';
    setIsLight(!isLight);
    if (next === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem('theme', next);
    } catch {
      // ignore storage failures (private browsing, etc.)
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      className="emphasis-border card-surface fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-line/15 bg-ink/80 text-fg-secondary backdrop-blur-sm transition-colors duration-200 hover:text-fg md:right-6 md:top-6"
    >
      {isLight ? <FaMoon className="h-4 w-4" /> : <FaSun className="h-4 w-4" />}
    </button>
  );
}
