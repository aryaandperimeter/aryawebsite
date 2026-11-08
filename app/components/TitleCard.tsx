'use client';

import React from 'react';

const TitleCard: React.FC = () => {
  return (
    <div className="max-w-3xl">
      <span className="star-bounce mb-6 inline-block sm:mb-8">
      <svg
        className="star-spin h-32 w-32 text-fg sm:h-40 sm:w-40"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <polygon
          fill="currentColor"
          points="50,2 62,34 96,34 69,55 79,90 50,70 21,90 31,55 4,34 38,34"
        />
      </svg>
      </span>
      <h1 className="font-serif text-40 font-normal text-fg sm:text-56 lg:text-80">
        Hey, I&apos;m Arya
      </h1>
      <p className="mt-6 max-w-xl text-16 text-fg">
        Data science student, product manager, cyberpunk lover, and anime watcher.
        Get to know me!
      </p>
    </div>
  );
};

export default TitleCard;
