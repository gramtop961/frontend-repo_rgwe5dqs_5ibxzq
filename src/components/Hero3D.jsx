import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';

export default function Hero3D() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  // Cursor-follow glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 200, damping: 40 });
  const glowY = useSpring(mouseY, { stiffness: 200, damping: 40 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] w-full overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Layered gradient atmospherics (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_20%,rgba(168,85,247,0.25),transparent_60%)]" />

      {/* Cursor-following holographic glow */}
      <motion.div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          left: glowX,
          top: glowY,
          width: 420,
          height: 420,
          background:
            'radial-gradient(circle at center, rgba(168,85,247,0.18), rgba(34,211,238,0.12) 40%, transparent 70%)',
        }}
      />

      {/* Content */}
      <motion.div style={{ y: parallaxY }} className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-400" />
          <span className="text-xs font-medium tracking-wide text-white/80">
            Trippy galaxy rollercoaster experience
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 bg-[conic-gradient(at_50%_50%,#fff, #f5d0fe, #99f6e4, #e9d5ff, #fff)] bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Futuristic Portfolio
          <br className="hidden sm:block" />
          That Feels Alive
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 max-w-2xl text-balance text-base text-white/70 sm:text-lg"
        >
          Dive into a cosmic, neon-fueled universe. Explore selected work, experience, and the stack
          I use to build delightful, immersive products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 text-white shadow-xl shadow-fuchsia-500/25 transition [transform:perspective(800px)_translateZ(0)] hover:[transform:perspective(800px)_translateZ(18px)] focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <Rocket className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            Explore Projects
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/20" />
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white/90 backdrop-blur-md transition hover:scale-[1.03] hover:bg-white/10"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white/90 backdrop-blur-md transition hover:scale-[1.03] hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white/90 backdrop-blur-md transition hover:scale-[1.03] hover:bg-white/10"
            >
              <Mail className="h-5 w-5" />
              <span className="hidden sm:inline">Contact</span>
            </a>
          </div>
        </motion.div>

        {/* Orbiting micro-badges for flair */}
        <motion.div
          aria-hidden
          className="pointer-events-none relative mt-10 h-28 w-full max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="absolute left-10 top-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md"
            animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles className="h-4 w-4 text-fuchsia-300" />
            Holographic UI
          </motion.div>
          <motion.div
            className="absolute right-10 bottom-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md"
            animate={{ y: [0, 8, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Rocket className="h-4 w-4 text-cyan-300" />
            Motion Crafted
          </motion.div>
        </motion.div>

        {/* Bottom shimmer divider */}
        <div className="pointer-events-none relative mt-16 h-24 w-full">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute inset-x-1/4 bottom-0 h-12 bg-gradient-to-r from-fuchsia-500/20 via-cyan-500/20 to-violet-500/20 blur-3xl" />
        </div>
      </motion.div>
    </section>
  );
}
