import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Drawer / Content Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 220, mass: 0.8 }}
            className="relative w-full max-w-3xl h-full bg-ivory dark:bg-bg-dark text-charcoal dark:text-text-dark shadow-2xl overflow-y-auto flex flex-col z-10 border-l border-black/5 dark:border-white/10"
          >
            {/* Float Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/80 dark:bg-bg-dark-secondary/80 border border-black/5 dark:border-white/10 text-charcoal dark:text-text-dark hover:scale-105 transition-all duration-300 shadow-sm hover:text-gold dark:hover:text-gold"
              title="Close Case Study"
              data-cursor="CLOSE"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Immersive Banner Header */}
            <div className="relative w-full h-[320px] md:h-[400px] shrink-0 bg-charcoal">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/20 to-black/30 dark:from-bg-dark dark:via-bg-dark/20 dark:to-black/50" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-2">
                <span className="text-[10px] font-mono tracking-widest text-gold dark:text-gold uppercase font-semibold">
                  Featured Project / {project.category}
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-light text-charcoal dark:text-white leading-none">
                  {project.title}
                </h2>
                <p className="text-xs md:text-sm text-muted-gray dark:text-muted-dark max-w-xl font-sans mt-2">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-8 md:p-12 space-y-12">
              
              {/* Grid 1: Meta Infos & Live Links */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 border-b border-black/5 dark:border-white/10">
                <div className="space-y-1">
                  <h4 className="text-[10px] font-mono text-muted-gray uppercase tracking-widest font-semibold">Role / Position</h4>
                  <p className="text-xs font-sans text-charcoal/80 dark:text-text-dark/80 font-medium">{project.caseStudy.role}</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] font-mono text-muted-gray uppercase tracking-widest font-semibold">Timeline</h4>
                  <p className="text-xs font-sans text-charcoal/80 dark:text-text-dark/80 font-medium">{project.caseStudy.timeline}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono text-muted-gray uppercase tracking-widest font-semibold">Deployments</h4>
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-gold font-medium hover:underline"
                        data-cursor="DEMO"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-muted-gray hover:text-charcoal dark:text-muted-dark dark:hover:text-text-dark font-medium transition-colors"
                        data-cursor="GITHUB"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Metrics Showcase */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xs font-mono tracking-widest text-gold uppercase font-semibold">Key Performance Metrics</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-white dark:bg-card-dark border border-black/5 dark:border-white/5 shadow-sm flex flex-col justify-center"
                      >
                        <span className="text-2xl md:text-3xl font-display font-light text-gold leading-none">{m.value}</span>
                        <span className="text-[10px] font-mono text-muted-gray dark:text-muted-dark uppercase tracking-wider mt-2 font-medium">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Full Case Narrative */}
              <div className="space-y-8 font-sans text-sm text-charcoal/90 dark:text-text-dark/90 leading-relaxed font-light">
                {/* Challenge */}
                <div className="space-y-2">
                  <h3 className="text-xs font-mono tracking-widest text-gold uppercase font-semibold">The Challenge</h3>
                  <p>{project.caseStudy.challenge}</p>
                </div>

                {/* Solution */}
                <div className="space-y-2">
                  <h3 className="text-xs font-mono tracking-widest text-gold uppercase font-semibold">The Engineered Solution</h3>
                  <p>{project.caseStudy.solution}</p>
                </div>

                {/* Outcomes & Results */}
                <div className="space-y-4">
                  <h3 className="text-xs font-mono tracking-widest text-gold uppercase font-semibold">Measurable Results</h3>
                  <div className="space-y-3">
                    {project.caseStudy.results.map((r, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <p className="text-charcoal/80 dark:text-text-dark/80">{r}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="space-y-3 pt-6 border-t border-black/5 dark:border-white/10">
                <h4 className="text-[10px] font-mono text-muted-gray uppercase tracking-widest font-semibold">Applied Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[10px] font-mono bg-white dark:bg-card-dark border border-black/5 dark:border-white/10 text-muted-gray dark:text-muted-dark rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Outro */}
            <div className="p-8 bg-white dark:bg-bg-dark-secondary/40 border-t border-black/5 dark:border-white/10 flex justify-between items-center shrink-0">
              <span className="text-[10px] font-mono text-muted-gray dark:text-muted-dark tracking-wider">
                Case Study © 2026 Anannya Mahajan
              </span>
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-xs font-sans text-charcoal hover:text-gold dark:text-white dark:hover:text-gold font-medium transition-colors"
              >
                Close Case Study
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
