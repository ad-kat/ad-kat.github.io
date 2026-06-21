import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, projectTags, profile } from '../data/data.js'

const tagStyle = {
  'AI/ML': 'border-violet/40 text-violet',
  Systems: 'border-pink/40 text-pink',
  Health: 'border-plum/40 text-plum',
  Web: 'border-mute/40 text-mute',
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.tags.includes(active))),
    [active]
  )

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-pink">selected work</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">Projects</h2>

      <div className="mt-6 flex flex-wrap gap-2">
        {projectTags.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
              active === t
                ? 'border-violet bg-violet/10 text-violet'
                : 'border-line text-mute hover:border-mute hover:text-ink'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="group rounded-lg border border-line bg-panel p-6 transition-colors hover:border-violet/50"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-medium text-ink">{p.title}</h3>
                <span className="shrink-0 rounded-md border border-line bg-panel2 px-2 py-1 font-mono text-[10px] text-violet">
                  {p.metric}
                </span>
              </div>

              <p className="mt-1 font-mono text-[11px] text-mute">{p.stack}</p>

              <ul className="mt-4 space-y-1.5">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-mute">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] ${tagStyle[t]}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-[10px] text-mute">{p.period}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="mt-6 font-mono text-xs text-mute">
        full source on{' '}
        <a href={profile.github} target="_blank" rel="noreferrer" className="text-violet hover:underline">
          github.com/ad-kat
        </a>
      </p>
    </section>
  )
}