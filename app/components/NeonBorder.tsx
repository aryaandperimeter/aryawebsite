'use client';

import React from 'react';

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
  color = '#ff00ff',
  borderWidth = 2,
  glowIntensity = 10,
}) => {
  const glowSize = glowIntensity;
  const padding = borderWidth + glowSize;

  return (
    <div
      className={`neon-border-container ${className}`}
      style={{
        position: 'relative',
        padding: `${padding}px`,
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
          opacity: 0.65,
          boxShadow: `0 0 ${glowSize}px ${color}, inset 0 0 ${glowSize * 0.35}px ${color}`,
        }}
      />
      {children}
    </div>
  );
};

export default NeonBorder;
