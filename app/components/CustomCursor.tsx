'use client';

import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isOverClickable, setIsOverClickable] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      // Adjust for the 55% zoom level by dividing by 0.55
      setPosition({ x: e.clientX / 0.55, y: e.clientY / 0.55 });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const checkIfOverClickable = () => {
      // Get the element under the cursor
      const element = document.elementFromPoint(position.x, position.y);
      
      if (element) {
        // Check if the element or its parent is clickable
        const isClickable = 
          element.tagName === 'A' || 
          element.tagName === 'BUTTON' || 
          element.getAttribute('role') === 'button' ||
          element.closest('a') !== null ||
          element.closest('button') !== null;
        
        setIsOverClickable(isClickable);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousemove', checkIfOverClickable);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousemove', checkIfOverClickable);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <div
      className={`custom-cursor fixed top-0 left-0 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 ${
        isOverClickable ? 'scale-150' : 'scale-100'
      } ${isClicking ? 'scale-75' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '20px',
        height: '20px',
        backgroundColor: 'white',
        borderRadius: '50%',
        boxShadow: '0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.5)',
        border: '2px solid rgba(255, 255, 255, 0.8)',
        mixBlendMode: 'difference'
      }}
    />
  );
};

export default CustomCursor; 