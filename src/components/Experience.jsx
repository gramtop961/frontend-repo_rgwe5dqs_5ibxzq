import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    role: 'Full-Stack Intern',
    org: 'Schedjuice',
    period: 'Jun 2023 – Dec 2023',
    points: [
      'Implemented assignment calendar with recurrence and reminders',
      'Dynamic Myanmar address form with cascading selects',
      'Improved test coverage and CI reliability',
    ],
  },
  {
    role: 'Open-Source Contributor',
    org: 'Various',
    period: '2022 – Present',
    points: [
      'PRs to React ecosystem packages and UI libraries',
      'Docs and examples for accessibility patterns',
    ],
  },
];

const education = [
  {
    title: 'B.S. in Computer Science',
    org: 'University',
    period: 'Expected 2026',
    points: ['IGCSE background', 'Systems + web focus'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Experience & Education</h2>
        <p className="mt-2 max-w-2xl text-indigo-100/80">
          Credible, hands-on work and a strong academic foundation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-indigo-200">
            <Briefcase className="h-4 w-4" /> Internships & Roles
          </div>
          <div className="space-y-5">
            {experiences.map((exp) => (
              <div key={exp.role} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(1200px circle at var(--x,50%) var(--y,50%), rgba(99,102,241,0.12), transparent 40%)',
                  }}
                />
                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                <p className="text-sm text-indigo-200">{exp.org} • {exp.period}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-indigo-100/90">
                  {exp.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-indigo-200">
            <GraduationCap className="h-4 w-4" /> Education
          </div>
          <div className="space-y-5">
            {education.map((ed) => (
              <div key={ed.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">{ed.title}</h3>
                <p className="text-sm text-indigo-200">{ed.org} • {ed.period}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-indigo-100/90">
                  {ed.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
