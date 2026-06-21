export default function StatusLine({ text, tone = 'violet', pulse = false }) {
  const dotColor = tone === 'pink' ? 'bg-pink' : tone === 'plum' ? 'bg-plum' : 'bg-violet'
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs tracking-tight text-mute">
      <span className={`relative flex h-2 w-2`}>
        {pulse && (
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${dotColor} opacity-60`} />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${dotColor}`} />
      </span>
      {text}
    </span>
  )
}