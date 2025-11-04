import { Mail, Github, Linkedin, FileText } from 'lucide-react';

export default function Contact() {
  const email = 'azrael@example.com';

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Contact</h2>
        <p className="mt-2 max-w-2xl text-indigo-100/80">Open to collaborations, internships, and interesting problems.</p>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity hover:opacity-100"
          style={{
            background:
              'radial-gradient(800px circle at 20% 10%, rgba(14,165,233,0.10), transparent 35%), radial-gradient(900px circle at 80% 90%, rgba(99,102,241,0.10), transparent 40%)',
          }}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-white">Let’s build something great</h3>
            <p className="mt-2 text-indigo-100/90">
              I design and ship full-stack products with a focus on performance and UX. Reach out and we’ll talk scope, timelines, and impact.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a href={`mailto:${email}`} className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-4 py-2 text-sm text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110">
                <Mail className="h-4 w-4" /> Email Me
              </a>
              <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/20">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/20">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="/Azrael-Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/20">
                <FileText className="h-4 w-4" /> Resume
              </a>
            </div>
          </div>
          <div>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = form.name.value;
                const msg = form.message.value;
                const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
                const body = encodeURIComponent(msg);
                window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
              }}
            >
              <div>
                <label className="mb-2 block text-sm text-indigo-100/90">Name</label>
                <input
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white outline-none ring-0 placeholder:text-indigo-300/40 focus:border-indigo-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-indigo-100/90">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white outline-none ring-0 placeholder:text-indigo-300/40 focus:border-indigo-400"
                  placeholder="Tell me about your project or idea"
                />
              </div>
              <button type="submit" className="w-full rounded-lg bg-indigo-500 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
