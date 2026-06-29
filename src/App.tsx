import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Compass,
  Layers,
  Award,
  Cpu,
  FileText,
  Mail,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Moon,
  Sun,
  Eye,
  Github
} from 'lucide-react';

// Types & Data
import { Project, Achievement, BlogPost } from './types';
import {
  portfolioOwner,
  projectsData,
  achievementsData,
  blogsData,
  testimonialsData
} from './data';

// Custom Components
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import CommandMenu from './components/CommandMenu';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import SkillsConstellation from './components/SkillsConstellation';

// Section Modular Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

// Lightweight animated counter component
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const speed = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += speed;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="font-display text-4xl md:text-5xl font-light text-gold leading-none">
      {count}
      {suffix}
    </span>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDark, setIsDark] = useState(() => {
    // Check initial local storage or system preference
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Apply dark class to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'achievements', 'blog', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal dark:bg-bg-dark dark:text-text-dark font-sans transition-colors duration-500 overflow-x-hidden relative">
      
      {/* Custom Mouse Cursor with spring movement */}
      <CustomCursor />

      {/* Ambient Moving Particle Grid on Canvas */}
      <ParticleBackground />

      <AnimatePresence mode="wait">
        {loading ? (
          // Elegant Loading Intro Screen
          <motion.div key="loader">
            <LoadingScreen onComplete={() => setLoading(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col relative z-10"
          >
            
            {/* Scroll Progress Indicator */}
            <div className="fixed top-0 left-0 right-0 h-[3px] bg-charcoal/5 dark:bg-white/10 z-50">
              <motion.div
                className="h-full bg-gold"
                style={{
                  scaleX: 0,
                  transformOrigin: '0%',
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Premium Header / Glass Navigation */}
            <header className="fixed top-4 left-4 right-4 z-40 max-w-7xl mx-auto">
              <nav className="w-full px-6 py-4 rounded-full border border-black/5 dark:border-white/5 bg-white/60 dark:bg-bg-dark-secondary/60 glass flex items-center justify-between shadow-sm">
                
                {/* Brand Signature */}
                <button
                  onClick={() => handleNavigate('hero')}
                  className="flex items-center gap-2 font-display text-xs md:text-sm tracking-widest text-charcoal dark:text-white uppercase font-light"
                  data-cursor="HOME"
                >
                  <span>ANANNYA</span>
                  <span className="text-gold font-normal">•</span>
                  <span className="text-muted-gray dark:text-muted-dark">MAHAJAN</span>
                </button>

                {/* Center Navigation Nodes */}
                <div className="hidden md:flex items-center gap-7">
                  {['about', 'skills', 'projects', 'blog', 'contact'].map((section) => (
                    <button
                      key={section}
                      onClick={() => handleNavigate(section)}
                      className={`text-xs font-sans tracking-wide uppercase transition-all duration-300 relative ${
                        activeSection === section
                          ? 'text-gold font-medium'
                          : 'text-muted-gray hover:text-charcoal dark:hover:text-text-dark'
                      }`}
                      data-cursor="GOTO"
                    >
                      {section}
                      {activeSection === section && (
                        <motion.span
                          layoutId="nav-dot"
                          className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Right Utilities (Theme, CmdK, Mobile Menu) */}
                <div className="flex items-center gap-3">
                  
                  {/* Keyboard search console command menu */}
                  <CommandMenu
                    onToggleTheme={handleToggleTheme}
                    isDark={isDark}
                    onNavigate={handleNavigate}
                    onViewResume={() => setIsResumeOpen(true)}
                  />

                  {/* Dark Mode Toggle */}
                  <button
                    onClick={handleToggleTheme}
                    className="p-2 rounded-full border border-black/5 dark:border-white/5 bg-warm-white/40 dark:bg-bg-dark-secondary/30 text-muted-gray hover:text-gold dark:hover:text-gold transition-colors duration-300"
                    title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    data-cursor="THEME"
                  >
                    {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </button>

                  {/* Mobile Menu Toggle Button */}
                  <button
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 rounded-full border border-black/5 dark:border-white/5 text-muted-gray hover:text-charcoal dark:hover:text-text-dark"
                  >
                    {mobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
                  </button>
                </div>
              </nav>

              {/* Mobile Drawer Menu Menu */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-18 left-0 right-0 p-6 bg-white/95 dark:bg-bg-dark-secondary/95 border border-black/5 dark:border-white/10 rounded-2xl shadow-xl glass md:hidden flex flex-col gap-4 text-left z-30"
                  >
                    {['about', 'skills', 'projects', 'blog', 'contact'].map((sec) => (
                      <button
                        key={sec}
                        onClick={() => handleNavigate(sec)}
                        className={`text-sm font-sans tracking-widest uppercase font-light border-b border-black/5 dark:border-white/5 pb-2 text-left ${
                          activeSection === sec ? 'text-gold' : 'text-charcoal dark:text-text-dark'
                        }`}
                      >
                        {sec}
                      </button>
                    ))}
                    <button
                      onClick={() => {
                        setIsResumeOpen(true);
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-between text-xs font-mono text-gold font-semibold pt-2"
                    >
                      VIEW / PRINT RESUME
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </header>

            {/* --- SECTIONS --- */}

            {/* 1. HERO SECTION */}
            <Hero onNavigate={handleNavigate} />

            {/* 2. ABOUT STORY */}
            <About />

            {/* 3. TECHNICAL CONSTELLATION SKILLS */}
            <section id="skills" className="py-24 px-6 md:px-16 lg:px-24 bg-white dark:bg-bg-dark select-none">
              <div className="max-w-7xl mx-auto space-y-16">
                
                {/* Header */}
                <div className="text-center space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-gold uppercase font-semibold">
                    02 / Aptitude
                  </span>
                  <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight text-charcoal dark:text-white">
                    Core Specializations
                  </h2>
                  <div className="w-12 h-[1px] bg-gold mx-auto" />
                </div>

                {/* Sub-Interactive Constellation Bento */}
                <SkillsConstellation />
              </div>
            </section>

            {/* 4. FEATURED PROJECTS SHOWCASE */}
            <section id="projects" className="py-24 px-6 md:px-16 lg:px-24 bg-warm-white dark:bg-bg-dark-secondary select-none">
              <div className="max-w-7xl mx-auto space-y-16">
                
                {/* Header */}
                <div className="text-center space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-gold uppercase font-semibold">
                    03 / Proof of Craft
                  </span>
                  <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight text-charcoal dark:text-white">
                    Featured Innovations
                  </h2>
                  <div className="w-12 h-[1px] bg-gold mx-auto" />
                </div>

                {/* Projects Visual Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                  {projectsData.map((project, idx) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      onClick={() => setSelectedProject(project)}
                      className="group bg-white dark:bg-card-dark rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 shadow-sm hover:shadow-2xl dark:hover:shadow-gold/5 hover:border-gold/20 flex flex-col justify-between transition-all duration-500 cursor-pointer h-full"
                      data-cursor="DISCOVER"
                    >
                      {/* Image thumbnail frame */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                        />
                        {/* Overlay tags */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="px-3 py-1 text-[9px] font-mono bg-black/75 backdrop-blur-md text-white border border-white/10 rounded-full tracking-wider uppercase font-semibold">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Info Panel block */}
                      <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-2 text-left">
                          <h3 className="text-xl font-display font-medium text-charcoal dark:text-white group-hover:text-gold transition-colors duration-300 leading-snug">
                            {project.title}
                          </h3>
                          <p className="text-xs md:text-sm text-muted-gray dark:text-muted-dark leading-relaxed font-sans font-light">
                            {project.description}
                          </p>
                        </div>

                        {/* Tech Pile and CTA */}
                        <div className="space-y-4 pt-3 text-left">
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-1 text-[9px] font-mono bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-muted-gray rounded-md"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-1.5 text-xs text-gold font-medium font-sans border-t border-black/5 dark:border-white/5 pt-3 group-hover:translate-x-1.5 transition-transform duration-300">
                            Explore Case Study
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Apple Product Case Study Drawer Modal */}
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />

            {/* Interactive Resume Modal */}
            <ResumeModal
              isOpen={isResumeOpen}
              onClose={() => setIsResumeOpen(false)}
            />

            {/* 5. ACHIEVEMENTS & STATISTICS */}
            <section id="achievements" className="py-24 px-6 md:px-16 lg:px-24 bg-white dark:bg-bg-dark select-none">
              <div className="max-w-7xl mx-auto space-y-20">
                
                {/* Header */}
                <div className="text-center space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-gold uppercase font-semibold">
                    04 / Placements
                  </span>
                  <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight text-charcoal dark:text-white">
                    Milestone Placements
                  </h2>
                  <div className="w-12 h-[1px] bg-gold mx-auto" />
                </div>

                {/* Animated Stat Counter Panels (Apple Grid style) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Completed Projects', target: 12, suffix: '+' },
                    { label: 'Sprints / Hackathons', target: 6, suffix: '' },
                    { label: 'GitHub Commits', target: 1200, suffix: '+' },
                    { label: 'Core Technical Languages', target: 8, suffix: '' }
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-8 bg-warm-white dark:bg-bg-dark-secondary rounded-2xl border border-black/5 dark:border-white/5 text-center space-y-3 flex flex-col justify-center items-center shadow-sm"
                    >
                      <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                      <span className="text-[10px] font-mono text-muted-gray uppercase tracking-widest mt-1 font-semibold">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Horizontal Scrolling achievements list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch pt-6">
                  {achievementsData.map((ach) => (
                    <div
                      key={ach.id}
                      className="p-6 bg-warm-white dark:bg-bg-dark-secondary border border-black/5 dark:border-white/5 rounded-2xl text-left space-y-4 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex justify-between items-center gap-2">
                          <span className="text-[9px] font-mono text-gold bg-gold/10 px-2.5 py-1 rounded-full font-semibold uppercase">
                            {ach.category}
                          </span>
                          <span className="text-[10px] font-mono text-muted-gray">{ach.date}</span>
                        </div>
                        <h4 className="text-base font-sans font-medium text-charcoal dark:text-white leading-snug">
                          {ach.title}
                        </h4>
                        <p className="text-xs text-muted-gray dark:text-muted-dark leading-relaxed font-light font-sans">
                          {ach.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs font-mono text-charcoal/80 dark:text-text-dark/80 font-medium border-t border-black/5 dark:border-white/5 pt-3">
                        <span className="text-gold">✦</span>
                        Issued by: {ach.issuer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. TESTIMONIALS DRAGGABLE BOARD */}
            <section id="testimonials" className="py-24 px-6 md:px-16 lg:px-24 bg-warm-white dark:bg-bg-dark-secondary select-none overflow-hidden">
              <div className="max-w-7xl mx-auto space-y-16 text-center">
                
                {/* Header */}
                <div className="space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-gold uppercase font-semibold">
                    04 / Peer Review
                  </span>
                  <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight text-charcoal dark:text-white">
                    Mutually Confirmed Trust
                  </h2>
                  <div className="w-12 h-[1px] bg-gold mx-auto" />
                </div>

                {/* Scrolling review container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
                  {testimonialsData.map((t, idx) => (
                    <motion.div
                      key={t.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 }}
                      className="p-8 bg-white dark:bg-card-dark rounded-3xl border border-black/5 dark:border-white/5 shadow-sm space-y-6 flex flex-col justify-between text-left"
                      data-cursor="READ"
                    >
                      {/* Quote Mark */}
                      <span className="font-display text-4xl text-gold leading-none font-bold">“</span>
                      
                      {/* Quote Text */}
                      <p className="text-xs md:text-sm text-charcoal/80 dark:text-text-dark/85 leading-relaxed font-sans font-light flex-1">
                        {t.quote}
                      </p>

                      {/* Author Card Block */}
                      <div className="flex items-center gap-3.5 pt-4 border-t border-black/5 dark:border-white/5">
                        <img
                          src={t.avatar}
                          alt={t.author}
                          referrerPolicy="no-referrer"
                          className="w-9 h-9 rounded-full object-cover border border-gold/40"
                        />
                        <div className="space-y-0.5">
                          <h5 className="text-xs font-sans font-semibold text-charcoal dark:text-white leading-tight">
                            {t.author}
                          </h5>
                          <p className="text-[9px] font-mono text-muted-gray uppercase tracking-wider">
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* 7. EDITORIAL BLOG MAGAZINE */}
            <section id="blog" className="py-24 px-6 md:px-16 lg:px-24 bg-white dark:bg-bg-dark select-none">
              <div className="max-w-7xl mx-auto space-y-16">
                
                {/* Header */}
                <div className="text-center space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-gold uppercase font-semibold">
                    05 / Publications
                  </span>
                  <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight text-charcoal dark:text-white">
                    Editorial Musings
                  </h2>
                  <div className="w-12 h-[1px] bg-gold mx-auto" />
                </div>

                {/* Magazine grid layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {blogsData.map((blog) => (
                    <article
                      key={blog.id}
                      onClick={() => alert(`Magazine Article "${blog.title}" Mock opened. This features Anannya Mahajan's complete editorial piece in production.`)}
                      className="group bg-warm-white dark:bg-bg-dark-secondary rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 flex flex-col justify-between hover:shadow-xl dark:hover:shadow-gold/5 transition-all duration-300 cursor-pointer text-left"
                      data-cursor="READ"
                    >
                      {/* Image frame */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover opacity-90 group-hover:scale-102 transition-transform duration-700"
                        />
                      </div>

                      {/* Info block */}
                      <div className="p-6.5 space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex gap-2 items-center text-[10px] font-mono text-muted-gray tracking-wider">
                            <span>{blog.date}</span>
                            <span>•</span>
                            <span>{blog.readTime}</span>
                          </div>

                          <h3 className="text-lg font-display font-medium text-charcoal dark:text-white group-hover:text-gold transition-colors duration-300 leading-snug">
                            {blog.title}
                          </h3>

                          <p className="text-xs text-muted-gray dark:text-muted-dark leading-relaxed font-sans font-light line-clamp-2">
                            {blog.summary}
                          </p>
                        </div>

                        {/* Article bottom markers */}
                        <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
                          <div className="flex flex-wrap gap-1">
                            {blog.tags.map((tg) => (
                              <span key={tg} className="text-[8px] font-mono text-gold bg-gold/5 px-2 py-0.5 rounded border border-gold/10">
                                {tg}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center gap-1 text-[9px] font-mono text-muted-gray">
                            <Eye className="w-3 h-3" />
                            {blog.views}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* 8. CONTACT FORM DESK & GLOBE SPLIT */}
            <Contact onViewResume={() => setIsResumeOpen(true)} />

            {/* 9. THEME TRANSITIONED FOOTER */}
            <footer className="py-12 px-6 md:px-16 lg:px-24 bg-white dark:bg-bg-dark border-t border-black/5 dark:border-white/5 select-none text-center">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-muted-gray">
                
                {/* Branding footer */}
                <div className="space-y-1 md:text-left">
                  <p className="text-xs font-mono tracking-widest text-charcoal dark:text-text-dark uppercase font-semibold">
                    Anannya Mahajan
                  </p>
                  <p className="text-[10px] font-mono tracking-wider">
                    Computer Science & Engineering Student
                  </p>
                </div>

                {/* Signature typography */}
                <div className="font-display italic text-lg text-gold font-light tracking-wide py-2">
                  Anannya Mahajan
                </div>

                {/* Copyright credits */}
                <div className="space-y-1 md:text-right">
                  <p className="text-[10px] font-mono tracking-widest">
                    Crafted with ❤️ by Anannya Mahajan
                  </p>
                  <p className="text-[9px] font-mono tracking-wider">
                    © 2026 / Delhi, India. All rights reserved.
                  </p>
                </div>

              </div>
            </footer>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
