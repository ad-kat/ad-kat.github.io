import { motion } from 'framer-motion'
import { publications, profile } from '../data/data.js'

export default function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-pink">research</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">Publications</h2>
      <p className="mt-3 max-w-2xl text-sm text-mute">
        Peer-reviewed work on tele-audiology and AI-assisted ear-disease screening, written with an ENT
        research group in Lucknow, India, during and after the COVID era.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <a
          href={profile.orcid}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-xs text-mute transition-colors hover:border-violet hover:text-violet"
        >
          ORCID ↗
        </a>
        <a
          href={profile.researchgate}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-xs text-mute transition-colors hover:border-violet hover:text-violet"
        >
          ResearchGate ↗
        </a>
      </div>

      <div className="mt-8 space-y-5">
        {publications.map((pub, i) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-lg border border-line bg-panel p-6 transition-colors hover:border-violet/50"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <h3 className="font-display text-base font-medium text-ink sm:text-lg">{pub.title}</h3>
              <a
                href={pub.doi}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 font-mono text-xs text-violet hover:underline"
              >
                view doi →
              </a>
            </div>
            <p className="mt-1 font-mono text-xs text-mute">
              {pub.venue} · {pub.date}
            </p>
            <p className="mt-3 text-sm text-mute">{pub.summary}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}