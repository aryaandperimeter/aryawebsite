'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CircuitImageProps {
  position: 'left' | 'right' | 'upper-right';
  imageType?: 'circuit' | 'rightcircuit';
}

const CircuitImage: React.FC<CircuitImageProps> = ({ position, imageType = 'circuit' }) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'left':
        return 'left-0 bottom-0';
      case 'right':
        return 'right-0 bottom-0';
      case 'upper-right':
        return 'right-0 top-0';
      default:
        return 'left-0 bottom-0';
    }
  };

  return (
    <motion.div
      className={`fixed ${getPositionClasses()} z-10 pointer-events-none select-none`}
      initial={{ x: position === 'left' ? -200 : position === 'right' ? 200 : 200, y: position === 'upper-right' ? -200 : 0, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Image
        src={imageType === 'rightcircuit' ? "/rightcircuit.png" : "/circuit.png"}
        alt="Circuit"
        width={500}
        height={500}
        className="w-auto h-auto max-w-[400px] xl:max-w-[500px]"
        priority
        unoptimized
      />
    </motion.div>
  );
};

export default CircuitImage; 