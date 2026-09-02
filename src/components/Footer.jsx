import { profile } from '../data/data.js'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-panel/40">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <p className="font-mono text-xs uppercase tracking-widest text-pink">contact</p>
        <div className="mt-2 flex items-center gap-4">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Let's build something.
          </h2>
        </div>
        <p className="mt-2 font-mono text-xs text-mute">
          Upcoming New Grad 2027 
        </p>

        <div className="mt-4 flex flex-wrap gap-5 justify-between items-end">
          <a href={`mailto:${profile.email}`} className="font-mono text-xs text-mute hover:text-violet transition-colors">email me</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="font-mono text-xs text-mute hover:text-violet transition-colors">linkedin ↗</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="font-mono text-xs text-mute hover:text-violet transition-colors">github ↗</a>
          <a href={profile.orcid} target="_blank" rel="noreferrer" className="font-mono text-xs text-mute hover:text-violet transition-colors">orcid ↗</a>
          <a href={profile.researchgate} target="_blank" rel="noreferrer" className="font-mono text-xs text-mute hover:text-violet transition-colors">researchgate ↗</a>
          <img src="/crest.png" alt="crest" className="ml-auto h-8 w-8 opacity-50" />
        </div>
      </div>
    </footer>
  )
}