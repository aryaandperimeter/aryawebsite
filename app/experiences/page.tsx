import Link from 'next/link';
import ExperienceCard from '../components/ExperienceCard';
import BackButton from '../components/BackButton';

export default function Experiences() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      {/* Header Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-black/30 p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h1 className="text-5xl font-bold mb-6 text-white">
                Professional Experience
              </h1>
              <p className="text-xl text-cyan-300">
                Building the future through technology and innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {/* Apple */}
            <ExperienceCard 
              title="SWE Program Manager Intern"
              company="Apple"
              date="Present"
              achievements={[
                "Collaborating with cross-functional teams to drive the development and execution of cutting-edge spatial computing experiences for Apple Vision Pro, integrating hardware, software, and human interface design",
                "Managing complex project timelines, engineering validation, and cross-team communication to ensure timely delivery of innovative features that redefine the future of immersive technology"
              ]}
              skills={["Spatial Computing", "Project Management", "Vision Pro"]}
            />

            {/* ShelterSync */}
            <ExperienceCard 
              title="Founder"
              company="ShelterSync"
              date="Present"
              achievements={[
                "Conducted market research by engaging with multiple local churches to assess food donation challenges, validating the need for a streamlined platform to connect donors with homeless shelters",
                "Developed a full-stack web application using React with TypeScript and Vite for the frontend, and Node.js with Express and MongoDB for the backend, implementing a real-time food donation system connecting restaurants with homeless shelters"
              ]}
              skills={["React", "TypeScript", "Node.js", "MongoDB", "Express"]}
            />

            {/* MIDI Lab */}
            <ExperienceCard 
              title="Data Science Intern"
              company="MIDI Lab"
              date="Present"
              achievements={[
                "Utilized data analytics and radiomics with Henry Ford Health to predict post-operative outcomes from pre-operative ultrasound images in rTSA patients",
                "Extracted and visualized radiomic features from CT images using pyradiomics, SimpleITK, and matplotlib"
              ]}
              skills={["Data Analytics", "Python", "Healthcare"]}
            />

            {/* Medpace */}
            <ExperienceCard 
              title="Data Science Intern"
              company="Medpace"
              date="Jan 2025 - April 2025"
              achievements={[
                "Developed interactive R Shiny applications and custom data visualizations using SQL (Snowflake), R, and Power BI to analyze clinical trial data for client proposals",
                "Applied graph theory and clustering techniques to analyze clinical site relationships, optimizing site selection"
              ]}
              skills={["R", "SQL", "Power BI"]}
            />

            {/* Idaho National Laboratory */}
            <ExperienceCard 
              title="Machine Learning Intern (Lead)"
              company="Idaho National Laboratory"
              date="July 2024 - September 2024"
              achievements={[
                "Processed 88 EQPs corresponding to 933 drawings (equipment qualification data and CAD drawings), developing ML models and OCR systems to automate EQP generation and extract structured data",
                "Built a LLaMA-based model to automate equipment qualification procedure generation, streamlining documentation workflows"
              ]}
              skills={["Machine Learning", "LLaMA", "OCR"]}
            />
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-10">
        <div className="container mx-auto px-4 text-center">
          <BackButton href="/" text="Back to Home" />
        </div>
      </section>
    </main>
  );
} 