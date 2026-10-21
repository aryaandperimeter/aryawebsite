'use client';

import React from 'react';

const TitleCard: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-3xl animate-fadeUp">
      <div className="card-surface rounded-3xl border border-line/15 bg-panel/50 px-8 py-12 text-center sm:px-14 sm:py-14">
        <div className="mb-6 flex flex-col items-center justify-center gap-5">
          <img
            src="/face.png"
            alt="Arya Sharma"
            className="h-20 w-20 rounded-full border border-line/15 object-contain"
          />
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-fg md:text-5xl">
            Hey, I&apos;m Arya
          </h1>
        </div>

        <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-accent" aria-hidden />

        <p className="mx-auto max-w-xl text-base leading-relaxed text-fg-tertiary md:text-lg">
          Data science student, product manager, cyberpunk lover, and anime watcher.
          Get to know me!
        </p>
      </div>
    </div>
  );
};

export default TitleCard;
