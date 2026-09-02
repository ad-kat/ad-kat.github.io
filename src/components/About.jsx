import { motion } from 'framer-motion'
import { education, certifications } from '../data/data.js'

function Reveal({ children, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-pink">background</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
          About me
        </h2>
        <p className="mt-2 text-mute">
          I'm a software engineer, building backend systems and agent infrastructure. Most of my work goes into reliability, edge cases and things that only show up when traffic spikes or an LLM times out mid-run. That's been most of what I've worked on at DevRev. I'm more interested in systems that hold under pressure than ones that look good in a demo. Outside this, I do embroidery and mandala art. Both are about working inside tight constraints. You have a grid, you work within it, and the interesting decisions happen when you push against it. Not a bad way to think about software either.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-lg border border-line bg-panel p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-violet">education</p>
            <ul className="mt-4 space-y-5">
              {education.map((e) => (
                <li key={e.school}>
                  <p className="font-display text-lg font-medium text-ink">{e.school}</p>
                  <p className="text-sm text-mute">{e.degree}</p>
                  <p className="mt-1 font-mono text-xs text-mute">
                    {e.location} · {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="h-full rounded-lg border border-line bg-panel p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-violet">certifications</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {certifications.map((c) => (
                <a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line bg-panel2 px-3 py-1.5 font-mono text-xs text-mute transition-colors hover:border-gold hover:text-gold"
                >
                  {c.name} ↗
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}