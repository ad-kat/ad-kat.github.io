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

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

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
          <img src="/crest.png" alt="" className="h-8 w-8 object-contain" />
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
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-panel text-ink md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`absolute left-0 top-1.5 h-px w-4 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-3 h-px w-4 bg-current transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
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