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
    }, 100); // Speed of typing

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto mb-16">
      <NeonBorder 
        color="#ff00ff"
        pulseSpeed={3}
        borderWidth={2}
        glowIntensity={10}
        className="p-12 md:p-20 lg:p-32 rounded-xl backdrop-blur-md bg-black/30"
      >
        <div className="text-center py-6 md:py-8 lg:py-12">
          <div className="flex items-center justify-center mb-4 md:mb-6 lg:mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              {text}
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="ml-1"
              >
                |
              </motion.span>
            </h1>
            <img 
              src="/face.png" 
              alt="Face"
              className="ml-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
            />
          </div>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white max-w-3xl mx-auto leading-relaxed">
            I'm a curious builder who loves exploring where tech meets impact.
            From ideas to reality, I make things happen through code and collaboration.
          </p>
        </div>
      </NeonBorder>
    </div>
  );
};

export default TitleCard; 