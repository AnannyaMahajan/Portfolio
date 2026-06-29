import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Compass, Moon, Sun, Mail, Github, Linkedin, FileText, ArrowRight } from 'lucide-react';

interface CommandMenuProps {
  onToggleTheme: () => void;
  isDark: boolean;
  onNavigate: (sectionId: string) => void;
  onViewResume: () => void;
}

export default function CommandMenu({ onToggleTheme, isDark, onNavigate, onViewResume }: CommandMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const commands = [
    { id: 'nav-hero', label: 'Go to Hero Section', icon: Compass, action: () => onNavigate('hero'), category: 'Navigation' },
    { id: 'nav-about', label: 'Go to About Story', icon: Compass, action: () => onNavigate('about'), category: 'Navigation' },
    { id: 'nav-skills', label: 'Go to Technical Skills', icon: Compass, action: () => onNavigate('skills'), category: 'Navigation' },
    { id: 'nav-projects', label: 'Go to Featured Projects', icon: Compass, action: () => onNavigate('projects'), category: 'Navigation' },
    { id: 'nav-timeline', label: 'Go to Experience Timeline', icon: Compass, action: () => onNavigate('timeline'), category: 'Navigation' },
    { id: 'nav-achievements', label: 'Go to Achievements & Stats', icon: Compass, action: () => onNavigate('achievements'), category: 'Navigation' },
    { id: 'nav-testimonials', label: 'Go to Peer Endorsements', icon: Compass, action: () => onNavigate('testimonials'), category: 'Navigation' },
    { id: 'nav-blog', label: 'Go to Editorial Blog', icon: Compass, action: () => onNavigate('blog'), category: 'Navigation' },
    { id: 'nav-contact', label: 'Go to Contact Desk', icon: Compass, action: () => onNavigate('contact'), category: 'Navigation' },
    
    { id: 'theme', label: `Switch to ${isDark ? 'Light' : 'Dark'} Theme`, icon: isDark ? Sun : Moon, action: onToggleTheme, category: 'Preferences' },
    
    { id: 'contact-email', label: 'Compose Email to Anannya', icon: Mail, action: () => window.open('mailto:anannyamahajan00@gmail.com'), category: 'Social / Outbound' },
    { id: 'social-linkedin', label: 'Visit LinkedIn Profile', icon: Linkedin, action: () => window.open('https://www.linkedin.com/in/anannya-mahajan', '_blank'), category: 'Social / Outbound' },
    { id: 'social-github', label: 'View GitHub Repositories', icon: Github, action: () => window.open('https://github.com/AnannyaMahajan', '_blank'), category: 'Social / Outbound' },
    { id: 'resume', label: 'View & Print Resume (PDF / Print-friendly)', icon: FileText, action: () => onViewResume(), category: 'Social / Outbound' },
  ];

  // Filter commands by search string
  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      // Delay focus slightly to ensure render complete
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  // Handle up/down arrow controls and enter select
  useEffect(() => {
    const handleNavigationKeys = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          setIsOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleNavigationKeys);
    return () => window.removeEventListener('keydown', handleNavigationKeys);
  }, [isOpen, selectedIndex, filteredCommands]);

  const handleCommandClick = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  return (
    <>
      {/* Search Overlay/Floating Hint in Nav */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/5 dark:border-white/5 bg-warm-white/40 dark:bg-bg-dark-secondary/30 text-xs text-muted-gray hover:text-charcoal dark:hover:text-text-dark hover:border-gold/30 hover:bg-white dark:hover:bg-card-dark transition-all duration-300"
        title="Open Command Menu (⌘K)"
        data-cursor="SEARCH"
      >
        <Search className="w-3.5 h-3.5" />
        <span className="hidden sm:inline font-sans">Command</span>
        <kbd className="text-[10px] bg-charcoal/5 dark:bg-white/10 px-1.5 py-0.5 rounded font-mono border border-black/5 dark:border-white/5">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />

            {/* Dialog Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl bg-white/90 dark:bg-bg-dark-secondary/90 border border-black/5 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden glass z-10 flex flex-col max-h-[480px]"
            >
              {/* Search Bar Header */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-black/5 dark:border-white/5">
                <Search className="w-5 h-5 text-muted-gray" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search section..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedIndex(0);
                  }}
                  className="flex-1 bg-transparent border-none text-charcoal dark:text-text-dark text-sm placeholder-muted-gray outline-none w-full font-sans"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[10px] bg-charcoal/5 dark:bg-white/10 px-2 py-1 rounded font-mono border border-black/5 dark:border-white/5 text-muted-gray hover:text-charcoal dark:hover:text-text-dark"
                >
                  ESC
                </button>
              </div>

              {/* Commands List */}
              <div className="flex-1 overflow-y-auto p-2 space-y-3">
                {filteredCommands.length > 0 ? (
                  // Group by categories
                  Object.entries(
                    filteredCommands.reduce((acc, cmd) => {
                      if (!acc[cmd.category]) acc[cmd.category] = [];
                      acc[cmd.category].push(cmd);
                      return acc;
                    }, {} as Record<string, typeof commands>)
                  ).map(([category, items]) => (
                    <div key={category} className="space-y-1">
                      <h3 className="px-3 py-1.5 text-[10px] font-mono font-medium tracking-widest text-gold uppercase">
                        {category}
                      </h3>
                      {items.map((cmd) => {
                        const globalIndex = filteredCommands.findIndex((c) => c.id === cmd.id);
                        const isSelected = globalIndex === selectedIndex;
                        const Icon = cmd.icon;

                        return (
                          <div
                            key={cmd.id}
                            onClick={() => handleCommandClick(cmd.action)}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-gold/10 dark:bg-gold/20 text-gold font-medium border-l-2 border-gold pl-4'
                                : 'text-charcoal/80 dark:text-text-dark/80 hover:bg-black/5 dark:hover:bg-white/5'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="w-4 h-4" />
                              <span className="text-xs font-sans">{cmd.label}</span>
                            </div>
                            {isSelected && (
                              <motion.div layoutId="cmd-arrow" transition={{ type: 'spring', stiffness: 500, damping: 30 }}>
                                <ArrowRight className="w-3.5 h-3.5 text-gold" />
                              </motion.div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))
                ) : (
                  <div className="py-12 text-center text-xs text-muted-gray font-sans">
                    No results found for "{search}"
                  </div>
                )}
              </div>

              {/* Help Footer */}
              <div className="px-4 py-2 bg-charcoal/5 dark:bg-white/5 border-t border-black/5 dark:border-white/5 flex justify-between items-center text-[10px] font-mono text-muted-gray tracking-wider">
                <div className="flex gap-4">
                  <span>↑↓ Navigate</span>
                  <span>↵ Select</span>
                </div>
                <span>⌘K to close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
