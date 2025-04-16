import BackgroundImage from './components/BackgroundImage';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <BackgroundImage />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto backdrop-blur-md bg-black/30 p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h1 className="text-7xl font-bold mb-6 text-white">
                Arya Sharma
              </h1>
              <p className="text-2xl mb-4 text-cyan-300 font-light">
                Computer Science & Project Management Professional
              </p>
              <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
                Transforming ideas into elegant solutions through code and strategic project management
              </p>
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
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 purple-accent">My Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Software Development",
                description: "Full-stack development with modern frameworks and best practices",
                icon: "💻"
              },
              {
                title: "Project Management",
                description: "Agile methodologies, team leadership, and strategic planning",
                icon: "📊"
              },
              {
                title: "Problem Solving",
                description: "Analytical thinking and creative solutions for complex challenges",
                icon: "🧩"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="glass-card p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 purple-accent">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-card p-8 backdrop-blur-md bg-black/30 border border-white/10 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Resume</h2>
            <p className="text-xl text-gray-300 mb-6">
              View my professional experience and skills
            </p>
            <a
              href="/resume.pdf"
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Arya Sharma. All rights reserved.</p>
      </footer>
    </main>
  );
} 