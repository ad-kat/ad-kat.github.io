export const profile = {
  name: 'Adri Katyayan',
  role: 'Software Engineer · New Grad 2027 · AI/ML & Backend Systems',
  tagline: 'AI/ML systems, distributed infra, and NLP. Built and shipped, not just studied.',
  email: 'adri.katyayan@stonybrook.edu',
  phone: '+1 (551) 312-9658',
  linkedin: 'https://www.linkedin.com/in/adri-katyayan/',
  github: 'https://github.com/ad-kat',
  orcid: 'https://orcid.org/0009-0004-9070-3902',
  researchgate: 'https://www.researchgate.net/profile/Adri-Katyayan?ev=hdr_xprf',
  location: 'Stony Brook, NY',
}

export const education = [
  {
    school: 'Stony Brook University',
    location: 'Stony Brook, NY',
    degree: "Master's in Computer Science",
    period: 'Aug 2025 - May 2027',
  },
  {
    school: 'Manipal Institute of Technology',
    location: 'Udupi, India',
    degree: 'B.Tech, Computer & Communication Engineering · Minor, Computational Intelligence',
    period: 'Oct 2021 - Jul 2025',
  },
]

export const experience = [
  {
    company: 'DevRev',
    role: 'Member of Technical Staff (MTS) Intern',
    location: 'Palo Alto, CA',
    period: 'Jun 2026 - Present',
    bullets: [
     'Shipped an end-to-end bug-reporting pipeline wired into DevRev\'s ticketing API, with session-tagged traces and presigned artifact upload for replaying agent runs across environments.',
      'Implemented real-time speech-to-text via WebSocket streaming with server-minted short-lived auth tokens, feeding live transcripts directly into Kilmer for full voice-conversation mode.',
      'Engineered a guardrail audit snap-in that scans 500+ conversations per run for system-prompt leaks using batched parallel LLM calls with exponential-backoff retry.',
      'Found a cost-visibility gap in DevRev\'s Neuron agent engine (Python, LangGraph, Temporal, gRPC): extended-thinking model requests bypassed the internal LLM gateway entirely, making them invisible to per-request cost and token tracking. Fixed by rerouting all thinking-mode traffic through the gateway.',
      'Root-caused why an earlier fix was reverted (a ChatOpenAI client silently dropped Anthropic thinking blocks), then switched to a native ChatAnthropic client on the gateway\'s anthropic_unified Bedrock route behind a feature flag. Resolved two additional edge cases before validating end-to-end with integration tests covering streaming and sequential tool calls.',
    ],
  },
  {
    company: 'Stony Brook University',
    role: 'Graduate Research Assistant',
    location: 'Stony Brook, NY',
    period: 'Jan 2026 - May 2026',
    bullets: [
      'Research project: Multimodal Visual Analytics for Explainable AI in Video and Audio Analysis, advised by Prof. Klaus Mueller.',
      'Architected a multimodal pipeline (Whisper ASR, YAMNet audio events, MediaPipe pose, LLM punchline extraction) studying comedic timing in stand-up performances.',
      'Built an audio-event alignment engine computing per-joke laugh latency, duration, and intensity across full recordings.',
      'Shipped a FastAPI backend and interactive dashboard visualizing laugh timelines and crowd-emotion heatmaps.',
    ],
  },
  {
    company: 'Rystad Energy',
    role: 'Data Analyst Intern - Backend & Data Engineering',
    location: 'Bengaluru, India',
    period: 'Jan 2025 - Jun 2025',
    bullets: [
      'Built and maintained 16+ production web crawlers and ingestion services collecting global price index data, processing 600K+ daily feeds with automated anomaly detection.',
      'Designed and deployed a containerized ETL pipeline (Docker) with data-quality checks and monitoring that cut silent failures across ingestion workflows.',
      'Re-platformed legacy Excel-based reporting to a PostgreSQL star schema with batch jobs and indexing, improving p95 query latency from ~900ms to ~380ms (~60%).',
      'Productionized pipelines under real-world failure conditions and validated correctness against live procurement cost data.',
    ],
  },
  {
    company: 'IIT Kanpur - SURGE Program',
    role: 'Research Intern, Software & Data Systems',
    location: 'Kanpur, India',
    period: 'May 2024 - Jul 2024',
    bullets: [
      'Selected from a competitive SAARC applicant pool for the SURGE National Research Internship, Smart Grid initiative.',
      'Designed scalable time-series processing and feature-extraction pipelines for smart-grid energy telemetry across 11 campus substations.',
      'Profiled and optimized database queries and code paths to improve responsiveness for large-scale telemetry batch workloads.',
      'Shipped two Kotlin Android apps with telemetry instrumentation and a Django backend to collect and visualize live smart-grid power data for a National Smart City pilot.',
    ],
  },
  {
    company: 'Technosys Pvt. Ltd',
    role: 'Software Development Engineer Intern',
    location: 'Lucknow, India',
    period: 'Jun 2023 - Jul 2023',
    bullets: [
      'Contributed to Mission Prerna, a statewide K-12 web platform, by developing backend modules using Java and C# MVC integrated with MS SQL Server services used by millions of users.',
      'Designed and implemented server-side business logic, REST APIs, and database-backed features end to end.',
      'Collaborated within an Agile team through code reviews, iterative releases, and issue tracking; wrote unit tests across deployment cycles.',
    ],
  },
  {
    company: 'ARTH.AI',
    role: 'Research & Development Intern - ML Engineering',
    location: 'India · Part-time',
    period: 'Dec 2021 - May 2023',
    bullets: [
      'Implemented CNN architectures (VGG19, Inception-v4, Modified VGG19 with batch normalization) in Python/MATLAB to classify tympanic-membrane images; ran data augmentation to expand a 115-image dataset to 455 samples.',
      'Ran paired statistical analysis (Pearson/Spearman correlation, paired t-test, 95% CI) comparing smartphone audiometry thresholds against gold-standard PTA across 44 patients at 7 frequencies, published in Hearing, Balance and Communication (Taylor & Francis, 2022).',
      'Benchmarked three CNN training runs (training accuracy up to 85%, validation ~58%); identified calibration and image-quality bottlenecks and proposed hardware-standardization improvements.',
      'Co-authored findings published in the Indian Journal of Otolaryngology (Springer, 2023), informing the design of a low-cost tele-audiology platform deployed in hospital OPDs.',
    ],
  },
  {
    company: "King George's Medical University",
    role: 'Research Intern - Clinical Data & ML Systems',
    location: 'Lucknow, India · Part-time',
    period: 'Jun 2019 - Jun 2021',
    bullets: [
      'Recruited and assessed 44+ patients using Pure Tone Audiometry and web-based hearing tests across 7 frequencies; structured and cleaned raw air-conduction threshold data for downstream ML analysis.',
      'Captured 115+ tympanic-membrane images via a borescope-integrated smartphone under COVID distancing protocols; curated and labeled the normal-vs-perforated dataset used to train CNN classifiers.',
      'Designed and executed data-collection protocols alongside otologists at a tertiary hospital OPD, ensuring consistency across patient cohorts for multi-study use.',
      'Co-investigator on 4 peer-reviewed studies (Springer, Taylor & Francis); provided clinical data, patient recruitment, and domain validation for publication.',
    ],
  },
]

