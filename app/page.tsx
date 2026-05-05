'use client';

import React from 'react';
import BackgroundImage from './components/BackgroundImage';
import Link from 'next/link';
import TitleCard from './components/TitleCard';
import { FaCode, FaBrain, FaTasks } from 'react-icons/fa';
import SkillCard from './components/SkillCard';
import RobotImage from './components/RobotImage';
import RightRobotImage from './components/RightRobotImage';
import Footer from './components/Footer';

const ctaClassName =
  'inline-flex items-center justify-center rounded-full border border-fuchsia-500/40 bg-black/40 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/55 hover:bg-fuchsia-950/25 hover:shadow-[0_0_22px_rgba(255,0,255,0.28)] active:scale-[0.98]';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundImage />
      <RobotImage />
      <RightRobotImage />

      <section className="relative z-10 flex min-h-screen items-center justify-center py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <TitleCard />
          <nav
            className="mt-10 flex flex-wrap justify-center gap-3 md:mt-12 md:gap-4"
            aria-label="Primary"
          >
            <Link href="/projects" className={ctaClassName}>
              View Projects
            </Link>
            <Link href="/experiences" className={ctaClassName}>
              View Experiences
            </Link>
            <Link href="/hobbies" className={ctaClassName}>
              Hobbies &amp; interests
            </Link>
            <Link href="/contact" className={ctaClassName}>
              Contact Me
            </Link>
          </nav>
        </div>
      </section>

      <section className="relative z-10 py-16 md:py-24" aria-label="Skills">
        <div className="relative mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-10">
            <SkillCard
              title="Programming"
              skills={['Python', 'JavaScript', 'React', 'Next.js', 'TypeScript']}
              icon={<FaCode className="h-7 w-7 text-fuchsia-200 md:h-8 md:w-8" />}
            />
            <SkillCard
              className="lg:mt-6"
              title="Data Science & ML"
              icon={<FaBrain className="h-7 w-7 text-fuchsia-200 md:h-8 md:w-8" />}
              skills={['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'SQL', 'R']}
            />
            <SkillCard
              className="md:col-span-2 md:max-w-md md:justify-self-center lg:col-span-1 lg:mt-0 lg:max-w-none lg:justify-self-stretch"
              title="Product Management"
              skills={['Agile', 'Scrum', 'Team Leadership', 'Strategic Planning']}
              icon={<FaTasks className="h-7 w-7 text-fuchsia-200 md:h-8 md:w-8" />}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
