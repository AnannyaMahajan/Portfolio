import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import Globe from '../Globe';
import { portfolioOwner } from '../../data';

interface ContactProps {
  onViewResume?: () => void;
}

export default function Contact({ onViewResume }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate premium API roundtrip
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 bg-warm-white dark:bg-bg-dark-secondary select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-[10px] font-mono tracking-widest text-gold uppercase font-semibold">
            06 / Communication
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight text-charcoal dark:text-white">
            Establish Connection
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
        </div>

        {/* Form and Globe Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Contact Form Card */}
          <div className="lg:col-span-7 bg-white dark:bg-card-dark rounded-3xl p-8 md:p-10 border border-black/5 dark:border-white/5 shadow-sm space-y-8">
            <div className="space-y-2 text-left">
              <h3 className="text-xl font-display font-light text-charcoal dark:text-white">
                Initiate a Conversation
              </h3>
              <p className="text-xs md:text-sm text-muted-gray leading-relaxed font-sans font-light">
                Fill in the details below. Our system routes transmissions directly to Anannya's communications inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {/* Name Field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-muted-gray uppercase tracking-widest font-semibold block">
                  Identify / Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Jean-Luc Picard"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4.5 py-3.5 rounded-xl bg-ivory dark:bg-bg-dark border border-black/5 dark:border-white/10 text-xs text-charcoal dark:text-text-dark placeholder-muted-gray focus:outline-none focus:border-gold/60 focus:bg-white dark:focus:bg-card-dark transition-all duration-300 font-sans"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-muted-gray uppercase tracking-widest font-semibold block">
                  Return Address / Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g., jeanluc@enterprise.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4.5 py-3.5 rounded-xl bg-ivory dark:bg-bg-dark border border-black/5 dark:border-white/10 text-xs text-charcoal dark:text-text-dark placeholder-muted-gray focus:outline-none focus:border-gold/60 focus:bg-white dark:focus:bg-card-dark transition-all duration-300 font-sans"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-muted-gray uppercase tracking-widest font-semibold block">
                  Transmission / Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your transmission proposal here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4.5 py-3.5 rounded-xl bg-ivory dark:bg-bg-dark border border-black/5 dark:border-white/10 text-xs text-charcoal dark:text-text-dark placeholder-muted-gray focus:outline-none focus:border-gold/60 focus:bg-white dark:focus:bg-card-dark transition-all duration-300 font-sans resize-none"
                />
              </div>

              {/* Submitting Feedback & Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <AnimatePresence mode="wait">
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="flex items-center gap-2 text-gold text-xs font-sans font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      Transmission delivered successfully!
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ml-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-charcoal text-white dark:bg-white dark:text-charcoal rounded-full text-xs font-sans font-medium hover:bg-gold dark:hover:bg-gold hover:text-white dark:hover:text-white transition-all duration-300 disabled:opacity-50"
                  data-cursor="SUBMIT"
                >
                  {isSubmitting ? 'Transmitting...' : 'Send Transmission'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Right: Rotating Globe & Navigation Hub */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-12 text-center">
            {/* Spinning Canvas Globe */}
            <div className="relative p-4 rounded-full border border-black/5 dark:border-white/5 bg-white/40 dark:bg-bg-dark-secondary/40 shadow-sm glass">
              <Globe />
            </div>

            {/* Direct Digital Dialects Links */}
            <div className="space-y-4 w-full max-w-sm">
              <h4 className="text-[10px] font-mono text-muted-gray uppercase tracking-widest font-semibold">
                Direct Communications
              </h4>
              
              <div className="grid grid-cols-2 gap-3">
                {/* LinkedIn */}
                <a
                  href={portfolioOwner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3.5 bg-white dark:bg-card-dark border border-black/5 dark:border-white/5 rounded-2xl hover:border-gold/30 hover:scale-102 transition-all duration-300 text-xs text-charcoal/85 dark:text-text-dark/85 font-medium"
                  data-cursor="LINKEDIN"
                >
                  <Linkedin className="w-4 h-4 text-gold" />
                  LinkedIn
                </a>

                {/* GitHub */}
                <a
                  href={portfolioOwner.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3.5 bg-white dark:bg-card-dark border border-black/5 dark:border-white/5 rounded-2xl hover:border-gold/30 hover:scale-102 transition-all duration-300 text-xs text-charcoal/85 dark:text-text-dark/85 font-medium"
                  data-cursor="GITHUB"
                >
                  <Github className="w-4 h-4 text-gold" />
                  GitHub
                </a>

                {/* Direct Email */}
                <a
                  href={`mailto:${portfolioOwner.email}`}
                  className="flex items-center gap-2.5 p-3.5 bg-white dark:bg-card-dark border border-black/5 dark:border-white/5 rounded-2xl hover:border-gold/30 hover:scale-102 transition-all duration-300 text-xs text-charcoal/85 dark:text-text-dark/85 font-medium"
                  data-cursor="EMAIL"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  Email Inbox
                </a>

                {/* Resume Download */}
                <button
                  onClick={() => onViewResume?.()}
                  className="flex items-center gap-2.5 p-3.5 bg-white dark:bg-card-dark border border-black/5 dark:border-white/5 rounded-2xl hover:border-gold/30 hover:scale-102 transition-all duration-300 text-xs text-charcoal/85 dark:text-text-dark/85 font-medium text-left"
                  data-cursor="RESUME"
                >
                  <FileText className="w-4 h-4 text-gold" />
                  Resume
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
