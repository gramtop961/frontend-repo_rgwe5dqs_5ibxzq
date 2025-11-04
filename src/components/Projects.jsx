import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star } from 'lucide-react';

const projects = [
  {
    title: 'Nebula Navigator',
    desc: 'A real-time 3D space visualizer blending WebGL and physics for mesmerizing starfield journeys.',
    tags: ['Three.js', 'WebGL', 'FastAPI'],
    highlight: true,
  },
  {
    title: 'Hologram UI Kit',
    desc: 'A neon, glassy component kit with focus on micro-interactions and performance.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Cosmic Commerce',
    desc: 'Headless storefront with immersive product previews and AR try-ons.',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
          <p className="mt-2 text-white/60">Select work engineered for speed, beauty, and impact.</p>
        </div>
        <div className="hidden sm:block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-md">
          <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-amber-300" /> Curated</span>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            whileHover={{ rotateX: 2, rotateY: -2, translateZ: 12 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition will-change-transform ${
              p.highlight ? 'ring-1 ring-fuchsia-400/20' : ''
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(168,85,247,0.15),rgba(34,211,238,0.12),transparent_40%)]" />
            </div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
              <Rocket className="h-4 w-4 text-fuchsia-300" />
              {p.highlight ? 'Flagship' : 'Project'}
            </div>
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-white/70">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
