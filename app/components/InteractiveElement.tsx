'use client';

import React, { useState, useRef, useEffect } from 'react';

interface InteractiveElementProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'link' | 'card';
}

export default function InteractiveElement({ 
  children, 
  className = '', 
  onClick,
  type = 'button'
}: InteractiveElementProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsPressed(true);
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setRipplePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };
  const handleMouseUp = () => setIsPressed(false);

  const handleClick = (e: React.MouseEvent) => {
    const element = elementRef.current;
    if (!element) return;

    const ripple = document.createElement('div');
    ripple.className = 'absolute bg-purple-500/20 rounded-full transform scale-0 animate-ripple';
    ripple.style.left = `${ripplePosition.x}px`;
    ripple.style.top = `${ripplePosition.y}px`;
    element.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);

    if (onClick) {
      onClick();
    }
  };

  const baseClasses = 'relative overflow-hidden transition-all duration-300';
  const typeClasses = {
    button: 'hover:bg-purple-500/10 active:bg-purple-500/20',
    link: 'hover:text-purple-500',
    card: 'hover:shadow-purple-500/20 hover:-translate-y-1'
  };

  return (
    <div
      ref={elementRef}
      className={`${baseClasses} ${typeClasses[type]} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      style={{
        transform: isPressed ? 'scale(0.98)' : isHovered ? 'scale(1.02)' : 'scale(1)'
      }}
    >
      {children}
    </div>
  );
} 