'use client';

import React from 'react';
import Link from 'next/link';
import BackButton from '../components/BackButton';
import ProjectCard from '../components/ProjectCard';
import CircuitImage from '../components/CircuitImage';

const projects = [
  {
    title: 'Customer Personality Analysis',
    description: '• Analyzed customer demographics and behavior\n• Identified purchasing patterns\n• Created targeted marketing strategies\n• Improved recommendation systems',
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Statistical Modeling'],
    icon: '📊',
    viewLink: '#',
    githubLink: 'https://github.com/aryaandperimeter/Customer-Personality-Analysis'
  },
  {
    title: 'Stock Price Predictor',
    description: '• Built predictive model for FAANG stocks\n• Analyzed historical patterns and volatility\n• Implemented time series forecasting\n• Created financial analysis dashboard',
    technologies: ['Python', 'Time Series Analysis', 'Financial Modeling', 'Data Science'],
    icon: '📈',
    viewLink: '#',
    githubLink: 'https://github.com/aryaandperimeter/stockprojections'
  },
  {
    title: 'ShelterSync',
    description: '• Conducted market research with local churches\n• Developed full-stack donation platform\n• Built React/TypeScript frontend with Vite\n• Created Node.js/Express/MongoDB backend\n• Implemented real-time food donation system',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Vite'],
    icon: '🏠',
    viewLink: '#',
    githubLink: 'https://github.com/aryaandperimeter/food_app'
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <CircuitImage position="left" imageType="circuit" />
      <CircuitImage position="upper-right" imageType="rightcircuit" />
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-white" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3)' }}>Projects</h1>
          <p className="text-gray-400 mt-2">Check out some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center">
          <BackButton href="/" text="Back to Home" />
        </div>
      </div>
    </div>
  );
};

export default Projects; 