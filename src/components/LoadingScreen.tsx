import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const STEPS = [
  'ANANNYA',
  'MAHAJAN',
  'Building',
  'Experiences',
  'Loading Portfolio...'
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Sequence through the texts
    const textInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < STEPS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(textInterval);
          return prev;
        }
      });
    }, 550);

    // Progress counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(progressInterval);
          setTimeout(() => {
            onComplete();
          }, 350);
          return 100;
        }
      });
    }, 28);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      id="loading-screen"
      className="fixed inset-0 bg-ivory text-charcoal flex flex-col justify-between p-12 z-50 select-none"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
    >
      {/* Decorative Top Left Info */}
      <div className="flex justify-between items-start font-mono text-[10px] tracking-widest text-muted-gray uppercase">
        <div className="space-y-1">
          <p>ANANNYA MAHAJAN</p>
          <p>PORTFOLIO 2026 / V1.0</p>
        </div>
        <div className="text-right space-y-1">
          <p>DELHI, INDIA</p>
          <p>28°36' N / 77°12' E</p>
        </div>
      </div>

      {/* Main text container */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="h-24 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentStep}
              initial={{ opacity: 0, y: 35, rotateX: -25, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -35, rotateX: 25, filter: 'blur(10px)' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-7xl font-display font-light uppercase tracking-widest text-charcoal text-center"
            >
              {STEPS[currentStep]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Progress Indicator */}
      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-between items-end font-mono text-[10px] tracking-widest text-muted-gray">
          <span>CREATIVE DEVELOPER & DESIGNER</span>
          <span className="text-right">{progress}%</span>
        </div>
        
        {/* Sleek Progress Bar */}
        <div className="w-full h-[1px] bg-charcoal/10 relative overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 bottom-0 bg-gold"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
