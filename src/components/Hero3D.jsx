import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Github, Linkedin, Rocket } from 'lucide-react';

// Swapped to a different Spline scene for a fresh visual feel
const SCENE_URL = 'https://prod.spline.design/4A4oYwP2t9kD0n86/scene.splinecode';

export default function Hero3D() {
  return (
    <section className="relative w-full bg-neutral-950 text-white">
      <div className="relative h-[72vh] sm:h-[78vh] md:h-[82vh] lg:h-[88vh] w-full">
        <Spline scene={SCENE_URL} style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient for readability without blocking interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/10 via-neutral-950/30 to-neutral-950" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-6xl px-4 pb-10 sm:pb-14 md:pb-16">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-white/80 backdrop-blur">
              <Rocket className="h-4 w-4 text-teal-300" />
              <span>Full‑Stack Developer — TypeScript • React • Node • Postgres</span>
            </div>
            <h1 className="font-semibold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Azrael — crafting fast, modern web experiences
            </h1>
            <p className="mt-3 text-white/80 max-w-xl text-sm sm:text-base">
              I design and build polished products end‑to‑end: typed component APIs, accessible UX, and scalable backends.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:azrael@example.com"
                className="inline-flex items-center gap-2 rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-black hover:bg-teal-400 transition-colors"
              >
                <Mail className="h-4 w-4" /> Contact
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
