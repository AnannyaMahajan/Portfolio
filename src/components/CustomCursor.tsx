import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is touch-based
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Dynamic hover listeners for cursor text/expansion
    const updateCursorState = () => {
      const hoverables = document.querySelectorAll('[data-cursor]');
      hoverables.forEach((el) => {
        const handleElEnter = () => {
          const text = el.getAttribute('data-cursor') || '';
          setCursorText(text);
          setIsHovering(true);
        };
        const handleElLeave = () => {
          setCursorText('');
          setIsHovering(false);
        };

        el.addEventListener('mouseenter', handleElEnter);
        el.addEventListener('mouseleave', handleElLeave);
      });
    };

    // Observer to re-apply cursor listener on dynamic DOM changes
    const observer = new MutationObserver(updateCursorState);
    observer.observe(document.body, { childList: true, subtree: true });
    updateCursorState();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Glow / Ring */}
      <motion.div
        id="custom-cursor-glow"
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold/40 pointer-events-none z-50 mix-blend-difference flex items-center justify-center text-[8px] font-mono font-medium tracking-widest text-white uppercase select-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? (cursorText ? '70px' : '48px') : '24px',
          height: isHovering ? (cursorText ? '70px' : '48px') : '24px',
          backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.15)' : 'rgba(212, 175, 55, 0)',
          borderColor: isHovering ? 'rgba(212, 175, 55, 1)' : 'rgba(212, 175, 55, 0.4)',
          scale: isClicking ? 0.85 : 1,
        }}
      >
        {isHovering && cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-semibold text-gold tracking-tight"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gold rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
      />
    </>
  );
}
