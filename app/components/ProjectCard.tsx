import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  icon,
  githubLink,
}) => {
  return (
    <div 
      className="relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl h-[450px]"
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
      
      <div className="p-6 flex flex-col h-full">
        {/* Header with icon */}
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center mr-4">
            <span className="text-2xl">{icon}</span>
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        
        {/* Description */}
        <div className="mb-4 flex-grow">
          <p className="text-gray-300 whitespace-pre-line">{description}</p>
        </div>
        
        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm rounded-full"
                style={{
                  background: 'linear-gradient(90deg, rgba(128, 0, 128, 0.3) 0%, rgba(0, 128, 128, 0.3) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 