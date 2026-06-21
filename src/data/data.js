export const profile = {
  name: 'Adri Katyayan',
  role: 'MS CS @ Stony Brook University',
  tagline: 'AI/ML systems, distributed infra, and clinical NLP — built and shipped, not just studied.',
  email: 'katyayanadri02@gmail.com',
  phone: '+1 (551) 312-9658',
  linkedin: 'https://www.linkedin.com/in/adri-katyayan-21a0b2222/',
  github: 'https://github.com/ad-kat',
  orcid: 'https://orcid.org/0009-0004-9070-3902',
  researchgate: 'https://www.researchgate.net/profile/Adri-Katyayan?ev=hdr_xprf',
  location: 'Stony Brook, NY',
}

export const bootLines = [
  '> initializing profile :: adri-katyayan',
  '> loading experience [devrev, sbu, rystad, iitk, technosys, arth.ai, kgmu]',
  '> indexing 8 shipped projects',
  '> compiling 4 publications',
  '> interests: ai infra, ml systems, backend engineering',
]

export const education = [
  {
    school: 'Stony Brook University',
    location: 'Stony Brook, NY',
    degree: "Master's in Computer Science",
    period: 'Aug 2025 – May 2027',
  },
  {
    school: 'Manipal Institute of Technology',
    location: 'Udupi, India',
    degree: 'B.Tech, Computer & Communication Engineering · Minor, Computational Intelligence',
    period: 'Oct 2021 – Jul 2025',
  },
]

export const experience = [
  {
    company: 'DevRev',
    role: 'Member of Technical Staff (MTS) Intern',
    location: 'Palo Alto, CA',
    period: 'Jun 2026 – Present',
    bullets: [
      'Built the "thinking" status system for Kilmer (AI negotiation-advisor agent): a latency-aware state machine spanning request dispatch, tool-call silences, and token streaming.',
      'Shipped an end-to-end bug-reporting pipeline wired into DevRev\u2019s own ticketing API, with session-tagged traces for replaying agent runs.',
      'Implemented real-time speech-to-text (Deepgram Nova-2 streaming) feeding live transcripts directly into the chat input.',
    ],
  },
  {
    company: 'Stony Brook University',
    role: 'Graduate Research Assistant',
    location: 'Stony Brook, NY',
    period: 'Jan 2026 – May 2026',
    bullets: [
      'Research project: Multimodal Visual Analytics for Explainable AI in Video and Audio Analysis, advised by Prof. Klaus Mueller.',
      'Architected a multimodal pipeline (Whisper ASR, YAMNet audio events, MediaPipe pose, LLM punchline extraction) studying comedic timing in stand-up performances.',
      'Built an audio-event alignment engine computing per-joke laugh latency, duration, and intensity across full recordings.',
      'Shipped a FastAPI backend and interactive dashboard visualizing laugh timelines and crowd-emotion heatmaps.',
    ],
  },
  {
    company: 'Rystad Energy',
    role: 'Data Analyst Intern — Backend & Data Engineering',
    location: 'Bengaluru, India',
    period: 'Jan 2025 – Jun 2025',
    bullets: [
      'Built and maintained 16+ production web crawlers and ingestion services collecting global price index data, processing 600K+ daily feeds with automated anomaly detection.',
      'Designed and deployed a containerized ETL pipeline (Docker) with data-quality checks and monitoring that cut silent failures across ingestion workflows.',
      'Re-platformed legacy Excel-based reporting to a PostgreSQL star schema with batch jobs and indexing, improving p95 query latency from ~900ms to ~380ms (~60%).',
      'Productionized pipelines under real-world failure conditions and validated correctness against live procurement cost data.',
    ],
  },
  {
    company: 'IIT Kanpur — SURGE Program',
    role: 'Research Intern, Software & Data Systems',
    location: 'Kanpur, India',
    period: 'May 2024 – Jul 2024',
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
    period: 'Jun 2023 – Jul 2023',
    bullets: [
      'Contributed to Mission Prerna, a statewide K-12 web platform, by developing backend modules using Java and C# MVC integrated with MS SQL Server services used by millions of users.',
      'Designed and implemented server-side business logic, REST APIs, and database-backed features end to end.',
      'Collaborated within an Agile team through code reviews, iterative releases, and issue tracking; wrote unit tests across deployment cycles.',
    ],
  },
  {
    company: 'ARTH.AI',
    role: 'Research & Development Intern — ML Engineering',
    location: 'India · Part-time',
    period: 'Dec 2021 – May 2023',
    bullets: [
      'Implemented CNN architectures (VGG19, Inception-v4, Modified VGG19 with batch normalization) in Python/MATLAB to classify tympanic-membrane images; ran data augmentation to expand a 115-image dataset to 455 samples.',
      'Ran paired statistical analysis (Pearson/Spearman correlation, paired t-test, 95% CI) comparing smartphone audiometry thresholds against gold-standard PTA across 44 patients at 7 frequencies — published in Hearing, Balance and Communication (Taylor & Francis, 2022).',
      'Benchmarked three CNN training runs (training accuracy up to 85%, validation ~58%); identified calibration and image-quality bottlenecks and proposed hardware-standardization improvements.',
      'Co-authored findings published in the Indian Journal of Otolaryngology (Springer, 2023), informing the design of a low-cost tele-audiology platform deployed in hospital OPDs.',
    ],
  },
  {
    company: "King George's Medical University",
    role: 'Research Intern — Clinical Data & ML Systems',
    location: 'Lucknow, India · Part-time',
    period: 'Jun 2019 – Jun 2021',
    bullets: [
      'Recruited and assessed 44+ patients using Pure Tone Audiometry and web-based hearing tests across 7 frequencies; structured and cleaned raw air-conduction threshold data for downstream ML analysis.',
      'Captured 115+ tympanic-membrane images via a borescope-integrated smartphone under COVID distancing protocols; curated and labeled the normal-vs-perforated dataset used to train CNN classifiers.',
      'Designed and executed data-collection protocols alongside otologists at a tertiary hospital OPD, ensuring consistency across patient cohorts for multi-study use.',
      'Co-investigator on 4 peer-reviewed studies (Springer, Taylor & Francis) — provided clinical data, patient recruitment, and domain validation for publication.',
    ],
  },
]

