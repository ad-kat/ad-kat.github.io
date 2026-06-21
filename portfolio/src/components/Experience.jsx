import { motion } from 'framer-motion'
import { experience } from '../data/data.js'

export default function Experience() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-widest text-pink"
      >
        work
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl"
      >
        Experience
      </motion.h2>

      <div className="mt-10 border-l border-line">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative pb-12 pl-8 last:pb-0"
          >
            <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-canvas bg-violet" />
            <p className="font-mono text-xs text-mute">{job.period}</p>
            <h3 className="mt-1 font-display text-xl font-medium text-ink">{job.company}</h3>
            <p className="font-mono text-xs text-pink">
              {job.role} · {job.location}
            </p>
            <ul className="mt-3 space-y-1.5">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-mute">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}