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
    .map((line) => line.replace(/^[\u2022•]\s*/, '').trim())
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
    <div
      className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
      style={{
        background: 'linear-gradient(145deg, rgba(30, 30, 30, 0.85) 0%, rgba(14, 14, 18, 0.95) 100%)',
        border: '2px solid #ff00ff',
        boxShadow: '0 0 10px #ff00ff40',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 0% 0%, rgba(255, 0, 255, 0.12) 0%, transparent 55%)',
        }}
      />

      <div className="relative flex gap-5 p-6 md:p-8">
        <div
          className="mt-1 hidden w-1 shrink-0 rounded-full sm:block"
          style={{
            background: 'linear-gradient(180deg, #ff00ff 0%, #22d3ee 100%)',
            boxShadow: '0 0 12px rgba(255, 0, 255, 0.45)',
          }}
          aria-hidden
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="mb-5 flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div className="min-w-0">
              <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-fuchsia-300/90">
                Project
              </p>
              <h2
                className="text-2xl font-bold leading-tight text-white md:text-3xl lg:text-[1.75rem]"
                style={{ textShadow: '0 0 24px rgba(255, 0, 255, 0.25)' }}
              >
                {title}
              </h2>
            </div>
            <span
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-400/35 bg-cyan-950/40 text-2xl leading-none"
              aria-hidden
            >
              {icon}
            </span>
          </div>

          <div className="mb-4 flex-grow">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
              Highlights
            </h3>
            <ul className="space-y-3 text-gray-300">
              {highlights.map((line, index) => (
                <li key={index} className="flex gap-3 text-sm leading-relaxed md:text-base">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400"
                    style={{ boxShadow: '0 0 8px rgba(244, 114, 244, 0.7)' }}
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {technologies.length > 0 ? (
            <div className="mt-auto border-t border-white/5 pt-4">
              <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(0, 128, 128, 0.35) 0%, rgba(147, 51, 234, 0.25) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#fff',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {githubLink ? (
            <div className="mt-5 flex justify-center sm:justify-start">
              <GitHubButton href={githubLink} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
