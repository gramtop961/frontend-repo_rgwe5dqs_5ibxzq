import React from 'react';
import { Star } from 'lucide-react';

const skills = [
  {
    title: 'Languages',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend & DB',
    items: ['Node.js', 'Django', 'PostgreSQL', 'Firebase'],
  },
  {
    title: 'Design & 3D',
    items: ['Figma', 'Three.js'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-neutral-950 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-16 md:py-20">
        <div className="mb-8 flex items-center gap-2 text-teal-300">
          <Star className="h-5 w-5" />
          <h2 className="text-xl sm:text-2xl font-semibold">Skills</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.title} className="rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-medium text-white/90">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
