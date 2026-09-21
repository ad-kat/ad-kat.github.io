const strengths = [
  {
    title: 'I get productive in unfamiliar domains.',
    body: 'I have worked across AI agents, supply-chain data, energy systems, healthcare, networking, and financial systems. I enjoy learning enough of the domain to understand the real constraint before deciding what to build.',
  },
  {
    title: 'I follow the problem across the stack.',
    body: 'My work spans C++, Rust, Python, databases, AI infrastructure, and React. I am comfortable moving between data, backend, infrastructure, and UI when that is what the outcome requires.',
  },
  {
    title: 'I own the path to production.',
    body: 'I have debugged production failures, automated operational workflows, built customer-facing features, and added tests, retries, metrics, guardrails, and observability so systems keep working beyond the first successful run.',
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
    title: 'Forward Deployed Engineering',
    body: 'Ambiguous customer problems, rapid domain learning, data and application workflows, end-to-end ownership, and solutions built around real operational constraints.',
  },
]

export default function WhyHireMe() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-violet">what I bring</p>

      <h2 className="mt-2 max-w-7xl font-display text-3xl font-semibold text-ink sm:text-4xl">
        I start with the problem, then go where it leads.
      </h2>

      <p className="mt-4 max-w-7xl text-mute leading-relaxed">
        I enjoy problems that begin with an unclear operational need rather than a neatly scoped
        ticket. I like learning the domain, understanding what users actually need, breaking the
        ambiguity into something measurable, and working across the stack until the solution works
        under real constraints.
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