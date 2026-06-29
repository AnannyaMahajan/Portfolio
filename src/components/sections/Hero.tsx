import { motion } from 'motion/react';
import { ArrowDown, Mail, Compass } from 'lucide-react';
import { portfolioOwner } from '../../data';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 overflow-hidden select-none"
    >
      {/* Decorative Radial Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0 pointer-events-none" />

      {/* Decorative Moving Soft Gradient Orb */}
      <div className="absolute top-1/4 right-1/12 w-[350px] h-[350px] rounded-full bg-gold/10 blur-[80px] animate-pulse-slow z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/12 w-[300px] h-[300px] rounded-full bg-deep-navy/5 dark:bg-gold/5 blur-[90px] animate-pulse-slow z-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Col: Typographies & CTA */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Subtle Intro Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full border border-black/5 dark:border-white/5 bg-white/40 dark:bg-bg-dark-secondary/40 glass text-[10px] font-mono tracking-widest text-muted-gray uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
            <span>Available for innovative projects 2026</span>
          </motion.div>

          {/* Huge Editorial Headline */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg font-mono text-gold font-light tracking-wide"
            >
              Hi, I'm
            </motion.h3>
            
            <motion.h1
              initial={{ opacity: 0, y: 35, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-display font-light text-charcoal dark:text-white tracking-tight leading-[0.9]"
            >
              {portfolioOwner.name}
            </motion.h1>

            {/* Sub-headline loops */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="h-14 flex items-center overflow-hidden"
            >
              <h2 className="text-2xl md:text-3xl font-sans font-light tracking-tight text-muted-gray dark:text-muted-dark">
                Computer Science Student. <span className="text-charcoal dark:text-text-dark font-medium">AI Enthusiast.</span> Hackathon Builder.
              </h2>
            </motion.div>
          </div>

          {/* Subtitle/Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-sm text-muted-gray max-w-md leading-relaxed font-sans font-light"
          >
            {portfolioOwner.bio}
          </motion.p>

          {/* CTAs with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            {/* Magnetic primary button */}
            <button
              onClick={() => onNavigate('projects')}
              className="group flex items-center gap-2.5 px-7 py-3.5 bg-charcoal text-white dark:bg-white dark:text-charcoal rounded-full text-xs font-sans font-medium hover:bg-gold dark:hover:bg-gold hover:text-white dark:hover:text-white transition-all duration-300 shadow-lg shadow-black/5"
              data-cursor="VIEW"
            >
              <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
              View Work
            </button>

            {/* Magnetic secondary button */}
            <button
              onClick={() => onNavigate('contact')}
              className="flex items-center gap-2 px-7 py-3.5 border border-black/10 dark:border-white/10 rounded-full text-xs font-sans font-medium hover:border-gold/50 text-charcoal dark:text-text-dark hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all duration-300"
              data-cursor="CONNECT"
            >
              <Mail className="w-4 h-4" />
              Let's Connect
            </button>
          </motion.div>
        </div>

        {/* Right Col: Mesh Mesh Grid / Geometric wireframes */}
        <div className="lg:col-span-5 flex justify-center items-center relative min-h-[300px]">
          {/* Animated Mesh / Abstract Wireframe Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-72 h-72 md:w-80 md:h-80"
          >
            {/* 3D Geometric Ring */}
            <div className="absolute inset-0 rounded-full border-[1.5px] border-gold/25 dark:border-gold/15 animate-pulse" />
            <div className="absolute inset-4 rounded-full border border-dashed border-charcoal/5 dark:border-white/5 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-8 rounded-full border border-gold/10 dark:border-gold/5 animate-[spin_60s_linear_infinite_reverse]" />
            <div className="absolute inset-16 rounded-full border-[2px] border-double border-gold/15 dark:border-gold/10" />

            {/* Glowing Golden Core */}
            <div className="absolute inset-[30%] rounded-full bg-gradient-to-tr from-gold to-white opacity-10 dark:opacity-5 blur-xl animate-pulse" />

            {/* Geometric Nodes orbits */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
              className="absolute inset-0"
            >
              <div className="absolute -top-1 left-1/2 w-3 h-3 rounded-full bg-gold border border-white dark:border-bg-dark shadow-md" />
              <div className="absolute -bottom-1 left-1/2 w-2 h-2 rounded-full bg-deep-navy dark:bg-white" />
            </motion.div>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
              className="absolute inset-6"
            >
              <div className="absolute top-1/2 -right-1.5 w-2 h-2 rounded-full bg-gold" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bounce scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[9px] font-mono tracking-widest text-muted-gray uppercase">Scroll Story</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="text-muted-gray"
        >
          <ArrowDown className="w-4 h-4 text-gold" />
        </motion.div>
      </div>
    </section>
  );
}
