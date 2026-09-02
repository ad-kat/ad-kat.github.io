import { motion } from 'framer-motion'
import { profile } from '../data/data.js'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-36">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-canvas via-canvas/60 to-canvas" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="font-display text-5xl font-semibold leading-[1.05] text-gradient sm:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.5 }}
          className="mt-4 mx-auto max-w-2xl font-mono text-sm text-pink sm:text-base"
        >
          {profile.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-3 text-base text-mute sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.5 }}
          className="mt-8 flex flex-wrap gap-3 justify-center"
        >
          <a
            href="#projects"
            className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-violet hover:text-violet"
          >
            view projects
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-violet hover:text-violet"
          >
            linkedin ↗
          </a>
          <a
           href={`mailto:${profile.email}`}
            className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-violet hover:text-violet"
          >
            email me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-violet hover:text-violet"
          >
            github ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}