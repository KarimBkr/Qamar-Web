import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '@/constants/colors';
import { fadeUp } from '@/constants/animations';

interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
}

/**
 * En-tête de section standardisé : badge label + h2 + sous-titre optionnel.
 * Doit être utilisé à l'intérieur d'un AnimatedSection pour les animations.
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({
  label,
  title,
  subtitle,
}) => (
  <div className="text-center mb-16">
    <motion.span
      variants={fadeUp}
      custom={0}
      className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-2 rounded-full"
      style={{
        color: COLORS.orange,
        background: 'rgba(249,177,122,0.12)',
        border: '1px solid rgba(249,177,122,0.25)',
      }}
    >
      {label}
    </motion.span>

    <motion.h2
      variants={fadeUp}
      custom={0.1}
      className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
      style={{ color: COLORS.white }}
    >
      {title}
    </motion.h2>

    {subtitle && (
      <motion.p
        variants={fadeUp}
        custom={0.2}
        className="text-lg max-w-2xl mx-auto"
        style={{ color: COLORS.lightBlue }}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
