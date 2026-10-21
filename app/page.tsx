'use client';

import React from 'react';
import Link from 'next/link';
import TitleCard from './components/TitleCard';
import { FaCode, FaBrain, FaTasks } from 'react-icons/fa';
import SkillCard from './components/SkillCard';
import Footer from './components/Footer';

const ctaClassName =
  'emphasis-border inline-flex items-center justify-center rounded-full border border-line/15 px-7 py-3 text-sm font-medium text-fg-secondary transition-colors duration-200 hover:text-fg';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-grid">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-accent-glow" />

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
            <Link href="/contact" className={ctaClassName}>
              Contact Me
            </Link>
          </nav>
        </div>
      </section>

      <section className="relative z-10 py-16 md:py-24" aria-label="Skills">
        <div className="relative mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            <SkillCard
              index={1}
              title="Programming"
              skills={['Python', 'JavaScript', 'React', 'Next.js', 'TypeScript']}
              icon={<FaCode className="h-5 w-5" />}
            />
            <SkillCard
              index={2}
              title="Data Science & ML"
              icon={<FaBrain className="h-5 w-5" />}
              skills={['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'SQL', 'R']}
            />
            <SkillCard
              index={3}
              className="md:col-span-2 md:max-w-md md:justify-self-center lg:col-span-1 lg:max-w-none lg:justify-self-stretch"
              title="Product Management"
              skills={['Agile', 'Scrum', 'Team Leadership', 'Strategic Planning']}
              icon={<FaTasks className="h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
