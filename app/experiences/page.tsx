import { FaAtom, FaMicroscope, FaPills, FaRobot, FaSeedling } from 'react-icons/fa';
import { SiApple, SiDell } from 'react-icons/si';
import ExperienceCard from '../components/ExperienceCard';
import BackButton from '../components/BackButton';

const experiences = [
  {
    title: 'Research Assistant',
    company: 'TOPP Lab',
    date: 'Oct 2026 – Present',
    achievements: [
      'Applying image segmentation and computational phenotyping methods to 2D and 3D root imaging datasets',
      'Evaluating and benchmarking segmentation approaches and root architectural trait measurements across laboratory datasets',
      'Supporting dataset annotation, quality control, and reproducible Python-based analysis workflows for research on plant root architecture and crop resilience',
    ],
    skills: ['Image Segmentation', 'Python', 'Computational Phenotyping'],
    companyIcon: <FaSeedling className="text-fg-secondary" title="TOPP Lab" />,
  },
  {
    title: 'Product Manager Intern',
    company: 'Dell',
    date: 'May 2026 – Aug 2026',
    achievements: [
      'Defined the 0-to-1 product strategy for a proactive knowledge management agent and drove development with 3 engineers over a 10-week build cycle, from product requirements through working prototype.',
      'Developed the agent architecture end-to-end, from the orchestration harness to the tool-calling layer, enabling the agent to autonomously plan, reason, and execute multi-step tasks.',
      'Built a sandbox evaluation environment and agentic RAG pipeline for on-device Small Language Models, defining evaluation criteria around task completion, citation accuracy, and hallucination reduction.',
    ],
    skills: ['Product Strategy', 'Agentic AI', 'RAG', 'LLMs'],
    companyIcon: <SiDell className="text-fg-secondary" title="Dell" />,
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
    companyIcon: <SiApple className="text-fg-secondary" title="Apple" />,
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
    companyIcon: <FaPills className="text-fg-secondary" title="Medpace" />,
  },
  {
    title: 'Machine Learning Researcher',
    company: 'OPTML Lab',
    date: 'Oct 2024 – Dec 2024',
    achievements: [
      'Conducted independent study on transformer architectures, LoRA, and p-tuning, gaining foundational understanding of parameter-efficient fine-tuning methods.',
      'Presented a technical seminar to PhD researchers on transformer adaptation techniques and emerging architectures, strengthening lab knowledge exchange.',
    ],
    skills: ['Transformers', 'LoRA', 'P-Tuning'],
    companyIcon: <FaRobot className="text-fg-secondary" title="OPTML Lab" />,
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
    companyIcon: <FaMicroscope className="text-fg-secondary" title="MIDI Lab" />,
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
    companyIcon: <FaAtom className="text-fg-secondary" title="Idaho National Laboratory" />,
  },
];

export default function Experiences() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink bg-grid text-fg">
      <div className="mx-auto max-w-6xl px-5 pb-4 pt-10 md:px-10 md:pt-14">
        <header className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-fg md:text-5xl">
            Experiences
          </h1>
        </header>
      </div>

      <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-ink via-ink/90 to-transparent md:w-16"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-ink via-ink/90 to-transparent md:w-16"
          aria-hidden
        />

        <div
          className="overflow-x-auto scroll-smooth overscroll-x-contain pb-6 pt-1 [scrollbar-color:rgb(var(--c-accent)/0.4)_rgb(var(--c-line)/0.06)] [scrollbar-width:thin] snap-x snap-mandatory touch-pan-x"
          tabIndex={0}
          role="region"
          aria-label="Work and research experience timeline, scroll horizontally"
        >
          <div className="relative flex w-max min-w-0 gap-6 px-6 pb-2 pt-12 md:gap-8 md:px-12 md:pt-14">
            <div
              className="pointer-events-none absolute left-6 right-6 top-6 z-0 h-px bg-line/10 md:left-12 md:right-12 md:top-7"
              aria-hidden
            />

            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className="relative z-10 flex w-[min(85vw,22rem)] shrink-0 snap-center snap-always flex-col sm:w-[24rem] md:w-[26rem]"
              >
                <div className="absolute -top-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 md:-top-9">
                  <div className="h-3 w-3 rounded-full border-2 border-accent bg-ink md:h-3.5 md:w-3.5" aria-hidden />
                  <span className="max-w-[12rem] text-center font-mono text-[0.65rem] uppercase leading-tight tracking-wider text-fg-muted">
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
                    hideDate
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-10 pt-2 md:px-10 md:pb-14">
        <div className="text-center">
          <BackButton href="/" text="Back to Home" />
        </div>
      </div>
    </div>
  );
}
