'use client';

import React from 'react';
import Link from 'next/link';
import TitleCard from './components/TitleCard';
import SkillCard from './components/SkillCard';
import Footer from './components/Footer';
import FunStuffButton from './components/FunStuffButton';

export default function Home() {
  return (
    <main className="bg-paper text-fg">
      <section className="hero">
        <div className="wrap">
          <TitleCard />
          <nav className="mt-8 flex flex-wrap gap-4 sm:gap-6" aria-label="Primary">
            <Link href="/projects" className="btn btn-secondary">
              View Projects
            </Link>
            <Link href="/experiences" className="btn btn-secondary">
              View Experiences
            </Link>
            <FunStuffButton />
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              My Resume
            </a>
            <Link href="/contact" className="btn btn-primary uppercase">
              Contact Me
            </Link>
          </nav>
        </div>
      </section>

      <section className="section-y" aria-labelledby="skills-heading">
        <div className="wrap">
          <h2 id="skills-heading" className="mb-6 font-serif text-40 font-normal text-fg sm:mb-8 sm:text-56">
            Skills
          </h2>
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 sm:gap-6 lg:grid-cols-12">
            <SkillCard
              className="col-span-4 sm:col-span-8 lg:col-span-4"
              title="Programming"
              skills={['Python', 'JavaScript', 'React', 'Next.js', 'TypeScript']}
            />
            <SkillCard
              className="col-span-4 sm:col-span-8 lg:col-span-4"
              title="Data Science & ML"
              skills={['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'SQL', 'R']}
            />
            <SkillCard
              className="col-span-4 sm:col-span-8 lg:col-span-4"
              title="Product Management"
              skills={['Agile', 'Scrum', 'Team Leadership', 'Strategic Planning']}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
