const strengths = [
  {
    title: 'I get productive in unfamiliar systems.',
    body: 'At DevRev, I traced an LLM routing failure across LangGraph, Temporal, gRPC, model gateways, streaming, and provider APIs. I identified the client compatibility issue, shipped the fix behind a feature flag, and validated the affected flows with integration tests.',
  },
  {
    title: 'I work across abstraction layers.',
    body: 'My work spans C++ performance engineering, Rust and Linux networking, Python services, databases, AI infrastructure, and React interfaces. I can follow a problem across the stack instead of treating framework boundaries as handoffs.',
  },
  {
    title: 'I build for production, not just the demo.',
    body: 'I routinely add tests, retries, metrics, audit trails, caching, observability, and failure handling. I care about whether a system stays understandable and reliable after the first successful run.',
  },
]

const fits = [
  {
    title: 'Software and Product Engineering',
    body: 'Backend services, APIs, integrations, customer facing features, debugging, and full stack ownership.',
  },
  {
    title: 'AI and Agent Infrastructure',
    body: 'LLM routing, guardrails, agent workflows, model APIs, evaluation pipelines, streaming, and AI product features.',
  },
  {
    title: 'Systems and Performance',
    body: 'C++, Rust, Linux, networking, concurrency, profiling, latency sensitive systems, and performance measurement.',
  },
  {
    title: 'Fintech and Data Systems',
    body: 'Billing infrastructure, market systems, data pipelines, automation, analytics, and correctness sensitive workflows.',
  },
]

export default function WhyHireMe() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-violet">what I bring</p>

      <h2 className="mt-2 max-w-7xl font-display text-3xl font-semibold text-ink sm:text-4xl">
        I learn quickly and follow problems across the stack.
      </h2>

      <p className="mt-4 max-w-7xl text-mute leading-relaxed">
        I'm a new grad engineer who has already worked inside production systems, automated manual
        workflows, and built performance sensitive software from C++ services to React interfaces.
        I am most useful when a problem crosses boundaries and needs someone willing to understand
        the system, find the real issue, and carry the solution through implementation and testing.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {strengths.map((item) => (
          <div key={item.title} className="rounded-lg border border-line bg-panel p-6">
            <h3 className="font-display text-lg font-medium text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mute">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <p className="font-mono text-xs uppercase tracking-widest text-pink">where I can contribute</p>
        <div className="mt-5 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {fits.map((item) => (
            <div key={item.title} className="border-l-2 border-line pl-4">
              <h3 className="font-display text-lg font-medium text-ink">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-mute">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-10 max-w-7xl border-t border-line pt-6 text-sm text-mute">
        As a 2027 new grad, I bring hands on experience with production software and a broad
        technical base. I am looking for a team where I can contribute early, learn the system
        deeply, and take on more ownership as I build context.
      </p>
    </section>
  )
}