'use client';

import React from 'react';

interface ResumeCardProps {
  title: string;
  description: string;
}

const ResumeCard: React.FC<ResumeCardProps> = ({
  title,
  description,
}) => {
  return (
    <div 
      className="relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
      style={{
        background: 'linear-gradient(145deg, rgba(30, 30, 30, 0.8) 0%, rgba(20, 20, 20, 0.9) 100%)',
        border: '2px solid #ff00ff',
        boxShadow: '0 0 10px #ff00ff40',
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.2) 0%, transparent 70%)',
        }}
      />
      
      <div className="p-6 flex flex-col items-center text-center h-full">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        
        {/* Description */}
        <div className="mb-4 flex-grow">
          <p className="text-gray-300">{description}</p>
        </div>
        
        {/* Download Button */}
        <div className="mt-auto">
          <a 
            href="/resume.pdf"
            download
            className="inline-flex items-center px-4 py-2 rounded-lg transition-all duration-300"
            style={{
              background: 'linear-gradient(90deg, rgba(128, 0, 128, 0.5) 0%, rgba(0, 128, 128, 0.5) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard; 