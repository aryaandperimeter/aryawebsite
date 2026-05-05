import type { CSSProperties } from 'react';
import { FaAtom, FaMicroscope, FaPills } from 'react-icons/fa';
import { SiApple, SiDell } from 'react-icons/si';
import ExperienceCard, { type ExperienceAccent } from '../components/ExperienceCard';
import BackButton from '../components/BackButton';
import CircuitImage from '../components/CircuitImage';

const accents: ExperienceAccent[] = ['fuchsia', 'cyan', 'violet', 'fuchsia', 'cyan'];

const experiences = [
  {
    title: 'Product Manager Intern',
    company: 'Dell',
    date: 'Present',
    achievements: ['Incoming Summer 2026!'],
    skills: [] as string[],
    companyIcon: <SiDell className="text-sky-400" title="Dell" />,
  },
  {
    title: 'Engineering Program Manager Intern',
    company: 'Apple',
    date: 'May 2025 – Aug 2025',
    achievements: [
      'Directly managed and delivered multi-sprint data platform programs across Vision Products Group and Video Computer Vision, enabling 10+ ML/CV teams to accelerate algorithm development.',
      'Defined and prioritized features through user interviews, transitioning a multi-year prototype to production-ready in 4 months and aligning roadmap with leadership.',
    ],
    skills: ['Spatial Computing', 'Project Management', 'Vision Pro', 'Agile'],
    companyIcon: <SiApple className="text-white" title="Apple" />,
  },
  {
    title: 'Data Science Intern',
    company: 'MIDI Lab',
    date: 'Oct 2024 – Dec 2024',
    achievements: [
      'Utilized data analytics and radiomics with Henry Ford Health to predict post-operative outcomes from pre-operative ultrasound images in rTSA patients',
      'Extracted and visualized radiomic features from CT images using pyradiomics, SimpleITK, and matplotlib',
    ],
    skills: ['Data Analytics', 'Python', 'Healthcare'],
    companyIcon: <FaMicroscope className="text-fuchsia-300" title="MIDI Lab" />,
  },
  {
    title: 'Data Science Intern',
    company: 'Medpace',
    date: 'Jan 2025 - April 2025',
    achievements: [
      'Developed interactive R Shiny applications and custom data visualizations using SQL (Snowflake), R, and Power BI to analyze clinical trial data for client proposals',
      'Applied graph theory and clustering techniques to analyze clinical site relationships, optimizing site selection',
    ],
    skills: ['R', 'SQL', 'Power BI'],
    companyIcon: <FaPills className="text-emerald-400" title="Medpace" />,
  },
  {
    title: 'Machine Learning + VR Intern',
    company: 'Idaho National Laboratory',
    date: 'July 2024 - September 2024',
    achievements: [
      'Processed 88 EQPs corresponding to 933 drawings (equipment qualification data and CAD drawings), developing ML models and OCR systems to automate EQP generation and extract structured data',
      'Built a LLaMA-based model to automate equipment qualification procedure generation, streamlining documentation workflows',
    ],
    skills: ['Machine Learning', 'LLaMA', 'OCR'],
    companyIcon: <FaAtom className="text-amber-300" title="Idaho National Laboratory" />,
  },
];

function nodeStyle(accent: ExperienceAccent): CSSProperties {
  if (accent === 'cyan') {
    return {
      borderColor: 'rgba(34, 211, 238, 0.95)',
      boxShadow: '0 0 14px rgba(34, 211, 238, 0.55)',
    };
  }
  if (accent === 'violet') {
    return {
      borderColor: 'rgba(167, 139, 250, 0.95)',
      boxShadow: '0 0 14px rgba(167, 139, 250, 0.55)',
    };
  }
  return {
    borderColor: 'rgba(255, 0, 255, 0.95)',
    boxShadow: '0 0 14px rgba(255, 0, 255, 0.55)',
  };
}

export default function Experiences() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-gray-900 to-black text-white">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      <CircuitImage position="left" imageType="circuit" />
      <CircuitImage position="upper-right" imageType="rightcircuit" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-1 pt-10 md:px-10 md:pb-2 md:pt-14">
        <header className="mb-0">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-4">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400/90">
                Work
              </p>
              <h1 className="text-4xl font-black tracking-tighter text-white md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-white via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h1>
            </div>
            <p className="max-w-xs text-xs text-gray-500 md:text-right">
              <span className="font-mono text-fuchsia-400/90">5 roles</span>
              <span className="text-gray-600"> · </span>
              <span className="text-cyan-400/80">scroll sideways</span>
              <span aria-hidden> →</span>
            </p>
          </div>
        </header>
      </div>

      {/* Full-viewport-width timeline (not boxed by max-w-6xl) */}
      <div className="relative left-1/2 z-10 -mt-2 w-screen max-w-[100vw] -translate-x-1/2 md:-mt-1">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/90 to-transparent md:w-16"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-[#0a0a0f] via-[#0a0a0f]/90 to-transparent md:w-16"
          aria-hidden
        />

        <div
          className="overflow-x-auto scroll-smooth overscroll-x-contain pb-6 pt-1 [scrollbar-color:rgba(217,70,239,0.45)_rgba(255,255,255,0.06)] [scrollbar-width:thin] snap-x snap-mandatory touch-pan-x"
          tabIndex={0}
          role="region"
          aria-label="Work experience timeline, scroll horizontally"
        >
          <div className="relative flex w-max min-w-0 gap-6 px-6 pb-2 pt-12 md:gap-8 md:px-12 md:pt-14">
            <div
              className="pointer-events-none absolute left-6 right-6 top-6 z-0 h-[3px] rounded-full md:left-12 md:right-12 md:top-7"
              style={{
                background:
                  'linear-gradient(90deg, rgba(255,0,255,0.9) 0%, rgba(34,211,238,0.75) 45%, rgba(167,139,250,0.9) 100%)',
                boxShadow: '0 0 16px rgba(255, 0, 255, 0.35)',
              }}
              aria-hidden
            />

            {experiences.map((exp, index) => {
              const accent = accents[index % accents.length];
              return (
                <div
                  key={`${exp.company}-${index}`}
                  className="relative z-10 flex w-[min(85vw,22rem)] shrink-0 snap-center snap-always flex-col sm:w-[24rem] md:w-[26rem]"
                >
                    <div className="absolute -top-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 md:-top-9">
                    <div
                      className="h-3.5 w-3.5 rounded-full border-2 bg-[#0a0a0f] md:h-4 md:w-4"
                      style={nodeStyle(accent)}
                      aria-hidden
                    />
                    <span className="max-w-[12rem] text-center text-[0.65rem] font-bold uppercase leading-tight tracking-wider text-cyan-200/95">
                      {exp.date}
                    </span>
                  </div>

                  <div className="mt-2">
                    <ExperienceCard
                      title={exp.title}
                      company={exp.company}
                      date={exp.date}
                      achievements={exp.achievements}
                      skills={exp.skills}
                      companyIcon={exp.companyIcon}
                      accent={accent}
                      hideInnerBar
                      hideDate
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-10 pt-6 md:px-10 md:pb-14 md:pt-8">
        <div className="text-center">
          <BackButton href="/" text="Back to Home" />
        </div>
      </div>
    </div>
  );
}
