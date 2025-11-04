import { Suspense, lazy, useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import Hero3D from './components/Hero3D';

const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased dark:bg-black">
      {/* Fixed transparent nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wide text-indigo-200 hover:text-white">
            Azrael — Full-Stack Developer | React, Next.js, Django
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#projects" className="text-sm text-indigo-100/80 hover:text-white">Projects</a>
            <a href="#experience" className="text-sm text-indigo-100/80 hover:text-white">Experience</a>
            <a href="#contact" className="text-sm text-indigo-100/80 hover:text-white">Contact</a>
          </nav>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className="inline-flex rounded-full border border-white/15 bg-white/10 p-2 text-indigo-100 backdrop-blur transition hover:bg-white/20"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Sections */}
      <main className="relative">
        <Hero3D />
        <Suspense fallback={<SectionLoader label="Loading projects" />}> 
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader label="Loading experience" />}> 
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionLoader label="Loading contact" />}> 
          <Contact />
        </Suspense>
      </main>

      <footer className="border-t border-white/10 bg-black/40 py-6 text-center text-sm text-indigo-200/70">
        © {new Date().getFullYear()} Azrael. Crafted with React, Tailwind, and a dash of 3D.
      </footer>
    </div>
  );
}

function SectionLoader({ label }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-indigo-400 border-t-transparent" />
      <p className="mt-3 text-sm text-indigo-200/80">{label}…</p>
    </div>
  );
}
