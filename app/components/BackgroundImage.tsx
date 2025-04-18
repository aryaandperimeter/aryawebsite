'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function BackgroundImage() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 w-[300vw] -left-[100vw]">
        {!imageError ? (
          <Image 
            src="/cyberpunk-city.jpg" 
            alt="Cyberpunk city background"
            fill
            className="object-cover"
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-black to-purple-900" />
        )}
      </div>
    </div>
  );
} 