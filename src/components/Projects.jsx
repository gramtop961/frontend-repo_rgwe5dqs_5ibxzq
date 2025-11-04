import React from 'react';
import { Code } from 'lucide-react';

const projects = [
  {
    title: 'Portfolio Website',
    tech: ['React', 'TypeScript', 'Three.js', 'Tailwind CSS'],
    description: 'Modern, performance‑focused portfolio with 3D graphics, responsive design, and interactive visuals.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-neutral-950 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-16 md:py-20">
        <div className="mb-8 flex items-center gap-2 text-teal-300">
          <Code className="h-5 w-5" />
          <h2 className="text-xl sm:text-2xl font-semibold">Projects</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, idx) => (
            <a
              key={idx}
              href={p.link}
              className="group rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6 transition-colors hover:bg-white/[0.06]"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-medium">{p.title}</h3>
                <span className="text-xs text-white/60">Featured</span>
              </div>
              <p className="mt-2 text-sm text-white/75">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
