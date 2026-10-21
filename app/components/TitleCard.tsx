'use client';

import React from 'react';

const TitleCard: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-3xl animate-fadeUp">
      <div className="rounded-3xl border border-white/10 bg-panel/50 px-8 py-12 text-center sm:px-14 sm:py-14">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-accent/80">
          Welcome
        </p>

        <div className="mb-6 flex flex-col items-center justify-center gap-5">
          <img
            src="/face.png"
            alt="Arya Sharma"
            className="h-20 w-20 rounded-full border border-white/10 object-contain"
          />
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Hey, I&apos;m Arya
          </h1>
        </div>

        <div className="mx-auto mb-6 h-px w-16 bg-white/15" aria-hidden />

        <p className="mx-auto max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
          Data science student, product manager, cyberpunk lover, anime watcher and book worm.
          Get to know me!
        </p>
      </div>
    </div>
  );
};

export default TitleCard;
