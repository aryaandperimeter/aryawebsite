import { FaAtom, FaMicroscope, FaPills, FaRobot, FaSeedling } from 'react-icons/fa';
import { SiApple, SiDell } from 'react-icons/si';
import ExperienceCard from '../components/ExperienceCard';
import BackButton from '../components/BackButton';

const workExperience = [
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
    companyIcon: <SiDell className="text-zinc-300" title="Dell" />,
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
    companyIcon: <SiApple className="text-zinc-300" title="Apple" />,
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
    companyIcon: <FaPills className="text-zinc-300" title="Medpace" />,
  },
];

const research = [
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
    companyIcon: <FaSeedling className="text-zinc-300" title="TOPP Lab" />,
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
    companyIcon: <FaRobot className="text-zinc-300" title="OPTML Lab" />,
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
    companyIcon: <FaMicroscope className="text-zinc-300" title="MIDI Lab" />,
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
    companyIcon: <FaAtom className="text-zinc-300" title="Idaho National Laboratory" />,
  },
];

function Section({
  label,
  items,
}: {
  label: string;
  items: typeof workExperience;
}) {
  return (
    <section className="mb-12 md:mb-14">
      <div className="mb-6 flex items-center gap-3">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
          {label}
        </h2>
      </div>
      <div className="space-y-5">
        {items.map((exp, index) => (
          <ExperienceCard
            key={`${exp.company}-${index}`}
            title={exp.title}
            company={exp.company}
            date={exp.date}
            achievements={exp.achievements}
            skills={exp.skills}
            companyIcon={exp.companyIcon}
          />
        ))}
      </div>
    </section>
  );
}

export default function Experiences() {
  return (
    <div className="relative min-h-screen bg-ink bg-grid text-white">
      <div className="mx-auto max-w-3xl px-6 py-14 md:px-8 md:py-20">
        <header className="mb-10 text-center md:mb-12">
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Experiences
          </h1>
        </header>

        <Section label="Work Experience" items={workExperience} />
        <Section label="Research" items={research} />

        <div className="text-center">
          <BackButton href="/" text="Back to Home" />
        </div>
      </div>
    </div>
  );
}
