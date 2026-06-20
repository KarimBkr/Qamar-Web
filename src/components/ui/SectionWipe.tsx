import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

interface SectionWipeProps {
  index: number;
}

/** Ligne amber + numéro filigrane entre sections — piloté au scroll. */
export const SectionWipe: React.FC<SectionWipeProps> = ({ index }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const lineScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const numX = useTransform(scrollYProgress, [0, 1], ['-5%', '105%']);
  const numOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.95], [0, 0.06, 0.06, 0]);

  if (reduced) return <div ref={ref} style={{ height: 1 }} aria-hidden />;

  const num = String(index).padStart(2, '0');

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: 'relative',
        height: 'clamp(80px, 12vh, 140px)',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <motion.span
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          x: numX,
          y: '-50%',
          fontFamily: 'var(--font-title)',
          fontSize: 'clamp(6rem, 18vw, 14rem)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          color: '#f4f1ea',
          opacity: numOpacity,
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        {num}
      </motion.span>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          padding: '0 clamp(1.5rem, 5vw, 3rem)',
        }}
      >
        <motion.div
          style={{
            height: 1,
            width: '100%',
            background: 'linear-gradient(90deg, transparent, #C9882A 20%, #C9882A 80%, transparent)',
            scaleX: lineScale,
            transformOrigin: 'left center',
          }}
        />
      </div>
    </div>
  );
};
