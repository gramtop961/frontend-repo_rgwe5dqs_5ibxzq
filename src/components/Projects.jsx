import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Rss } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collab Board',
    description:
      'A multiplayer whiteboard with low-latency cursors, drawing tools, and offline sync.',
    stack: ['Next.js', 'React', 'WebSockets', 'Tailwind', 'Redis'],
    features: [
      'Operational transforms for conflict-free edits',
      'Presence indicators and avatar cursors',
      'SSR + edge caching for instant loads',
    ],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    repo: '#',
    contribution: 'Architected the real-time layer and UI state sync.',
    impact: 'Reduced sync conflicts by 85%, DAU +40%.',
  },
  {
    title: 'AI Docs Summarizer',
    description: 'Summarize and chat with PDFs using RAG and embeddings.',
    stack: ['React', 'FastAPI', 'Postgres', 'OpenAI', 'Tailwind'],
    features: ['Chunking + vector store', 'Citations + source page links', 'Streaming responses'],
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    repo: '#',
    contribution: 'Built ingestion pipeline and chat UX.',
    impact: 'Cut doc search time by 60% for pilot users.',
  },
  {
    title: 'Schedjuice Calendar',
    description: 'Scheduling platform with assignment calendars and dynamic forms.',
    stack: ['Django', 'React', 'PostgreSQL', 'Celery'],
    features: ['Recurring events', 'iCal sync', 'Cascading location selects'],
    image: 'https://images.unsplash.com/photo-1560972550-aba3456b5564?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    repo: '#',
    contribution: 'Delivered calendar views and dynamic address forms.',
    impact: 'Improved scheduling efficiency by 35%.',
  },
];

const posts = [
  {
    title: 'Designing frictionless real‑time UX',
    summary: 'Patterns for presence, cursor sync, and conflict resolution that feel magical.',
    date: 'Oct 2025',
    href: '#',
  },
  {
    title: 'Taming performance budgets in modern React',
    summary: 'Practical steps to keep bundles lean while shipping rich interactions.',
    date: 'Sep 2025',
    href: '#',
  },
  {
    title: 'A pragmatic intro to 3D on the web',
    summary: 'Where 3D shines, where it doesn’t, and how to integrate it thoughtfully.',
    date: 'Aug 2025',
    href: '#',
  },
];

function ProjectCard({ project }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1;
    const py = (y / rect.height) * 2 - 1;
    setTilt({ x: py * -8, y: px * 8 });
  };
  const onMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Conic gradient hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'conic-gradient(from 180deg at 50% 50%, rgba(99,102,241,0.25), rgba(14,165,233,0.25), rgba(99,102,241,0.25))',
          }}
        />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          {project.stack.map((s) => (
            <span key={s} className="rounded-full bg-indigo-500/15 px-2 py-1 text-xs text-indigo-200">
              {s}
            </span>
          ))}
        </div>
        <h3 className="mt-3 text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-indigo-100/90">{project.description}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-indigo-100/80">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-indigo-200/80">
          <span className="font-medium">Contribution:</span> {project.contribution}
        </p>
        <p className="text-xs text-indigo-200/80">
          <span className="font-medium">Impact:</span> {project.impact}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <a
            href={project.demo}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs text-white backdrop-blur transition hover:bg-white/20"
          >
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
          <a
            href={project.repo}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs text-white backdrop-blur transition hover:bg-white/20"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-0 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Featured Projects</h2>
          <p className="mt-2 max-w-2xl text-indigo-100/80">
            A selection of quality builds. Each project focuses on real-world impact and performance.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      {/* Blog feed */}
      <div className="mt-16">
        <div className="mb-6 inline-flex items-center gap-2 text-indigo-200">
          <Rss className="h-4 w-4" />
          <h3 className="text-xl font-semibold text-white">Latest Posts</h3>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <a key={post.title} href={post.href} className="block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
              <p className="text-xs text-indigo-300/80">{post.date}</p>
              <h4 className="mt-1 text-base font-semibold text-white">{post.title}</h4>
              <p className="mt-2 text-sm text-indigo-100/90">{post.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
