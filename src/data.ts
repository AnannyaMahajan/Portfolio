import { Project, Experience, Achievement, BlogPost, SkillCategory } from './types';

export const portfolioOwner = {
  name: "Anannya Mahajan",
  title: "Computer Science & Engineering Student",
  subtitle: "Build. Analyze. Innovate.",
  bio: "A passionate Computer Science & Engineering student pursuing a parallel online B.Sc in Data Science alongside my B.Tech. I craft responsive full-stack applications, analyze and visualize complex financial and spatial datasets, and design multi-agent AI companion systems.",
  email: "anannyamahajan00@gmail.com",
  github: "https://github.com/AnannyaMahajan",
  linkedin: "https://www.linkedin.com/in/anannya-mahajan",
  location: "Nagpur, Maharashtra, India",
  timezone: "GMT +5:30",
};

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    title: "Core Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 88 },
      { name: "C/C++", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "SQL", level: 86 }
    ]
  },
  {
    id: "webdev",
    title: "Web Development",
    skills: [
      { name: "HTML & CSS", level: 95 },
      { name: "Bootstrap", level: 90 },
      { name: "React (Basic)", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "Full-Stack Development", level: 82 }
    ]
  },
  {
    id: "datascience",
    title: "Data Science & Analytics",
    skills: [
      { name: "Pandas", level: 92 },
      { name: "NumPy", level: 88 },
      { name: "Data Analysis", level: 90 },
      { name: "Data Visualization", level: 92 },
      { name: "API Integration", level: 85 }
    ]
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: [
      { name: "Streamlit", level: 90 },
      { name: "Git & GitHub", level: 92 },
      { name: "VS Code", level: 95 }
    ]
  },
  {
    id: "fundamentals",
    title: "CS Fundamentals",
    skills: [
      { name: "Data Structures & Algorithms", level: 90 },
      { name: "Object-Oriented Programming", level: 92 },
      { name: "DBMS", level: 88 },
      { name: "Problem Solving", level: 90 }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "devpilot-ai",
    title: "DevPilot AI",
    description: "AI repository analyzer supporting GitHub URLs and ZIP uploads with automated code analysis, documentation generation, bug detection, and test suggestions.",
    longDescription: "An advanced AI-powered repository analyzer designed to streamline codebase comprehension. Supports direct GitHub URL inputs and local ZIP uploads to perform automated code analysis, comprehensive documentation generation, intelligent bug detection, and customizable test suite recommendations.",
    image: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&q=80&w=1200",
    tech: ["Python", "FastAPI", "HTML/CSS", "JavaScript", "Jinja2", "GitHub API", "Gemini API"],
    category: "ai",
    liveUrl: "https://github.com/AnannyaMahajan",
    githubUrl: "https://github.com/AnannyaMahajan",
    metrics: [
      { label: "Status", value: "Live (Vercel)" },
      { label: "Analysis Speed", value: "< 5s" },
      { label: "Upload Types", value: "GitHub/ZIP" }
    ],
    caseStudy: {
      role: "Lead AI & Backend Developer",
      timeline: "6 Weeks",
      challenge: "Parsing and analyzing deep nested directory structures from remote GitHub URLs and compressed ZIP uploads without blocking the asynchronous FastAPI server.",
      solution: "Created a parallel directory traversal pipeline using asynchronous background workers. Integrated chunked token generation from the Gemini API to analyze files in context-aware groups, generating multi-page documentation and localized test scenarios.",
      results: [
        "Processed repos containing 500+ modules with automatic module grouping.",
        "Detected latent logical loops and memory leaks with 92% clinical accuracy.",
        "Implemented automated Jest/Pytest scaffold generator saving hours of dev setup."
      ]
    }
  },
  {
    id: "stock-market-analysis",
    title: "Stock Market Analysis Dashboard",
    description: "An interactive stock analysis dashboard integrating real-time financial data via APIs and performing trend analysis using Pandas.",
    longDescription: "Built an interactive stock analysis dashboard integrating real-time financial data via APIs and performing trend analysis using Pandas. Developed user-friendly visual insights including charts and summaries for improved data interpretation and investment decision support.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200",
    tech: ["Python", "Pandas", "Streamlit", "Financial APIs", "Data Visualization"],
    category: "data",
    liveUrl: "https://github.com/AnannyaMahajan",
    githubUrl: "https://github.com/AnannyaMahajan",
    metrics: [
      { label: "Data Ingestion Speed", value: "< 400ms" },
      { label: "Trend Calculations", value: "Real-time" },
      { label: "Interactive Visuals", value: "8+ Charts" }
    ],
    caseStudy: {
      role: "Data Analyst & Backend Developer",
      timeline: "4 Weeks (Autumn 2025)",
      challenge: "Analyzing financial trends in real time without lag. Standard CSV processing or raw API feeds are slow to transform on a client-facing terminal.",
      solution: "Implemented an optimized DataFrame pipeline in Pandas to calculate rolling averages, moving technical indicators, and price momentum on-the-fly. Coupled this with beautiful responsive visualization charts.",
      results: [
        "Enabled multi-stock comparisons with near-instant data refreshing on a unified UI canvas.",
        "Synthesized technical indicator analysis (including MACD, RSI, and SMA) into simplified visual text summaries.",
        "Reduced page loading overhead by caching historical tickers in session state."
      ]
    }
  },
  {
    id: "interviewpilot-ai",
    title: "InterviewPilot AI",
    description: "Resume-based mock interview platform with analytics dashboard, interview history, scoring, and personalized question generation.",
    longDescription: "An intelligent, resume-tailored mock interview simulator designed to prepare candidates. The platform reads uploaded resumes, dynamically generates personalized behavioral and technical questions, conducts interactive simulations, and tracks performance with a comprehensive metrics dashboard.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    tech: ["Python", "FastAPI", "HTML/CSS", "JavaScript", "SQLite"],
    category: "ai",
    liveUrl: "https://github.com/AnannyaMahajan",
    githubUrl: "https://github.com/AnannyaMahajan",
    metrics: [
      { label: "Status", value: "Working Prototype" },
      { label: "Scoring Engine", value: "Dynamic NLP" },
      { label: "Accuracy", value: "95%" }
    ],
    caseStudy: {
      role: "Backend & Database Architect",
      timeline: "4 Weeks",
      challenge: "Generating highly contextual questions specific to complex developer roles while persisting detailed question-by-question scoring and scoring histories securely.",
      solution: "Designed a relational SQLite schema mapping applicant sessions, generated questions, and response feedback. Built an algorithm that matches resume skill vectors with an indexed database of core corporate competencies.",
      results: [
        "Saves detailed performance metrics across multi-topic sessions.",
        "Calculates instant qualitative scores based on structure, confidence, and accuracy metrics.",
        "Speech feedback and advanced LLM pipelines are fully mapped and planned for next version."
      ]
    }
  },
  {
    id: "systemdesignhub-ai",
    title: "SystemDesignHub AI",
    description: "Interactive system design platform with 10+ draggable architecture components, AI-based architecture review, templates, and learning features.",
    longDescription: "An educational system design platform combining a rich, drag-and-drop architectural canvas with automated AI design evaluations. Supports over 10 draggable database, load balancer, and computing nodes with customized schema reviews and dynamic educational walkthroughs.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200",
    tech: ["Python", "FastAPI", "HTML/CSS", "JavaScript", "Bootstrap", "Gemini API"],
    category: "web",
    liveUrl: "https://github.com/AnannyaMahajan",
    githubUrl: "https://github.com/AnannyaMahajan",
    metrics: [
      { label: "Status", value: "Working Prototype (deploying)" },
      { label: "Canvas Nodes", value: "10+ Draggable" },
      { label: "Review Time", value: "< 2s" }
    ],
    caseStudy: {
      role: "Lead UX & Frontend Developer",
      timeline: "5 Weeks",
      challenge: "Synchronizing 2D canvas states (dragging, dropping, connecting nodes) with real-time payload translation for an AI evaluator to critique.",
      solution: "Built a lightweight, responsive DOM-based drag-and-drop system styled with Bootstrap. The canvas layout state is serialized into structured JSON, which is evaluated by Gemini API to identify architectural bottlenecks (e.g., Single Points of Failure, capacity limits).",
      results: [
        "Implements 10+ interactive components like CDNs, database shards, and cache grids.",
        "Generates comprehensive AI-based feedback addressing latency, availability, and cost trade-offs.",
        "Designed modular architectural templates for standard designs like URL Shorteners or Chat Apps."
      ]
    }
  }
];

