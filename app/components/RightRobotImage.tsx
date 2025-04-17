'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const RightRobotImage: React.FC = () => {
  return (
    <motion.div
      className="fixed right-0 bottom-0 z-10 pointer-events-none select-none"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Image
        src="/robotpose.png"
        alt="Robot Pose"
        width={400}
        height={400}
        className="w-auto h-auto max-w-[300px] xl:max-w-[400px]"
        priority
        unoptimized
      />
    </motion.div>
  );
};

export default RightRobotImage; 