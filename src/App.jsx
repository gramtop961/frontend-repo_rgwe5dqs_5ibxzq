import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import Hero3D from './components/Hero3D';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

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
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/40 py-6 text-center text-sm text-indigo-200/70">
        © {new Date().getFullYear()} Azrael. Crafted with React, Tailwind, and a dash of 3D.
      </footer>
    </div>
  );
}
