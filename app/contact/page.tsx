'use client';

import BackButton from '../components/BackButton';

export default function Contact() {
  return (
    <div className="min-h-screen bg-paper text-fg">
      <div className="section-y">
        <div className="wrap">
          <h1 className="font-serif text-40 font-normal uppercase text-fg sm:text-56">Contact Me</h1>

          <div className="mt-10 flex flex-col items-start gap-3 sm:mt-16 sm:gap-4">
            <a href="mailto:sharm215@msu.edu" className="text-link font-serif text-20 sm:text-28">
              sharm215@msu.edu
            </a>
            <p className="font-serif text-20 text-fg sm:text-28">Plano, Texas</p>
            <a
              href="https://www.linkedin.com/in/arya-sharma-535262228/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link font-serif text-20 sm:text-28"
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-10 sm:mt-16">
            <BackButton href="/" text="Back to Home" />
          </div>
        </div>
      </div>
    </div>
  );
}
