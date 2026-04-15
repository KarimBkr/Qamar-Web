import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/constants/animations';
import { useTheme } from '@/context/ThemeContext';

interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ label, title, subtitle }) => {
  const { tokens: t } = useTheme();

  return (
    <div className="text-center mb-16">
      <motion.span
        variants={fadeUp}
        custom={0}
        className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-2 rounded-full"
        style={{
          color: t.accent,
          background: t.accentSoft,
          border: `1px solid ${t.accentBorder}`,
        }}
      >
        {label}
      </motion.span>

      <motion.h2
        variants={fadeUp}
        custom={0.1}
        className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
        style={{ color: t.ink }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="text-lg max-w-2xl mx-auto"
          style={{ color: t.muted }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
