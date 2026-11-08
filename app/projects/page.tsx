'use client';

import React from 'react';
import BackButton from '../components/BackButton';
import ProjectCard from '../components/ProjectCard';

interface ProjectEntry {
  title: string;
  description: string;
  technologies: string[];
  viewLink?: string;
  githubLink?: string;
}

const projects: ProjectEntry[] = [
  {
    title: 'NIST + Johns Hopkins University Data Science Capstone',
    description:
      '• Building an end-to-end NLP and data engineering pipeline to ingest, extract, normalize, and structure resilience planning data from unstructured municipal websites and documents across the U.S.',
    technologies: ['NLP', 'Data Engineering', 'Python', 'Data Pipelines'],
  },
  {
    title: 'Gendered Emotions in 360° VR',
    description:
      '• Led research analyzing correlation between user sex and emotional responses in immersive VR environments using the VREED dataset.\n• Applied advanced statistical methods to model emotion–sex relationships, providing actionable insights for improving VR emotion recognition algorithms.',
    technologies: ['Python', 'Statistical Modeling', 'VR', 'Emotion Recognition'],
  },
  {
    title: 'LinkedIn Trend Radar',
    description:
      '• Utilized Claude Code to design an AI-powered prototype enabling LinkedIn creators to discover trending topics across industries and generate personalized content angles\n• Defined validation framework (user interviews, behavioral data, competitive analysis), built an interactive Figma Make prototype, and established success metrics.',
    technologies: ['Claude Code', 'AI', 'Figma', 'User Research', 'Product'],
  },
  {
    title: 'Customer Personality Analysis',
    description: '• Analyzed customer demographics and behavior\n• Identified purchasing patterns\n• Created targeted marketing strategies\n• Improved recommendation systems',
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Statistical Modeling'],
    viewLink: '#',
    githubLink: 'https://github.com/aryaandperimeter/Customer-Personality-Analysis',
  },
  {
    title: 'Stock Price Predictor',
    description: '• Built predictive model for FAANG stocks\n• Analyzed historical patterns and volatility\n• Implemented time series forecasting\n• Created financial analysis dashboard',
    technologies: ['Python', 'Time Series Analysis', 'Financial Modeling', 'Data Science'],
    viewLink: '#',
    githubLink: 'https://github.com/aryaandperimeter/stockprojections',
  },
  {
    title: 'ShelterSync',
    description:
      '• Conducted market research with local churches\n• Developed full-stack donation platform\n• Built React/TypeScript frontend with Vite\n• Created Node.js/Express/MongoDB backend\n• Implemented real-time food donation system',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Vite'],
    viewLink: '#',
    githubLink: 'https://github.com/aryaandperimeter/food_app',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-paper text-fg">
      <div className="section-y">
        <div className="wrap">
          <h1 className="font-serif text-40 font-normal uppercase text-fg sm:text-56">Projects</h1>

          <div className="mt-8 sm:mt-10">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubLink={project.githubLink}
              />
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <BackButton href="/" text="Back to Home" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
