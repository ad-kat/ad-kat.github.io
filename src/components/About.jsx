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
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-pink">background</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Building the infrastructure that makes AI actually work.
        </h2>
        <p className="mt-4 max-w-2xl text-mute">
  Started in backend and data systems, ended up building agent infrastructure at DevRev — 
  shipping real features for Kilmer, a negotiation-advisor agent in active beta. 
  Five peer-reviewed papers in clinical AI on the side, because apparently that happened too. 
  Most interested in the parts nobody glamorizes: what breaks under load, 
  what the agent does when the LLM goes silent, and whether the thing actually ships.
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
                <span
                  key={c}
                  className="rounded-full border border-line bg-panel2 px-3 py-1.5 font-mono text-xs text-mute"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}