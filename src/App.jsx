import React from 'react';
import Hero3D from './components/Hero3D';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto w-full max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="text-sm font-medium text-white/80 hover:text-white">Azrael</a>
          <nav className="hidden sm:flex items-center gap-5 text-sm text-white/70">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#skills" className="hover:text-white">Skills</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero3D />
        <Projects />
        <Experience />
        <Skills />
      </main>

      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-xs text-white/60">
          © {new Date().getFullYear()} Azrael. Built with React, Vite, and Tailwind.
        </div>
      </footer>
    </div>
  );
}

export default App;
