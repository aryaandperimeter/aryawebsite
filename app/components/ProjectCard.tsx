import React from 'react';
import GitHubButton from './GitHubButton';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
}

function parseHighlightLines(description: string): string[] {
  return description
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^[••]\s*/, '').trim())
    .filter(Boolean);
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubLink,
}) => {
  const highlights = parseHighlightLines(description);

  return (
    <article className="grid grid-cols-4 gap-4 border-t border-forest py-8 sm:grid-cols-8 sm:gap-6 sm:py-12 lg:grid-cols-12">
      <h2 className="col-span-4 font-serif text-28 font-normal text-fg sm:col-span-3 lg:col-span-5">
        {title}
      </h2>

      <div className="col-span-4 sm:col-span-5 lg:col-span-7">
        <ul className="space-y-3">
          {highlights.map((line) => (
            <li key={line} className="flex gap-3 text-16 text-fg">
              <span className="font-serif text-forest" aria-hidden>
                —
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>

        {technologies.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
            {technologies.map((tech) => (
              <span key={tech} className="text-14 text-forest">
                {tech}
              </span>
            ))}
          </div>
        ) : null}

        {githubLink ? (
          <div className="mt-5">
            <GitHubButton href={githubLink} />
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default ProjectCard;
