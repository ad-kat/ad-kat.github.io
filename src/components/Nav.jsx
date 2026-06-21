import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { id: 'work', label: 'work' },
  { id: 'projects', label: 'projects' },
  { id: 'publications', label: 'publications' },
  { id: 'skills', label: 'skills' },
  { id: 'contact', label: 'contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-canvas/90 backdrop-blur border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm text-ink" onClick={() => setOpen(false)}>
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-line bg-panel text-pink">
            A
          </span>
          <span className="hidden sm:inline text-mute">adri-katyayan</span>
        </a>

        <ul className="hidden items-center gap-6 font-mono text-xs uppercase tracking-wider text-mute md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/Adri_Katyayan_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line bg-panel px-3 py-1.5 font-mono text-xs text-ink transition-colors hover:border-violet hover:text-violet"
          >
            resume.pdf
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-panel text-ink md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`}
              />
              <span className={`absolute left-0 top-1.5 h-px w-4 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span
                className={`absolute left-0 top-3 h-px w-4 bg-current transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line font-mono text-sm uppercase tracking-wider text-mute md:hidden"
          >
            {links.map((l) => (
              <li key={l.id} className="border-b border-line last:border-b-0">
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 transition-colors hover:bg-panel hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}