'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glitch-effect" data-text="ARYA SHARMA">
            ARYA SHARMA
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-cyber-blue neon-text mb-8"
          >
            Software Engineer & Program Manager
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="#about"
              className="cyberpunk-border px-6 py-3 text-lg hover:bg-cyber-blue/20 transition-colors"
            >
              Explore
            </a>
            <a
              href="mailto:sharm215@msu.edu"
              className="cyberpunk-border px-6 py-3 text-lg hover:bg-cyber-blue/20 transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyber-blue rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: Math.random(),
              }}
              animate={{
                y: ["0%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
} 