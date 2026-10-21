'use client';

import React from 'react';
import BackButton from '../components/BackButton';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'LinkedIn Trend Radar',
    description:
      '• Utilized Claude Code to design an AI-powered prototype enabling LinkedIn creators to discover trending topics across industries and generate personalized content angles\n• Defined validation framework (user interviews, behavioral data, competitive analysis), built an interactive Figma Make prototype, and established success metrics.',
    technologies: ['Claude Code', 'AI', 'Figma', 'User Research', 'Product'],
    icon: '📡',
  },
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
    <div className="relative min-h-screen bg-ink text-white">
      <div className="mx-auto max-w-3xl px-6 py-14 md:px-8 md:py-20">
        <header className="mb-10 text-center md:mb-12">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Projects</h1>
        </header>

        <div className="mb-10 space-y-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              icon={project.icon}
              githubLink={project.githubLink}
            />
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
