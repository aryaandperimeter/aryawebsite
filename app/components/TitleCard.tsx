'use client';

import React, { useState, useEffect } from 'react';
import NeonBorder from './NeonBorder';
import { motion } from 'framer-motion';

const TitleCard: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Hey, I'm Arya";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="mx-auto w-full max-w-4xl">
      <NeonBorder
        color="#ff00ff"
        pulseSpeed={3}
        borderWidth={2}
        glowIntensity={10}
        className="overflow-hidden rounded-[9999px] bg-black/40 px-8 py-10 backdrop-blur-md sm:px-10 sm:py-12 md:px-14 md:py-14 lg:px-16 lg:py-16"
      >
        <div className="relative py-4 md:py-6">
          <div
            className="pointer-events-none absolute left-4 top-8 hidden h-24 w-1 rounded-full sm:block md:left-5 md:top-10 md:h-28"
            style={{
              background: 'linear-gradient(180deg, #ff00ff 0%, #22d3ee 100%)',
              boxShadow: '0 0 12px rgba(255, 0, 255, 0.45)',
            }}
            aria-hidden
          />

          <div className="text-center sm:pl-8 md:pl-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-fuchsia-400/90">
              Welcome
            </p>

            <div className="mb-6 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6 md:mb-8">
              <h1
                className="text-4xl font-bold md:text-5xl lg:text-6xl"
                style={{ textShadow: '0 0 28px rgba(255, 0, 255, 0.3)' }}
              >
                {text}
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                  className="ml-1 inline-block align-baseline text-cyan-300"
                >
                  |
                </motion.span>
              </h1>
              <div className="shrink-0 rounded-full border border-cyan-400/40 bg-cyan-950/30 p-1 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                <img
                  src="/face.png"
                  alt="Arya Sharma"
                  className="h-16 w-16 rounded-full object-contain md:h-20 md:w-20 lg:h-24 lg:w-24"
                />
              </div>
            </div>

            <div
              className="mx-auto mb-6 h-px max-w-xs bg-gradient-to-r from-transparent via-fuchsia-500/60 to-transparent md:mb-8"
              aria-hidden
            />

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg lg:text-xl">
              Data science student, product manager, cyberpunk lover, anime watcher and book worm. Get to know me!
            </p>
          </div>
        </div>
      </NeonBorder>
    </div>
  );
};

export default TitleCard;
