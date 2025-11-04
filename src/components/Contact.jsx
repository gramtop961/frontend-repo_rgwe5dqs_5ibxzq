import React, { useMemo, useState } from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'Visitor'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` • ${email}` : ''}`);
    return `mailto:you@example.com?subject=${subject}&body=${body}`;
  }, [name, email, message]);

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-24">
      <div className="mx-auto mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Get in touch</h2>
        <p className="mt-2 text-white/60">Have an idea or opportunity? Let’s make something unforgettable.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
      >
        <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(168,85,247,0.12),transparent_60%)]" />
        </div>
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-white/70">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 transition focus:border-fuchsia-400/40"
              placeholder="Ada Lovelace"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-white/70">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 transition focus:border-cyan-400/40"
              placeholder="you@domain.com"
            />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm text-white/70">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 transition focus:border-fuchsia-400/40"
            placeholder="Tell me about your vision…"
          />
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-white/70">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:scale-[1.03] hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:scale-[1.03] hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
          <a
            href={mailto}
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-5 py-3 font-medium text-white shadow-lg shadow-fuchsia-500/20 transition [transform:perspective(800px)_translateZ(0)] hover:scale-[1.02] hover:shadow-cyan-500/20 hover:[transform:perspective(800px)_translateZ(16px)]"
          >
            <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Send Message
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/20" />
          </a>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-10 -z-0 mx-auto h-40 max-w-3xl bg-gradient-to-r from-fuchsia-500/20 via-cyan-500/20 to-violet-500/20 blur-3xl" />
    </section>
  );
}
