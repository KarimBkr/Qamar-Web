import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/constants/animations';
import { useTheme } from '@/hooks/use-theme';

interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ label, title, subtitle }) => {
  const { tokens: t } = useTheme();

  return (
    <div className="mb-16">
      <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
        <div className="w-8 h-px shrink-0" style={{ background: t.accent }} />
        <span
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '0.6rem',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase' as const,
            color: t.accent,
          }}
        >
          {label}
        </span>
      </motion.div>

      <motion.h2
        variants={fadeUp}
        custom={0.1}
        style={{
          fontFamily: 'var(--font-title)',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase' as const,
          color: '#f4f1ea',
          lineHeight: 0.95,
          margin: 0,
          marginBottom: subtitle ? '1.25rem' : 0,
        }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          custom={0.2}
          style={{
            fontFamily: 'var(--font-text)',
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            fontStyle: 'italic',
            color: 'rgba(244,241,234,0.48)',
            maxWidth: '52ch',
            lineHeight: 1.55,
            margin: 0,
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
