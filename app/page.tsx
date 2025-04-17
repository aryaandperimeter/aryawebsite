'use client';

import React from 'react';
import BackgroundImage from './components/BackgroundImage';
import Link from 'next/link';
import NeonBorder from './components/NeonBorder';
import TitleCard from './components/TitleCard';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaTasks } from 'react-icons/fa';
import SkillCard from './components/SkillCard';
import RobotImage from './components/RobotImage';
import RightRobotImage from './components/RightRobotImage';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <RobotImage />
      <RightRobotImage />
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="relative h-screen">
          {/* Background Image */}
          <BackgroundImage />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center">
            <TitleCard />
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/projects" className="glass-card px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                View Projects
              </Link>
              <Link href="/experiences" className="glass-card px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                View Experiences
              </Link>
              <Link href="/contact" className="glass-card px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="h-full">
                <SkillCard
                  title="Full Stack Development"
                  skills={['React', 'Next.js', 'Node.js', 'Python', 'SQL', 'MongoDB']}
                  icon={<FaCode className="text-4xl text-purple-400" />}
                />
              </div>
              <div className="h-full">
                <SkillCard
                  title="Data Science & ML"
                  skills={['TensorFlow', 'PyTorch', 'Scikit-learn', 'Data Analysis']}
                  icon={<FaBrain className="text-4xl text-purple-400" />}
                />
              </div>
              <div className="h-full">
                <SkillCard
                  title="Project Management"
                  skills={['Agile', 'Scrum', 'JIRA', 'Team Leadership']}
                  icon={<FaTasks className="text-4xl text-purple-400" />}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Arya Sharma. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
} 