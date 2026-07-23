import { profile } from '../data/data.js'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-panel/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-pink">contact</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Let's build something.
        </h2>
        <p className="mt-3 max-w-xl text-mute">
          Interested in AI infrastructure, ML systems, and backend engineering (Parts where research
          ideas turn into things that actually run in production).
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md bg-violet px-5 py-2.5 font-mono text-sm font-medium text-canvas"
          >
            gmail
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-ink hover:border-violet hover:text-violet"
          >
            linkedin
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-ink hover:border-violet hover:text-violet"
          >
            github
          </a>
          <a
            href={profile.orcid}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-ink hover:border-violet hover:text-violet"
          >
            orcid
          </a>
          <a
            href={profile.researchgate}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-ink hover:border-violet hover:text-violet"
          >
            researchgate
          </a>
        </div>
      </div>
    </footer>
  )
}