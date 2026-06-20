import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/constants/animations';
import { useTheme } from '@/hooks/use-theme';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { processSteps } from '@/data/process';

export const ProcessSection: React.FC = () => {
  const { tokens: t } = useTheme();

  return (
    <section className="py-24 relative" style={{ background: t.canvas }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <SectionTitle
            label="Notre Méthode"
            title="Un process éprouvé"
            subtitle="4 étapes claires pour transformer votre vision en réalité digitale."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <AnimatedSection key={step.num}>
              <motion.div
                variants={fadeUp}
                custom={i * 0.08}
                style={{
                  padding: '2rem 2rem 2rem 0',
                  paddingLeft: i > 0 ? '2rem' : 0,
                  borderTop: `1px solid ${t.borderSubtle}`,
                  borderLeft: i > 0 ? `1px solid ${t.borderSubtle}` : 'none',
                  height: '100%',
                }}
              >
                {/* Number */}
                <div
                  style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    color: t.accent,
                    lineHeight: 1,
                    marginBottom: '1.5rem',
                    opacity: 0.8,
                  }}
                >
                  {step.num}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                    color: '#f4f1ea',
                    marginBottom: '0.75rem',
                  }}
                >
                  {step.title}
                </h3>

                {/* Description — Cormorant */}
                <p
                  style={{
                    fontFamily: 'var(--font-text)',
                    fontSize: '1.05rem',
                    fontStyle: 'italic',
                    color: 'rgba(244,241,234,0.48)',
                    lineHeight: 1.55,
                  }}
                >
                  {step.desc}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
