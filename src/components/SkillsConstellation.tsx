import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillsData } from '../data';
import { Cpu, Layout, Code2, Database, Terminal, Compass, Layers } from 'lucide-react';

export default function SkillsConstellation() {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].id);

  const getIcon = (id: string) => {
    switch (id) {
      case 'webdev':
        return Layout;
      case 'datascience':
        return Database;
      case 'languages':
        return Code2;
      case 'fundamentals':
        return Cpu;
      case 'tools':
        return Terminal;
      default:
        return Compass;
    }
  };

  const currentCategory = skillsData.find((cat) => cat.id === activeCategory) || skillsData[0];

  return (
    <div className="w-full space-y-12">
      {/* Category Tabs Navigation */}
      <div className="flex flex-wrap gap-2 justify-center pb-2 border-b border-black/5 dark:border-white/5">
        {skillsData.map((cat) => {
          const Icon = getIcon(cat.id);
          const isActive = cat.id === activeCategory;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-medium transition-all duration-300 relative ${
                isActive
                  ? 'text-white'
                  : 'text-muted-gray hover:text-charcoal dark:hover:text-text-dark bg-transparent'
              }`}
              data-cursor="SELECT"
            >
              {isActive && (
                <motion.div
                  layoutId="active-skill-tab"
                  className="absolute inset-0 bg-gold rounded-full z-0 shadow-lg shadow-gold/20"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10">{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Spheres Container */}
      <div className="min-h-[280px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
          >
            {currentCategory.skills.map((skill, index) => {
              // Convert level percentage to elegant circumference calculations for SVG rings
              const radius = 35;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = circumference - (skill.level / 100) * circumference;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, type: 'spring', stiffness: 200, damping: 20 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="p-5 bg-white dark:bg-card-dark rounded-2xl border border-black/5 dark:border-white/5 flex flex-col items-center text-center shadow-sm relative overflow-hidden group hover:border-gold/30 hover:shadow-xl dark:hover:shadow-gold/5 hover:shadow-black/5 transition-all duration-300"
                  data-cursor={skill.name}
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* SVG Circular Level indicator */}
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      {/* Gray track ring */}
                      <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        className="stroke-black/5 dark:stroke-white/5"
                        strokeWidth="3.5"
                        fill="transparent"
                      />
                      {/* Animated Gold Ring */}
                      <motion.circle
                        cx="40"
                        cy="40"
                        r={radius}
                        className="stroke-gold"
                        strokeWidth="3.5"
                        fill="transparent"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.08 }}
                      />
                    </svg>
                    
                    {/* Level Number in Center */}
                    <span className="absolute text-xs font-mono font-medium text-charcoal/80 dark:text-text-dark/80 group-hover:text-gold transition-colors duration-300">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Skill Title */}
                  <h4 className="mt-4 text-xs font-sans font-medium text-charcoal/90 dark:text-text-dark/90 tracking-tight group-hover:text-gold transition-colors duration-300">
                    {skill.name}
                  </h4>
                  
                  {/* Small decorative corner dot */}
                  <div className="absolute top-2.5 right-2.5 w-1 h-1 rounded-full bg-black/10 dark:bg-white/10 group-hover:bg-gold transition-colors" />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Constellation Info */}
      <div className="text-center">
        <p className="text-[10px] font-mono tracking-widest text-muted-gray uppercase">
          ✦ Hover over any skill sphere to inspect proficiency velocity ✦
        </p>
      </div>
    </div>
  );
}
