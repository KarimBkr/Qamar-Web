import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/constants/animations';
import { useTheme } from '@/hooks/use-theme';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const STATS = [
  { value: '+50', label: 'Projets réalisés' },
  { value: '100%', label: 'Satisfaction client' },
  { value: '< 3s', label: 'Chargement moyen' },
];

export const TrustSection: React.FC = () => {
  const { tokens: t } = useTheme();

  return (
    <section
      style={{
        background: t.surface,
        borderTop: `1px solid ${t.borderSubtle}`,
        borderBottom: `1px solid ${t.borderSubtle}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-3">
          {STATS.map((stat, i) => (
            <AnimatedSection key={stat.label}>
              <motion.div
                variants={fadeUp}
                custom={i * 0.08}
                className="py-10 md:py-14 text-center"
                style={{
                  borderRight: i < 2 ? `1px solid ${t.borderSubtle}` : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    color: '#f4f1ea',
                    lineHeight: 1,
                    marginBottom: '0.45rem',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(244,241,234,0.38)',
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
