import React from 'react';
import GitHubButton from './GitHubButton';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
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
  icon,
  githubLink,
}) => {
  const highlights = parseHighlightLines(description);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-panel/50 transition-colors duration-200 hover:border-accent/35">
      <div className="flex gap-5 p-6 md:p-8">
        <div className="min-w-0 flex-1">
          <div className="mb-5 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
            <div className="min-w-0">
              <p className="mb-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent/80">
                Project
              </p>
              <h2 className="text-xl font-semibold leading-tight text-white md:text-2xl">
                {title}
              </h2>
            </div>
            <span
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-xl leading-none"
              aria-hidden
            >
              {icon}
            </span>
          </div>

          <div className="mb-5">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Highlights
            </h3>
            <ul className="space-y-2.5 text-zinc-400">
              {highlights.map((line, index) => (
                <li key={index} className="flex gap-3 text-sm leading-relaxed md:text-base">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {technologies.length > 0 ? (
            <div className="mb-5 flex flex-wrap gap-2 border-t border-white/5 pt-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : null}

          {githubLink ? <GitHubButton href={githubLink} /> : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
