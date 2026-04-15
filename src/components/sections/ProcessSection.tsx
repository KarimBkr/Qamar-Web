import React from 'react';
import { motion } from 'framer-motion';
import { getGlassStyle } from '@/constants/colors';
import { fadeUp } from '@/constants/animations';
import { useTheme } from '@/context/ThemeContext';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { processSteps } from '@/data/process';

export const ProcessSection: React.FC = () => {
  const { tokens: t } = useTheme();
  const glass = getGlassStyle(t);

  return (
    <section className="py-24 relative" style={{ background: t.canvas }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <SectionTitle
            label="Notre Méthode"
            title="Un process éprouvé"
            subtitle="4 étapes claires pour transformer votre vision en réalité digitale performante."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, i) => (
            <AnimatedSection key={step.num}>
              <motion.div variants={fadeUp} custom={i * 0.1} className="relative p-7 rounded-2xl" style={glass}>
                {i < processSteps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 -right-3 w-6 h-px z-10"
                    style={{ background: t.accent }}
                  />
                )}

                <div
                  className="text-4xl font-bold mb-4 leading-none"
                  style={{ color: t.processLine, minWidth: 28 }}
                >
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: t.ink }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: t.muted }}>
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
