import React from 'react';
import { motion } from 'framer-motion';
import { splitContainer, splitWord } from '@/constants/animations';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

// motion.create() doit être en dehors du composant — sinon React traite chaque
// render comme un nouveau type et démonte/remonte le DOM entier.
const MotionH1   = motion.create('h1');
const MotionH2   = motion.create('h2');
const MotionH3   = motion.create('h3');
const MotionP    = motion.create('p');
const MotionSpan = motion.create('span');

const MOTION_TAGS = { h1: MotionH1, h2: MotionH2, h3: MotionH3, p: MotionP, span: MotionSpan } as const;

interface SplitTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  animateOnMount?: boolean;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  as: Tag = 'span',
  className = '',
  style,
  delay = 0,
  animateOnMount = false,
}) => {
  const reduced = useReducedMotion();
  const words = text.split(' ');

  if (reduced) {
    const PlainTag = Tag;
    return <PlainTag className={className} style={style}>{text}</PlainTag>;
  }

  const MotionTag = MOTION_TAGS[Tag];

  return (
    <MotionTag
      className={className}
      style={{ ...style, overflow: 'hidden', display: 'block' }}
      variants={splitContainer}
      initial="hidden"
      animate={animateOnMount ? 'visible' : undefined}
      whileInView={animateOnMount ? undefined : 'visible'}
      viewport={animateOnMount ? undefined : { once: true, margin: '-60px' }}
      custom={delay}
    >
      <span style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.28em', justifyContent: 'inherit' }}>
        {words.map((word, i) => (
          <span key={i} style={{ overflow: 'hidden', display: 'inline-block', verticalAlign: 'bottom' }}>
            <motion.span variants={splitWord} style={{ display: 'inline-block' }}>
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </MotionTag>
  );
};
