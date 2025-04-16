'use client';

import React from 'react';
import InteractiveElement from './InteractiveElement';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  viewLink: string;
  githubLink: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  icon,
  viewLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <InteractiveElement type="card" className="glass-card p-8 backdrop-blur-md bg-black/30 border border-white/10 shadow-2xl">
      <div className="flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="text-4xl text-purple-500">{icon}</div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-purple-500/10 text-purple-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="mt-auto">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-400 transition-colors"
          >
            GitHub →
          </a>
        </div>
      </div>
    </InteractiveElement>
  );
} 