'use client';

import React, { useState, useEffect } from 'react';

interface NeonBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  pulseSpeed?: number;
  borderWidth?: number;
  glowIntensity?: number;
}

const NeonBorder: React.FC<NeonBorderProps> = ({
  children,
  className = '',
  color = '#ff00ff', // Default: magenta
  pulseSpeed = 3, // Default: 3 seconds per pulse cycle
  borderWidth = 2, // Default: 2px border
  glowIntensity = 10, // Default: medium glow intensity
}) => {
  const [pulsePhase, setPulsePhase] = useState(0);
  
  useEffect(() => {
    // Create a smooth pulsing animation
    const interval = setInterval(() => {
      setPulsePhase((prev) => (prev + 1) % 100);
    }, pulseSpeed * 10); // Update every 10ms for smooth animation
    
    return () => clearInterval(interval);
  }, [pulseSpeed]);
  
  // Calculate opacity based on pulse phase (0-100)
  // Creates a smooth sine wave effect
  const opacity = 0.3 + (Math.sin((pulsePhase / 100) * Math.PI * 2) + 1) * 0.35;
  
  // Calculate glow size based on pulse phase
  const glowSize = glowIntensity * (0.5 + (Math.sin((pulsePhase / 100) * Math.PI * 2) + 1) * 0.25);
  
  return (
    <div 
      className={`neon-border-container ${className}`}
      style={{
        position: 'relative',
        padding: `${borderWidth + glowSize}px`,
        borderRadius: 'inherit',
      }}
    >
      <div
        className="neon-border"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: `${borderWidth}px solid ${color}`,
          borderRadius: 'inherit',
          opacity: opacity,
          boxShadow: `0 0 ${glowSize}px ${color}, inset 0 0 ${glowSize}px ${color}`,
          transition: 'opacity 0.1s ease-in-out, box-shadow 0.1s ease-in-out',
        }}
      />
      {children}
    </div>
  );
};

export default NeonBorder; 