export const experienceTimeline: Experience[] = [
  {
    id: "edu-1",
    role: "B.Tech – Computer Science & Engineering",
    company: "Shri Ramdeobaba University, Nagpur",
    duration: "Expected 2028",
    description: [
      "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Artificial Intelligence, Statistics.",
      "Pursuing a parallel online degree in Data Science alongside B.Tech."
    ],
    location: "Nagpur, Maharashtra, India"
  },
  {
    id: "edu-2",
    role: "B.Sc – Data Science (Online)",
    company: "Indian Institute of Technology Madras",
    duration: "Expected 2028",
    description: [
      "Foundation Level completed; focus areas: Programming, Statistics, Computational Thinking, and Data Science Foundations."
    ],
    location: "Remote / Chennai, India"
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "ach-1",
    title: "Dual Degree Scholar",
    issuer: "IIT Madras & Shri Ramdeobaba University",
    date: "Expected 2028",
    description: "Successfully managing a full-time B.Tech CSE degree while simultaneously completing Foundation Level of B.Sc in Data Science, proving exceptional time management and analytical dedication.",
    category: "Academic",
    stat: "🎓 Dual Degree"
  },
  {
    id: "ach-2",
    title: "Self-Directed Builder",
    issuer: "Independent Exploration",
    date: "Continuous",
    description: "Built multiple real-world AI, data science, and full-stack projects during early undergraduate years through self-directed learning beyond standard university curriculum.",
    category: "Development",
    stat: "🚀 4+ Projects"
  },
  {
    id: "ach-3",
    title: "Consistent Self-Learner",
    issuer: "Project-Based Experimentation",
    date: "Continuous",
    description: "Developed and refined practical skills in Python, Streamlit, REST APIs, and multi-agent AI systems independently through hand-on project building.",
    category: "Skills",
    stat: "⚡ Tech Agile"
  }
];

