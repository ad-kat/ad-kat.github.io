import { useState } from 'react'

const pitches = [
  {
    label: 'SWE (Amazon, Google, Microsoft…)',
    body: `I build things that work at scale and I understand what's happening under the hood. At DevRev, I traced a production bug across 7 regions in a live LangGraph + Temporal stack, fixed it behind a feature flag, and validated it end-to-end. I've shipped billing lifecycle integrations, real-time speech pipelines, and guardrail audit systems — not demos, production code.`,
  },
  {
    label: 'Systems (Qualcomm, Nvidia, Broadcom…)',
    body: `I understand hardware-adjacent systems, I work in C and C++, and I have published research touching signal processing and ML optimization. My graduate research combines YAMNet, WebRTC VAD, and Whisper at sub-400ms latency — that's a real-time DSP pipeline, not a notebook. I know what it means to optimize at the layer below the framework.`,
  },
  {
    label: 'Fintech (Intuit, PayPal, HSBC…)',
    body: `I have built billing systems, compliance pipelines, and financial data infrastructure, and I understand what data integrity means in production. I integrated 8 Stripe API endpoints covering the full billing lifecycle, built an audit pipeline that pages through 500+ conversations with exponential-backoff retry, and auto-files structured security tickets for system-prompt leaks. I treat correctness as a hard constraint, not a nice-to-have.`,
  },
]

export default function WhyHireMe() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="rounded-xl border-2 border-violet bg-panel px-8 py-8 text-center shadow-sm">
        <p className="font-display text-xs uppercase tracking-widest text-mute mb-2">For Recruiters</p>
        <h2 className="font-display text-3xl font-bold text-ink mb-3">Why You Should Hire Me</h2>
        <p className="text-mute text-sm mb-6 max-w-xl mx-auto">
          I don't just study systems — I ship them. Click below for the pitch tailored to your team.
        </p>
        <button
          onClick={() => setOpen(true)}
          className="rounded-md bg-violet px-7 py-3 font-display text-sm font-semibold text-canvas hover:bg-orchid transition-colors"
        >
          Read the Pitch →
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl rounded-xl border border-line bg-panel p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-mute hover:text-ink text-xl font-bold"
              aria-label="Close"
            >✕</button>

            <h3 className="font-display text-2xl font-bold text-ink mb-1">Why You Should Hire Me</h3>
            <p className="text-mute text-xs mb-5">Pick the track that matches your team:</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {pitches.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-md border px-4 py-1.5 text-xs font-semibold transition-colors ${
                    active === i
                      ? 'border-violet bg-violet text-canvas'
                      : 'border-line text-mute hover:border-violet hover:text-violet'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <p className="text-ink leading-relaxed text-sm">{pitches[active].body}</p>
          </div>
        </div>
      )}
    </section>
  )
}