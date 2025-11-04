import React, { useMemo, useState } from 'react';
import { Mail, Send, MessageSquare, User } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio contact from ${name || 'Guest'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    return `mailto:azrael@example.com?subject=${subject}&body=${body}`;
  }, [name, email, message]);

  return (
    <section id="contact" className="relative w-full bg-neutral-950 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-16 md:py-20">
        <div className="mb-8 flex items-center gap-2 text-teal-300">
          <Mail className="h-5 w-5" />
          <h2 className="text-xl sm:text-2xl font-semibold">Contact</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-medium text-white/90">Let’s build something great</h3>
            <p className="mt-2 text-sm text-white/70">
              I’m open to freelance work, consulting, and full‑time roles. Share a few details and I’ll get back to you.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-teal-300" />
                <a href="mailto:azrael@example.com" className="hover:underline">azrael@example.com</a>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailtoHref;
            }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="grid gap-4">
              <label className="grid gap-2">
                <span className="text-xs uppercase tracking-wide text-white/60">Name</span>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-md border border-white/10 bg-neutral-900 pl-10 pr-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-teal-500/60"
                  />
                </div>
              </label>
              <label className="grid gap-2">
                <span className="text-xs uppercase tracking-wide text-white/60">Email</span>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-white/10 bg-neutral-900 pl-10 pr-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-teal-500/60"
                  />
                </div>
              </label>
              <label className="grid gap-2">
                <span className="text-xs uppercase tracking-wide text-white/60">Message</span>
                <div className="relative">
                  <MessageSquare className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-white/40" />
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What would you like to build?"
                    rows={5}
                    className="w-full rounded-md border border-white/10 bg-neutral-900 pl-10 pr-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-teal-500/60"
                  />
                </div>
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-black hover:bg-teal-400 transition-colors"
              >
                <Send className="h-4 w-4" /> Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
