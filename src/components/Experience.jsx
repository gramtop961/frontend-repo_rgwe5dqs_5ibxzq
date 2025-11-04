import React from 'react';
import { Briefcase, Star } from 'lucide-react';

const experiences = [
  {
    company: 'ReviseRoom',
    role: 'Software Engineer',
    period: 'Jun 2025 – Present',
    highlights: [
      'Platform for 300+ students; past papers, guides, study materials',
      'Multiplayer quiz with leaderboards, scoring, anti‑cheat',
      '1‑on‑1 tutoring bookings; responsive UI with light/dark themes',
    ],
  },
  {
    company: 'Superbase',
    role: 'Full‑Stack Developer',
    period: 'Jul 2025 – Present',
    highlights: [
      'Features: student count, join codes, teacher check‑in',
      'Fixed UX bugs (toasts, auth/photo states, request link errors)',
      'Backend logic: billing calculations, attendance code generation',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-neutral-950 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-16 md:py-20">
        <div className="mb-8 flex items-center gap-2 text-teal-300">
          <Briefcase className="h-5 w-5" />
          <h2 className="text-xl sm:text-2xl font-semibold">Experience</h2>
        </div>
        <div className="grid gap-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-medium">
                  {exp.company}
                  <span className="mx-2 text-white/40">•</span>
                  <span className="text-white/80">{exp.role}</span>
                </h3>
                <span className="text-xs sm:text-sm text-white/60">{exp.period}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <Star className="mt-0.5 h-4 w-4 text-teal-300 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
