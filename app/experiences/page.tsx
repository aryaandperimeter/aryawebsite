import Link from 'next/link';
import ExperienceCard from '../components/ExperienceCard';
import BackButton from '../components/BackButton';

export default function Experiences() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-white" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3)' }}>Experiences</h1>
          <p className="text-gray-400 mt-2">My professional journey</p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 mb-8">
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

        {/* Back Button */}
        <div className="text-center">
          <BackButton href="/" text="Back to Home" />
        </div>
      </div>
    </div>
  );
} 