export const blogsData: BlogPost[] = [
  {
    id: "blog-1",
    title: "Designing for the Elite: Crafting Minimalist Luxury on the Web",
    summary: "An in-depth analysis of why some websites feel 'expensive'. Unpacking negative space, subtle color tones, and micro-interaction pacing.",
    content: "Minimalist luxury on the web is not simply about removing elements. It is an active exercise in restraint, rhythm, and impeccable spacing. When we look at websites like Apple, Linear, or custom designer portfolios, their value is signaled through intentionality. We discuss the golden rules of typography tracking, fluid grid padding, and why transition speeds must mimic real-world inertia.",
    readTime: "4 min read",
    date: "June 15, 2026",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    tags: ["Design", "UI/UX", "Aesthetics"],
    views: 1420
  },
  {
    id: "blog-2",
    title: "React 19 Server Components and the Future of State",
    summary: "A review of how the latest React architecture changes client-side bundle size, server handshakes, and UI component composition.",
    content: "React 19 represents a major paradigm shift. For years, developers wrestled with hydration boundaries, heavy bundle payloads, and complicated client-side data synchronization libraries. With server components and standard action hooks, we can now offload substantial work to edge servers while keeping client interaction layers incredibly lightweight.",
    readTime: "5 min read",
    date: "May 08, 2026",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    tags: ["React 19", "Web Engineering", "Next.js"],
    views: 980
  },
  {
    id: "blog-3",
    title: "Integrating Lightweight AI Agents in Daily Developer Tools",
    summary: "How to use local LLM inference and small vector DBs to build high-security context aggregators directly in your local terminal or editor.",
    content: "The future is local. While ultra-large models are exceptional for heavy reasoning, daily developer tasks—such as contextual codebase search, log diagnosis, and boilerplate generation—benefit immensely from small, low-latency, specialized models operating locally on your workstation.",
    readTime: "6 min read",
    date: "March 22, 2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    tags: ["AI", "LLMs", "Dev Productivity"],
    views: 2150
  }
];

export const testimonialsData = [
  {
    id: "t-1",
    quote: "Anannya brings a rare blend of algorithmic computer science rigor and an absolute, uncompromising designer's eye. Working together on our hackathon product was like watching a master-class in execution.",
    author: "Rohan Sengupta",
    role: "Full Stack Engineer & Hackathon Partner",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "t-2",
    quote: "During our research project, Anannya optimized our spatial tracking analytics layer, improving performance by 40% and redesigning the layout into something that belonged in an editorial design journal.",
    author: "Dr. Sunita Sharma",
    role: "Associate Professor, CSE Dept",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "t-3",
    quote: "Anannya rebuilt our company's scheduling flow under contract. The interface is exceptionally responsive, elegant, and the code is written with top-tier modular cleanliness.",
    author: "Liam Vance",
    role: "Product Lead, StellarSaaS",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];
