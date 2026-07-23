import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, projectTags, profile } from '../data/data.js'

const tagStyle = {
  'AI/ML': 'border-violet/40 text-violet',
  Systems: 'border-pink/40 text-pink',
  Health: 'border-plum/40 text-plum',
  Web: 'border-orchid/40 text-orchid',
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.tags.includes(active))),
    [active]
  )

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-orchid">selected work</p>
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
              className="group rounded-lg border border-line bg-panel p-6 transition-colors hover:border-orchid/50"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-medium text-ink">{p.title}</h3>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" title="GitHub Repository" className="text-violet hover:text-ink transition-colors">
                      <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor" aria-label="GitHub">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <span className="shrink-0 rounded-md border border-line bg-panel2 px-2 py-1 font-mono text-[10px] text-orchid">
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