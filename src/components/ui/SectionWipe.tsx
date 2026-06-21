import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

interface SectionWipeProps {
  index: number;
}

/** Ligne amber entre sections — pilotée au scroll. */
export const SectionWipe: React.FC<SectionWipeProps> = ({ index: _index }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const lineScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  if (reduced) return <div ref={ref} style={{ height: 1 }} aria-hidden />;

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: 'relative',
        height: 'clamp(80px, 12vh, 140px)',
        overflow: 'hidden',
        pointerEvents: 'none',
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
  );
};
