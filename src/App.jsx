import React from 'react';
import Hero3D from './components/Hero3D';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto w-full max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-teal-500 text-black font-semibold">A</span>
            <span className="text-sm font-medium text-white/85">Azrael</span>
          </a>
          <nav className="hidden sm:flex items-center gap-5 text-sm text-white/75">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero3D />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <span>© {new Date().getFullYear()} Azrael. Built with React, Vite, and Tailwind.</span>
          <div className="flex items-center gap-4">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