export const projectTags = ['All', 'AI/ML', 'Systems', 'Health', 'Web']

export const certifications = [
  { name: 'Google Cloud Computing Foundations', url: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.credly.com%2Fbadges%2F6ea2f0e9-033b-4000-8b78-7fe8ed47b0d7%2Flinked_in_profile&urlhash=TW2b&mt=lmew-yO1Xt8HNQnN78-c0ZILku_uKxDKb-QSYo_IFCNU12e5ChPG17tx7GdAE2xLxBogxrSVldC7zjAJu784xVc4t8I&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BhcNwdQzwTxWN%2FyE9WCOzBA%3D%3D' },
  { name: 'Data Analysis & Visualization with Power BI', url: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Fspecialization%2FRLESE47K36WY&urlhash=BpdS&mt=oNn55Ze-birh7Ns8S1me_Hb3rke27U7dWHkBDBJkr3rYUffRnDgFm2qyz4eS5NT-fJkpjdxm8NTgKhkwsflQJMhvSIM&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BhcNwdQzwTxWN%2FyE9WCOzBA%3D%3D' },
  { name: 'Build a Secure Google Cloud Network', url: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.credly.com%2Fbadges%2F655f32a8-6fd7-43ef-b4e4-5198af447cd2%2Flinked_in_profile&urlhash=8tK0&mt=xWTG4ShjA8Xqi5TzgLFpGmCJMCteaN_a9TWR3x2SyQ4Lao8Rjs5sBDL7Dt2iBJDDGGgy1XfCWBh2nYsFYdggKLQZcXA&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BhcNwdQzwTxWN%2FyE9WCOzBA%3D%3D' },
  { name: 'CITI - Biomedical Research', url: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.citiprogram.org%2Fverify%2F%3Fw55c5ad64-dd4d-42ef-8407-7056d6453286-76426835&urlhash=sZS8&mt=Oo83lzfmxTA19iQGwdU2i6yybanMcXMm_7Qf76EhIGTooTbKeCzMuBs_HF9XzSRkusgeplDt55vr4ki6HIBFdsNpF8w&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BF3gi0YRNQ%2FyZ8k%2F0SFeuPg%3D%3D' },
  { name: 'CITI - Social & Behavioral Research', url: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.citiprogram.org%2Fverify%2F%3Fw32cd800a-d964-459c-a5a9-0cdbd6afaefa-76329263&urlhash=zeNc&mt=J-D9T7AwNu62eM0jNkwYr-Isw9TF1MxVn8lzYlKXLBHhDh8Xhl7DzmYQKYd1wiUHQtbucW1-6FBbfYMu4DQ7YqLGMuk&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BF3gi0YRNQ%2FyZ8k%2F0SFeuPg%3D%3D' },
  { name: 'CITI - Data or Specimens Only Research', url: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.citiprogram.org%2Fverify%2F%3Fw777a9a58-e7bd-4880-b0c8-a56acd38c0f4-76454035&urlhash=IOuU&mt=-L3nlCOuE90xzWPso8ofv8RVpOMfzWbeXSI7nTHHLTmKr4AVPOK-wKMhD_oyfQtW4suxGh-e4LU0v32jVsoS4Z03ehY&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BF3gi0YRNQ%2FyZ8k%2F0SFeuPg%3D%3D' },
]

export const projects = [
  {
    title: 'C++ Limit Order Book & Matching Engine',
    gif: null,
    tags: ['Systems', 'AI/ML'],
    stack: 'C++20 · Python · FastAPI · React · WebSockets',
    metric: '1.9M ops/sec',
    period: 'Dec 2025 - May 2026',
    github: 'https://github.com/ad-kat/Limit-order-book-and-Matching-engine',
    bullets: [
      'Price-time priority matching engine: ~1.9M ops/sec, sub-microsecond latency (p50=0.4µs, p95=0.9µs).',
      'Live NASDAQ tick feed bridged via FastAPI into the C++ engine and broadcast over WebSocket to a React dashboard with real-time order book depth and trade tape.',
      'Six GoogleTest cases covering FIFO ordering, market orders, multilevel fills, and cancel-after-fill; CMake build with a release profile targeting the performance numbers above.',
    ],
  },
  {
    title: 'MiceWatch - TCP Congestion Control Study',
    gif: null,
    tags: ['Systems'],
    stack: 'Python · Rust · Mininet · Linux Kernel C',
    metric: '27-config sweep grid',
    period: 'Feb - May 2026',
    github: 'https://github.com/ad-kat/BBR-congestion-control-study',
    bullets: [
      'Rust CLI orchestrating reproducible Mininet experiments that characterize BBR\'s short-flow latency penalty under mixed workloads, extending Cao et al. (IMC 2019).',
      'Two-level tc qdisc stack (HTB + netem) for precise bandwidth, delay, and buffer enforcement; compiled and loaded three custom Linux kernel modules (tcp_bbr_gain110/115/120.ko) to sweep pacing-gain variants across a 27-config grid.',
      'Self-contained HTML report generator with vanilla JS/Canvas charts and zero external dependencies; full results and per-phase figures committed to the repo.',
    ],
  },
  {
    title: 'ClinicalContradiction',
    gif: null,
    tags: ['AI/ML', 'Health'],
    stack: 'Python · DistilBERT · FastAPI · PostgreSQL · HuggingFace Hub',
    metric: '140× faster inference',
    period: 'Mar 2026 - May 2026',
    github: 'https://github.com/ad-kat/clinical-contradiction-detector',
    bullets: [
      'Clinical NLP system detecting cross-encounter inconsistencies in MIMIC-IV EHR data (145,914 patients, 331,793 notes) under PhysioNet credentialed access with CITI human subjects certification.',
      'Knowledge distillation on 9,993 note pairs: a rule-based teacher labels a fine-tuned DistilBERT student with balanced class weighting and early stopping, reaching F1=0.868 (binary) and F1=0.856 (3-class macro) at 1.5ms with INT8 dynamic quantization, roughly 140x faster than the Groq/Llama-3.3-70b teacher.',
      'Model deployed to HuggingFace Hub (ad-kat/clinical-contradiction-detector); FastAPI backend routes to local quantized weights in dev or the HF Inference API as a serverless production fallback, with a /classifier/info introspection endpoint and live interactive dashboard.',
    ],
  },
  {
    title: 'Cloud Resource Lifecycle Manager',
    gif: null,
    tags: ['Systems', 'Web'],
    stack: 'Python · FastAPI · PostgreSQL · Docker · Prometheus',
    metric: '5-min policy cycle',
    period: 'Mar 2026 - May 2026',
    github: 'https://github.com/ad-kat/cloud-resource-manager',
    bullets: [
      'Cloud governance REST API covering the full resource lifecycle (provisioning, policy enforcement, drift detection, cost tracking, deprovisioning) with live Azure Retail Pricing API rates refreshed every 6 hours, mirroring AWS Config and GCP Asset Inventory patterns.',
      'Background scheduler auto-stops TTL-breached resources every 5 minutes and appends every state transition to an audit trail that is never overwritten; API keys are generated with secrets.token_urlsafe, stored SHA-256 hashed, and enforced via FastAPI dependency injection with per-key revocation.',
      '14-test pytest suite in SQLite in-memory isolation wired to GitHub Actions CI; streamed CSV export for cost reports and full audit logs; Prometheus request count and p99 latency histograms at /metrics.',
    ],
  },
  {
    title: 'OSM Graph Routing Engine',
    gif: null,
    tags: ['Systems'],
    stack: 'Java 21 · OpenStreetMap · StAX · JUnit · Docker',
    metric: '97% fewer nodes (A*)',
    period: 'Apr 2026 - May 2026',
    github: 'https://github.com/ad-kat/osm-routing-engine',
    bullets: [
      'Graph routing engine parsing OSM XML via StAX streaming into a spatial-indexed road graph (228 nodes, 849 edges) with O(1) nearest-node lookup; three travel profiles (DRIVING, WALKING, CYCLING) with per-road-type speeds and OSM no_turn restriction enforcement parsed from relation elements.',
      'A* explored 97% fewer nodes than Dijkstra on cross-city routes while returning identical shortest paths; extended with isochrone computation (Dijkstra flood-fill and Graham-scan convex hull returning reachable-area GeoJSON polygons), k-alternative routes via edge-penalty A*, and multi-waypoint chained routing.',
      '11 JUnit tests covering graph structure, nearest-node lookup, algorithm correctness, and GeoJSON output, wired to GitHub Actions CI with a Docker image.',
    ],
  },
  {
    title: 'GestureNav - Browser Shortcuts',
    gif: null,
    tags: ['Web'],
    stack: 'JavaScript · HTML5 Canvas · Chrome Extensions',
    metric: '$1 gesture recognizer',
    period: 'Aug 2025 - Dec 2025',
    github: 'https://github.com/ad-kat/Gesture-Browser-Shortcuts',
    bullets: [
      'Manifest V3 Chrome extension mapping drawn gestures to browser actions via a $1-style recognizer with no ML dependency.',
      'Real-time HUD showing similarity score, latency, and accuracy per gesture; usability-tested across multiple users including a motor-impaired participant.',
    ],
  },
]

export const publications = [
  {
    title: 'Does customized smartphone application perform better than advanced hearing aids? A pilot study',
    venue: 'Indian Journal of Otolaryngology and Head & Neck Surgery (Springer)',
    date: 'Jun 2026',
    doi: 'https://doi.org/10.1007/s12070-026-06705-3',
    summary:
      'Prospective pilot study (42 patients) comparing a smartphone hearing-amplification app against premium digital hearing aids. App demonstrated statistically significant superior performance across nearly all satisfaction parameters (p<0.001), with 75% of participants rating it superior to their existing HA. Establishes a sub-$5 scalable alternative to devices costing up to $10,000.',
  },
  {
    title: 'Augmenting Community Diagnosis of Safe Ear Disease Through Tele-Myringoscopy with Borescope Using AI/ML Techniques',
    venue: 'Indian Journal of Otolaryngology and Head & Neck Surgery (Springer)',
    date: 'Apr 2023',
    doi: 'https://doi.org/10.1007/s12070-023-03769-3',
    summary:
      'Used a low-cost ($10) borescope-and-smartphone rig to capture 115 tympanic-membrane images remotely during COVID, then benchmarked three CNN architectures (VGG19, Inception-v4, Modified VGG19 with batch normalization) to automatically flag central eardrum perforations. Best model reached 85% training accuracy, pointing to both the promise and current limits of low-cost AI-assisted ear screening in underserved areas.',
  },
  {
    title: "Enhancing India's Healthcare During COVID Era: Role of Artificial Intelligence & Algorithms",
    venue: 'Indian Journal of Otolaryngology and Head & Neck Surgery (Springer)',
    date: 'Oct 2022',
    doi: 'https://doi.org/10.1007/s12070-020-02101-7',
    summary:
      'Commentary proposing algorithm-based patient assessment and AI-assisted diagnosis as scalable tools to ease doctor-patient ratio strain and enable safer, remote screening across India during the pandemic.',
  },
  {
    title: 'Validation of App-Based Hearing Assessment (H3 Hearing Test) Through Smartphone: Preliminary Trends',
    venue: 'Hearing, Balance and Communication (Taylor & Francis)',
    date: 'Aug 2022',
    doi: 'https://doi.org/10.1080/21695717.2022.2102726',
    summary:
      'Compared a smartphone hearing-test app against gold-standard pure-tone audiometry across 44 patients and 7 frequencies. Found significant correlation but device calibration inconsistencies, informing hardware-standardization recommendations for tele-audiology apps.',
  },
  {
    title: 'Internet-Based Hearing Assessment During COVID Era in Indian Population: Practical and Safe Option',
    venue: 'Indian Journal of Otolaryngology and Head & Neck Surgery (Springer)',
    date: 'Jan 2022',
    doi: 'https://doi.org/10.1007/s12070-020-02198-w',
    summary:
      'Pilot study validating a web-based hearing test against clinical pure-tone audiometry on 20 patients. Reliably screened symmetrical hearing loss remotely, though it struggled with asymmetrical cases, supporting safe at-home screening during lockdowns.',
  },
]

export const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'C++', 'Java', 'Rust', 'SQL', 'TypeScript', 'JavaScript', 'Kotlin'],
  },
  {
    label: 'Backend & Systems',
    items: ['FastAPI', 'PostgreSQL', 'WebSockets', 'gRPC', 'Prometheus'],
  },
  {
    label: 'AI & ML',
    items: ['HuggingFace Transformers', 'Knowledge Distillation', 'Model Quantization', 'Whisper', 'YAMNet', 'MediaPipe'],
  },
  {
    label: 'Agent & Distributed Systems',
    items: ['LangGraph', 'Temporal', 'LiteLLM'],
  },
  {
    label: 'Cloud & Infra',
    items: ['Docker', 'GitHub Actions', 'AWS (EC2 · S3 · Bedrock)'],
  },
  {
    label: 'Networking',
    items: ['BBR / CUBIC / Reno', 'Linux Kernel Modules', 'Mininet', 'tc/netem', 'iperf3'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js'],
  },
]
