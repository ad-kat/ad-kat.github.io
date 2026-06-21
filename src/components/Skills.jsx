import { motion } from 'framer-motion'
import { skillGroups } from '../data/data.js'

const groupColors = ['text-violet', 'text-pink', 'text-orchid', 'text-plum', 'text-lilac']

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-lilac">toolbox</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">Skills</h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-lg border border-line bg-panel p-5"
          >
            <p className={`font-mono text-xs uppercase tracking-wider ${groupColors[i % groupColors.length]}`}>
              {group.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-line bg-panel2 px-2.5 py-1 font-mono text-[11px] text-mute"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}