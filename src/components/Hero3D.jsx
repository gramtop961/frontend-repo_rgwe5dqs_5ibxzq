import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Download, Mail, Rocket, Github, Linkedin, Info } from 'lucide-react';

export default function Hero3D({ onScrollTo }) {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 100, damping: 20 });
  const ref = useRef(null);

  useEffect(() => setMounted(true), []);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const glowStyle = useMemo(
    () => ({
      background: glowX && glowY ? undefined : undefined,
    }),
    [glowX, glowY]
  );

  const glowTranslate = {
    x: useTransform(glowX, (v) => v - 150),
    y: useTransform(glowY, (v) => v - 150),
  };

  // Magnetic button effect
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);
  const onMagnetMove = (e) => {
    const el = magnetRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const strength = 0.12;
    setMagnet({ x: x * strength, y: y * strength });
  };
  const onMagnetLeave = () => setMagnet({ x: 0, y: 0 });

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white dark:from-black dark:via-slate-900 dark:to-slate-950"
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Cursor-follow neon glow */}
      <motion.div
        className="pointer-events-none absolute h-[300px] w-[300px] rounded-full opacity-40 blur-3xl"
        style={{
          x: glowTranslate.x,
          y: glowTranslate.y,
          background:
            'radial-gradient(circle at center, rgba(99,102,241,0.35), rgba(14,165,233,0.25) 50%, transparent 70%)',
        }}
      />

      {/* Layered parallax mists */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* Overlay gradients that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      <div className="relative mx-auto flex max-w-7xl flex-col px-6 pt-28 pb-24 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <Rocket className="h-4 w-4 text-indigo-300" />
            <span className="text-xs uppercase tracking-widest text-indigo-200/90">Azrael — Full-Stack Developer</span>
          </div>

          <h1 className="text-balance bg-gradient-to-br from-white via-indigo-200 to-cyan-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
            Building performant, human-centered web apps with modern JS and system design precision.
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-indigo-100/90 md:text-base">
            React, Next.js, Django — shipping delightful, accessible interfaces backed by robust systems.
          </p>

          <div
            ref={magnetRef}
            onMouseMove={onMagnetMove}
            onMouseLeave={onMagnetLeave}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href="#projects"
              style={{ x: magnet.x, y: magnet.y }}
              className="group relative inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <span>View Projects</span>
            </motion.a>
            <motion.a
              href="#contact"
              style={{ x: magnet.x, y: magnet.y }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <Mail className="h-4 w-4" />
              <span>Get in Touch</span>
            </motion.a>
            <motion.a
              href="/Azrael-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ x: magnet.x, y: magnet.y }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </motion.a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm text-indigo-100/80">
            <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* About Me mini-section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-14 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="mb-2 inline-flex items-center gap-2 text-indigo-200">
            <Info className="h-4 w-4" />
            <span className="text-sm font-medium">About Me</span>
          </div>
          <p className="text-indigo-100/90 text-sm md:text-base">
            I’m a builder who loves turning complex problems into elegant, fast experiences. My focus areas are design systems, real‑time UX, and scalable APIs. When not coding, I explore 3D, sound design, and motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
