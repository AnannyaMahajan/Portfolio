import { motion } from 'motion/react';
import { experienceTimeline } from '../../data';
import { Sparkles, Calendar, MapPin, Award } from 'lucide-react';

export default function About() {
  const portraitUrl = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600';

  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24 bg-warm-white dark:bg-bg-dark-secondary select-none">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-[10px] font-mono tracking-widest text-gold uppercase font-semibold">
            01 / Narrative
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight text-charcoal dark:text-white">
            The Story Behind the Engineering
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Beautiful Editorial Portrait Frame */}
          <div className="lg:col-span-5 relative group">
            {/* Outer golden frame line */}
            <div className="absolute -inset-4 border border-gold/20 rounded-2xl pointer-events-none group-hover:inset-0 transition-all duration-500" />
            
            {/* Main picture card */}
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-card-dark border border-black/5 dark:border-white/5 shadow-md">
              <img
                src={portraitUrl}
                alt="Anannya Mahajan Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[4/5] object-cover group-hover:scale-105 filter grayscale hover:grayscale-0 transition-all duration-700"
                data-cursor="HELLO"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none opacity-60" />
              
              {/* Location Badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-full text-[9px] font-mono text-white tracking-wider border border-white/10 uppercase">
                <MapPin className="w-3 h-3 text-gold" />
                Delhi, India
              </div>
            </div>

            {/* Backplate decoration */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold/10 rounded-full blur-2xl -z-10 animate-pulse" />
          </div>

          {/* Right: Detailed Story & Academic Milestones */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6 font-sans text-sm md:text-base text-charcoal/80 dark:text-text-dark/85 leading-relaxed font-light">
              <p className="font-sans text-lg font-normal text-charcoal dark:text-white leading-relaxed">
                As a B.Tech Computer Science & Engineering and B.Sc Data Science student, I spend my days building intelligent systems, processing data, and developing functional full-stack solutions.
              </p>
              <p>
                My passion lies at the intersection of AI, data analysis, and software engineering. I combine analytical computation with practical software development to design platforms that are both statistically powerful and exceptionally intuitive.
              </p>
              <p>
                Whether integrating real-time API feeds, performing predictive data modeling with Pandas, or building clean responsive dashboards, I strive for algorithmic efficiency, structured clean code, and user-centric features.
              </p>
            </div>

            {/* Core Tech Quick Grid */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono text-muted-gray uppercase tracking-widest font-semibold">
                Daily Technical Dialects
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {['Python', 'Java & C++', 'Data Science & Pandas', 'SQL & Databases', 'React & REST APIs', 'Streamlit & Git'].map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-1.5 px-4.5 py-2 bg-white dark:bg-card-dark border border-black/5 dark:border-white/5 text-xs text-charcoal/80 dark:text-text-dark/80 rounded-full shadow-sm"
                  >
                    <Sparkles className="w-3 h-3 text-gold" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline Sub-grid */}
        <div className="space-y-12 pt-12 border-t border-black/5 dark:border-white/5">
          <div className="text-center space-y-2">
            <h3 className="text-xl md:text-2xl font-display font-light text-charcoal dark:text-white">
              The Path Traveled
            </h3>
            <p className="text-[10px] font-mono tracking-widest text-muted-gray uppercase">
              Academic & Professional Milestones
            </p>
          </div>

          {/* Vertical Timelines with Glass Cards */}
          <div className="relative max-w-4xl mx-auto space-y-8 pl-6 md:pl-10 before:absolute before:left-[11px] md:before:left-[15px] before:top-4 before:bottom-4 before:w-[1px] before:bg-gold/30">
            {experienceTimeline.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative space-y-3"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[21px] md:-left-[29px] top-1.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-ivory dark:bg-bg-dark border-[2px] border-gold flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                </div>

                {/* Main Card */}
                <div className="p-6 bg-white dark:bg-card-dark rounded-2xl border border-black/5 dark:border-white/5 shadow-sm space-y-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h4 className="text-base font-sans font-medium text-charcoal dark:text-white">
                        {exp.role}
                      </h4>
                      <p className="text-xs text-gold font-medium font-mono uppercase tracking-wide mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-gray dark:text-muted-dark font-mono bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 px-3 py-1 rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </div>
                  </div>

                  {/* Bullet description points */}
                  <ul className="space-y-2 pl-4 list-disc text-xs md:text-sm text-muted-gray dark:text-muted-dark leading-relaxed font-light">
                    {exp.description.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
