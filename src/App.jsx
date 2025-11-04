import React from 'react';
import Hero3D from './components/Hero3D';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Rocket } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-20">
        <div className="mx-auto w-full max-w-7xl px-6 py-4">
          <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">
            <a href="#home" className="inline-flex items-center gap-2 text-white">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-500">
                <Rocket className="h-4 w-4" />
              </span>
              <span className="hidden text-sm font-semibold sm:inline">Cosmic Portfolio</span>
            </a>
            <div className="flex items-center gap-2 sm:gap-4">
              <a href="#projects" className="rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white">Projects</a>
              <a href="#experience" className="rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white">Experience</a>
              <a href="#contact" className="rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero3D />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-white/60">
          <p>
            Built with React + Tailwind. Visuals powered by Spline. Crafted for a futuristic, cosmic aesthetic.
          </p>
        </div>
      </footer>
    </div>
  );
}
