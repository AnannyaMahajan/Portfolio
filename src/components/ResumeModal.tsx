import { motion } from 'motion/react';
import { X, Printer, Mail, Linkedin, Github, MapPin, ExternalLink } from 'lucide-react';
import { portfolioOwner } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
      />

      {/* Main Sheet Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl h-[90vh] bg-white text-gray-900 border border-black/10 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
      >
        {/* Controls Header - Excluded from Print */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50 print:hidden shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gold" />
            <span className="text-xs font-mono tracking-widest text-gray-500 uppercase font-semibold">Interactive Resume Terminal</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-sans font-medium bg-charcoal text-white hover:bg-gold rounded-full transition-all duration-300"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-gray-200 hover:border-gray-400 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Body - Scrollable */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 print:p-0 print:overflow-visible font-sans bg-white leading-relaxed text-sm">
          <div className="max-w-3xl mx-auto space-y-8 print:max-w-full">
            
            {/* Header Section */}
            <div className="text-center space-y-3 pb-6 border-b border-gray-200">
              <h1 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-gray-900 uppercase">
                {portfolioOwner.name}
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs font-mono text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  Nagpur, Maharashtra, India
                </span>
                <span className="text-gray-300">•</span>
                <a href={`mailto:${portfolioOwner.email}`} className="flex items-center gap-1 hover:text-gold transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  {portfolioOwner.email}
                </a>
                <span className="text-gray-300">•</span>
                <a href={portfolioOwner.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gold transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                  linkedin.com/in/anannya-mahajan
                </a>
                <span className="text-gray-300">•</span>
                <a href={portfolioOwner.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gold transition-colors">
                  <Github className="w-3.5 h-3.5" />
                  github.com/AnannyaMahajan
                </a>
              </div>
            </div>

            {/* Objective Section */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono tracking-widest text-gold uppercase font-bold border-b border-gray-200 pb-1">
                Objective
              </h2>
              <p className="text-xs md:text-sm text-gray-700 font-light leading-relaxed">
                Motivated Computer Science & Engineering student seeking an internship to apply hands-on skills in AI/ML, data science, and full-stack development. Eager to contribute to real-world projects, learn from industry professionals, and deliver impactful technology solutions.
              </p>
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono tracking-widest text-gold uppercase font-bold border-b border-gray-200 pb-1">
                Education
              </h2>
              <div className="space-y-4">
                {/* Degree 1 */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-1">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      B.Tech – Computer Science & Engineering
                    </h3>
                    <p className="text-xs text-gray-600 font-medium">Shri Ramdeobaba University, Nagpur</p>
                    <ul className="list-disc pl-4 mt-1.5 space-y-1 text-xs text-gray-600 font-light">
                      <li>Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Artificial Intelligence, Statistics</li>
                      <li>Pursuing a parallel online degree in Data Science alongside B.Tech</li>
                    </ul>
                  </div>
                  <span className="text-xs font-mono text-gray-500 font-semibold md:text-right shrink-0">Expected 2028</span>
                </div>

                {/* Degree 2 */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-1">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      B.Sc – Data Science (Online)
                    </h3>
                    <p className="text-xs text-gray-600 font-medium font-sans">Indian Institute of Technology Madras</p>
                    <ul className="list-disc pl-4 mt-1.5 space-y-1 text-xs text-gray-600 font-light">
                      <li>Foundation Level completed; focus areas: Programming, Statistics, Computational Thinking, and Data Science Foundations</li>
                    </ul>
                  </div>
                  <span className="text-xs font-mono text-gray-500 font-semibold md:text-right shrink-0">Expected 2028</span>
                </div>
              </div>
            </div>

            {/* Technical Skills Section */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono tracking-widest text-gold uppercase font-bold border-b border-gray-200 pb-1">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                <div className="space-y-1">
                  <p><strong className="font-semibold text-gray-900">Languages:</strong> <span className="text-gray-600">Python, Java, C/C++, JavaScript, SQL</span></p>
                  <p><strong className="font-semibold text-gray-900">Web Development:</strong> <span className="text-gray-600">HTML, CSS, Bootstrap, React (Basic), REST APIs, Full-Stack Development</span></p>
                  <p><strong className="font-semibold text-gray-900">Data Science & Analytics:</strong> <span className="text-gray-600">Pandas, NumPy, Data Analysis, Data Visualization, API Integration</span></p>
                </div>
                <div className="space-y-1">
                  <p><strong className="font-semibold text-gray-900">Tools & Platforms:</strong> <span className="text-gray-600">Streamlit, Git, GitHub, VS Code</span></p>
                  <p><strong className="font-semibold text-gray-900">CS Fundamentals:</strong> <span className="text-gray-600">Data Structures & Algorithms, OOP, DBMS, Problem Solving</span></p>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono tracking-widest text-gold uppercase font-bold border-b border-gray-200 pb-1">
                Projects
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    AI-Based Health Companion Application
                  </h3>
                  <ul className="list-disc pl-4 mt-1 space-y-1 text-xs text-gray-600 font-light">
                    <li>Designed a multi-agent AI health companion system for intelligent assistance and basic symptom guidance using rule-based logic and structured data processing.</li>
                    <li>Simulated real-world AI interaction workflows with a focus on usability, scalable architecture, and future AI integration readiness.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    Stock Market Analysis Dashboard
                  </h3>
                  <ul className="list-disc pl-4 mt-1 space-y-1 text-xs text-gray-600 font-light">
                    <li>Built an interactive stock analysis dashboard integrating real-time financial data via APIs and performing trend analysis using Pandas.</li>
                    <li>Developed user-friendly visual insights including charts and summaries for improved data interpretation and investment decision support.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    Full-Stack Dashboard & Chatbot Platform
                  </h3>
                  <ul className="list-disc pl-4 mt-1 space-y-1 text-xs text-gray-600 font-light">
                    <li>Developed a unified web platform featuring login/signup authentication, a dynamic dashboard, and an embedded chatbot with API integration.</li>
                    <li>Demonstrated end-to-end full-stack skills including responsive UI design, backend logic, and functional system architecture.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    Cultural Kaleidoscope – Data-Driven Web Platform
                  </h3>
                  <ul className="list-disc pl-4 mt-1 space-y-1 text-xs text-gray-600 font-light">
                    <li>Created an interactive culturally themed website showcasing Indian art and heritage using modern UI design and data visualization.</li>
                    <li>Applied structured frontend development practices with a strong emphasis on creative UX and accessibility.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Achievements & Extracurriculars Section */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono tracking-widest text-gold uppercase font-bold border-b border-gray-200 pb-1">
                Achievements & Extracurriculars
              </h2>
              <ul className="list-disc pl-4 space-y-1.5 text-xs text-gray-600 font-light">
                <li>Completed Foundation Level of an online B.Sc in Data Science while simultaneously pursuing a full-time B.Tech CSE degree, demonstrating exceptional time management.</li>
                <li>Built multiple real-world AI, data science, and full-stack projects during early undergraduate years through self-directed learning beyond curriculum.</li>
                <li>Consistent self-learner — developed practical skills in Streamlit, REST APIs, and multi-agent AI systems independently through project-based experimentation.</li>
              </ul>
            </div>

            {/* Key Strengths */}
            <div className="space-y-2 pb-6">
              <h2 className="text-xs font-mono tracking-widest text-gold uppercase font-bold border-b border-gray-200 pb-1">
                Key Strengths
              </h2>
              <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-gray-600">
                <span>• AI & Dashboard Development</span>
                <span>• Full-Stack Project Building</span>
                <span>• Analytical & Data-Driven Problem Solving</span>
                <span>• Creative UI/UX Design</span>
                <span>• Fast Learner & Self-Starter</span>
                <span>• Dual Degree Time Management</span>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