export const projectTags = ['All', 'AI/ML', 'Systems', 'Health', 'Web']

export const projects = [
  {
    title: 'ClinicalContradiction',
    tags: ['AI/ML', 'Health'],
    stack: 'Python · DistilBERT · Groq/Llama · FastAPI · PostgreSQL',
    metric: '140× faster inference',
    period: 'Mar – May 2026',
    bullets: [
      'Clinical NLP system detecting cross-encounter inconsistencies in MIMIC-IV EHR data (145,914 patients, 331,793 notes) under PhysioNet credentialed access.',
      'Knowledge distillation: rule-labeled teacher → fine-tuned DistilBERT student, F1=0.731 at 7ms inference.',
      'Two contradiction detectors (allergy-medication conflict, diagnosis drift); containerized and deployed.',
    ],
  },
  {
    title: 'C++ Limit Order Book & Matching Engine',
    tags: ['Systems', 'AI/ML'],
    stack: 'C++20 · Python · FastAPI · React · WebSockets',
    metric: '1.9M ops/sec',
    period: 'Dec 2025',
    bullets: [
      'Price-time priority matching engine: ~1.9M ops/sec, sub-microsecond latency (p50=0.4µs, p95=0.9µs).',
      'Live NASDAQ tick feed bridged via FastAPI into the C++ engine, broadcast over WebSocket.',
      'LLM commentary agent narrating market microstructure every 8s with fingerprint-based caching.',
    ],
  },
  {
    title: 'MiceWatch — TCP Congestion Control Study',
    tags: ['Systems'],
    stack: 'Python · Rust · Mininet · Linux Kernel C',
    metric: '27-config sweep grid',
    period: 'Feb – May 2026',
    bullets: [
      'Rust CLI orchestrating reproducible Mininet experiments characterizing BBR\u2019s short-flow latency penalty, extending Cao et al. (IMC 2019).',
      'Two-level tc qdisc stack (HTB + netem) for bandwidth, delay, and buffer enforcement.',
      'Self-contained HTML report generator with vanilla JS/Canvas charts — zero external dependencies.',
    ],
  },
  {
    title: 'Cloud Resource Lifecycle Manager',
    tags: ['Systems', 'Web'],
    stack: 'Python · FastAPI · PostgreSQL · Docker · APScheduler',
    metric: '5-min policy cycle',
    period: 'Mar – May 2026',
    bullets: [
      'Cloud governance REST API modeling the full resource lifecycle — provisioning, policy enforcement, drift detection — mirroring AWS Config patterns.',
      'Background engine auto-stops TTL-breached resources and writes an append-only audit trail every 5 minutes.',
      '14-test pytest suite (SQLite in-memory) wired to GitHub Actions CI on every push.',
    ],
  },
  {
    title: 'Community Ear Diagnosis via AI/ML',
    tags: ['AI/ML', 'Health'],
    stack: 'Python · VGG19 · Inception-Net-v4 · CNN',
    metric: '4 papers published',
    period: '2021 – 2023',
    bullets: [
      'Published research benchmarking 3 CNN architectures on clinical ear-drum images, 85% training accuracy.',
      'Published research validating a smartphone hearing-assessment app against gold-standard PTA across 44 patients.',
    ],
  },
  {
    title: 'LaughLab',
    tags: ['AI/ML'],
    stack: 'Python · Whisper · YAMNet · Groq/LLaMA · FastAPI',
    metric: '20-bin laugh heatmaps',
    period: 'Jan 2026 – Present',
    bullets: [
      'Audio/NLP pipeline for stand-up comedy: laugh-event detection, ASR transcription, sentiment on setups.',
      'LLaMA-3.3-70B punchline detector across transcript segments with a multi-tab visualization dashboard.',
    ],
  },
  {
    title: 'GestureNav — Browser Shortcuts',
    tags: ['Web'],
    stack: 'JavaScript · HTML5 Canvas · Chrome Extensions',
    metric: '$1 gesture recognizer',
    period: 'Aug – Dec 2025',
    bullets: [
      'Manifest V3 Chrome extension mapping drawn gestures to browser actions via a $1-style recognizer.',
      'Real-time HUD (similarity score, latency, accuracy); usability-tested including a motor-impaired user.',
    ],
  },
  {
    title: 'OSM Graph Routing Engine',
    tags: ['Systems'],
    stack: 'Java 21 · OpenStreetMap · StAX · REST',
    metric: '97% fewer nodes (A*)',
    period: 'Apr – May 2026',
    bullets: [
      'Graph routing engine parsing OSM XML via StAX streaming into a spatial-indexed road graph (228 nodes, 849 edges).',
      'A* explored 97% fewer nodes than Dijkstra on cross-city routes while guaranteeing identical shortest paths.',
    ],
  },
]

