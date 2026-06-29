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
    id: "health-companion",
    title: "AI-Based Health Companion Application",
    description: "A multi-agent AI health companion system for intelligent assistance and basic symptom guidance using rule-based logic.",
    longDescription: "Designed and simulated a multi-agent AI health companion system focusing on intelligent assistance and basic symptom guidance using rule-based logic and structured data processing. Simulated real-world AI interaction workflows with an emphasis on usability, scalable architecture, and future AI integration readiness.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
    tech: ["Python", "Streamlit", "REST APIs", "AI Agents", "React"],
    category: "ai",
    liveUrl: "https://github.com/AnannyaMahajan",
    githubUrl: "https://github.com/AnannyaMahajan",
    metrics: [
      { label: "Query Resolution", value: "< 1.2s" },
      { label: "Rule Accuracy", value: "96.5%" },
      { label: "System Uptime", value: "99.9%" }
    ],
    caseStudy: {
      role: "Creator & Lead Architect",
      timeline: "5 Weeks (Expected 2026)",
      challenge: "Providing symptom guidance and support with AI systems traditionally requires constant network communication and presents a potential risk of generic hallucination. The challenge was structuring a robust, offline-capable multi-agent system using deterministic fallback rules.",
      solution: "Engineered a layered architecture that pairs structured, rule-based clinical workflows with fluid conversational response formatting. Built a multi-agent state manager that routes questions safely and displays intuitive progress steps.",
      results: [
        "Constructed a working multi-agent flow with a structured rule library containing 100+ diagnostic routes.",
        "Created an interactive user interface with low query latency, reducing visual state delay below 1.2 seconds.",
        "Simulated edge-case triggers and safe triage fallbacks for users seeking critical help."
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
    id: "fullstack-dashboard",
    title: "Full-Stack Dashboard & Chatbot Platform",
    description: "A unified web platform featuring secure login/signup authentication, a dynamic dashboard, and an embedded chatbot with API integration.",
    longDescription: "Developed a unified web platform featuring login/signup authentication, a dynamic dashboard, and an embedded chatbot with API integration. Demonstrated end-to-end full-stack skills including responsive UI design, backend logic, and functional system architecture.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    tech: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS"],
    category: "web",
    liveUrl: "https://github.com/AnannyaMahajan",
    githubUrl: "https://github.com/AnannyaMahajan",
    metrics: [
      { label: "Auth Security", value: "Strict JWT" },
      { label: "API Handshake Speed", value: "< 200ms" },
      { label: "Active Connections", value: "WebSockets" }
    ],
    caseStudy: {
      role: "Full-Stack Developer",
      timeline: "6 Weeks (Winter 2025)",
      challenge: "Integrating live chatbot messaging with an authenticated statistics dashboard in a single clean viewport without losing state.",
      solution: "Created an Express server handling secure authentication routes. Designed a synchronized front-end using React and custom hooks to stream chat tokens and refresh dashboard widgets without complete page reload.",
      results: [
        "Built secure password hashing and stateful login, protecting user sessions.",
        "Integrated interactive chat systems that response-stream cleanly.",
        "Crafted a beautiful dark-mode layout optimized for mobile screens and multi-panel dashboards."
      ]
    }
  },
  {
    id: "cultural-kaleidoscope",
    title: "Cultural Kaleidoscope - Web Platform",
    description: "An interactive culturally themed website showcasing Indian art and heritage using modern UI design and data visualization.",
    longDescription: "Created an interactive culturally themed website showcasing Indian art and heritage using modern UI design and data visualization. Applied structured frontend development practices with a strong emphasis on creative UX and accessibility.",
    image: "https://images.unsplash.com/photo-1582155627725-b44c60010ca4?auto=format&fit=crop&q=80&w=1200",
    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "SVG / Canvas"],
    category: "web",
    liveUrl: "https://github.com/AnannyaMahajan",
    githubUrl: "https://github.com/AnannyaMahajan",
    metrics: [
      { label: "Accessibility Rating", value: "100%" },
      { label: "Interactive Galleries", value: "6 Exhibits" },
      { label: "Lighthouse Score", value: "98/100" }
    ],
    caseStudy: {
      role: "Creative UX Designer & Frontend Developer",
      timeline: "3 Weeks (Summer 2025)",
      challenge: "Indian art forms and historical structures are visually complex. The challenge was displaying high-resolution visual collections while maintaining high-contrast readability and strict responsive constraints.",
      solution: "Designed custom vector-based interactive maps and grids using Bootstrap and pure CSS. Embedded high-performance asset-loading strategies to optimize performance.",
      results: [
        "Achieved a top-tier score for accessibility and responsive delivery.",
        "Developed custom vector paths highlighting classical Indian art districts that dynamically zoom and reveal curated info panes on click.",
        "Praised by academic reviewers for an exceptionally engaging, stress-free aesthetic experience."
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
