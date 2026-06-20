import React from 'react';
import { motion } from 'framer-motion';
import { splitContainer, splitWord } from '@/constants/animations';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

interface SplitTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  /** Si true, déclenche l'animation immédiatement (hero, intro). */
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
    return (
      <Tag className={className} style={style}>
        {text}
      </Tag>
    );
  }

  const MotionTag = motion.create(Tag);

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
            <motion.span
              variants={splitWord}
              style={{ display: 'inline-block' }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </MotionTag>
  );
};