export const publications = [
  {
    title: 'Augmenting Community Diagnosis of Safe Ear Disease Through Tele-Myringoscopy with Borescope Using AI/ML Techniques',
    venue: 'Indian Journal of Otolaryngology and Head & Neck Surgery (Springer)',
    date: 'Apr 2023',
    doi: 'https://doi.org/10.1007/s12070-023-03769-3',
    summary:
      'Used a low-cost ($10) borescope-and-smartphone rig to capture 115 tympanic-membrane images remotely during COVID, then benchmarked three CNN architectures (VGG19, Inception-v4, Modified VGG19 with batch normalization) to automatically flag central eardrum perforations — best model reached 85% training accuracy, pointing to both the promise and current limits of low-cost AI-assisted ear screening in underserved areas.',
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
      'Compared a smartphone hearing-test app against gold-standard pure-tone audiometry across 44 patients and 7 frequencies — found significant correlation but device calibration inconsistencies, informing hardware-standardization recommendations for tele-audiology apps.',
  },
  {
    title: 'Internet-Based Hearing Assessment During COVID Era in Indian Population: Practical and Safe Option',
    venue: 'Indian Journal of Otolaryngology and Head & Neck Surgery (Springer)',
    date: 'Jan 2022',
    doi: 'https://doi.org/10.1007/s12070-020-02198-w',
    summary:
      'Pilot study validating a web-based hearing test against clinical pure-tone audiometry on 20 patients — reliably screened symmetrical hearing loss remotely, though it struggled with asymmetrical cases, supporting safe at-home screening during lockdowns.',
  },
]

export const skillGroups = [
  {
    label: 'Languages',
    items: ['C', 'C++', 'Python', 'Java', 'Rust', 'SQL', 'JavaScript', 'TypeScript', 'Kotlin', 'C#'],
  },
  {
    label: 'Backend & Systems',
    items: ['FastAPI', 'Flask', 'ASP.NET MVC', 'PostgreSQL', 'MySQL', 'SQLite', 'SQLAlchemy', 'TCP/IP', 'Multithreading'],
  },
  {
    label: 'AI/ML & NLP',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'HuggingFace Transformers', 'DistilBERT', 'spaCy', 'CNN', 'Knowledge Distillation', 'Clinical NLP'],
  },
  {
    label: 'Cloud & Infra',
    items: ['Docker', 'GitHub Actions', 'Linux', 'GCP', 'AWS', 'Kubernetes', 'Render', 'Vercel'],
  },
  {
    label: 'Networking',
    items: ['BBR / CUBIC / Reno', 'Linux Kernel Modules', 'Mininet', 'tc/netem', 'iperf3'],
  },
  {
    label: 'Frontend & Web',
    items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'WebSockets'],
  },
]

export const certifications = [
  'Google Cloud Computing Foundations Certificate',
  'Data Analysis and Visualization with Power BI',
  'Build a Secure Google Cloud Network Skill Badge',
  'Python Data Structures',
  'Using Python to Access Web Data',
  'CITI — Biomedical Research',
  'CITI — Social & Behavioral Research',
  'CITI — Good Clinical Practice',
]