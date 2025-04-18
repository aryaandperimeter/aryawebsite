'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const RightRobotImage: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      className="fixed right-0 bottom-0 z-10 pointer-events-none select-none"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {!imageError ? (
        <Image
          src="/robotpose.png"
          alt="Robot Pose"
          width={400}
          height={400}
          className="w-auto h-auto max-w-[300px] xl:max-w-[400px]"
          priority
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] bg-purple-900/20 rounded-lg flex items-center justify-center">
          <span className="text-purple-400">Robot Pose</span>
        </div>
      )}
    </motion.div>
  );
};

export default RightRobotImage; 