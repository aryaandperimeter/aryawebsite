'use client';

import React from 'react';
import BackgroundImage from './components/BackgroundImage';
import Link from 'next/link';
import NeonBorder from './components/NeonBorder';
import TitleCard from './components/TitleCard';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaTasks, FaRobot } from 'react-icons/fa';
import SkillCard from './components/SkillCard';
import RobotImage from './components/RobotImage';
import RightRobotImage from './components/RightRobotImage';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <BackgroundImage />
      <RobotImage />
      <RightRobotImage />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <TitleCard />
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/projects" className="glass-card px-8 py-3 rounded-full font-semibold bg-purple-600/80 hover:bg-purple-500/90 transition-all duration-300 shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_20px_rgba(147,51,234,0.7)]">
              View Projects
            </Link>
            <Link href="/experiences" className="glass-card px-8 py-3 rounded-full font-semibold bg-purple-600/80 hover:bg-purple-500/90 transition-all duration-300 shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_20px_rgba(147,51,234,0.7)]">
              View Experiences
            </Link>
            <Link href="/contact" className="glass-card px-8 py-3 rounded-full font-semibold bg-purple-600/80 hover:bg-purple-500/90 transition-all duration-300 shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_20px_rgba(147,51,234,0.7)]">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            <SkillCard
              title="Programming"
              skills={['Python', 'JavaScript', 'React', 'Next.js', 'TypeScript']}
              icon={<FaCode className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto text-purple-400" />}
            />
            <SkillCard
              title="Data Science & ML"
              icon={<FaBrain className="text-4xl text-purple-400" />}
              skills={["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"]}
            />
            <SkillCard
              title="Project Management"
              skills={['Agile', 'Scrum', 'Team Leadership', 'Strategic Planning']}
              icon={<FaTasks className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto text-purple-400" />}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 