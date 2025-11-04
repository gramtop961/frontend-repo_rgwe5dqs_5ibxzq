import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const roles = [
  {
    company: 'Stellar Labs',
    title: 'Senior Frontend Engineer',
    period: '2023 — Present',
    points: [
      'Architected a micro-frontend platform supporting 10+ teams.',
      'Led performance efforts: 35% faster TTI across pages.',
    ],
  },
  {
    company: 'Orbit Systems',
    title: 'Product Engineer',
    period: '2021 — 2023',
    points: [
      'Shipped a design system used in 6 production apps.',
      'Built realtime dashboards for 100k+ monthly users.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Experience</h2>
        <p className="mt-2 text-white/60">Building immersive interfaces and robust systems.</p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-fuchsia-300/40 via-white/10 to-transparent sm:left-6" />
        <ul className="space-y-8">
          {roles.map((r, i) => (
            <motion.li
              key={r.company}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 pl-16 backdrop-blur-xl"
            >
              <div className="absolute left-0 top-6 ml-2 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/40 text-fuchsia-200 shadow-lg shadow-fuchsia-500/10 sm:ml-4">
                <Briefcase className="h-5 w-5" />
              </div>
              <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_30%_0%,rgba(168,85,247,0.15),transparent_60%)]" />
              </div>
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <h3 className="text-lg font-semibold text-white">{r.title}</h3>
                <span className="text-sm text-white/60">{r.period}</span>
              </div>
              <p className="text-white/70">{r.company}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
