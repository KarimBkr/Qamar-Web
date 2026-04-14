import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '@/constants/colors';
import { fadeUp, glassStyle } from '@/constants/animations';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { processSteps } from '@/data/process';

export const ProcessSection: React.FC = () => (
  <section className="py-24 relative" style={{ background: COLORS.midBlue }}>
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
            <motion.div
              variants={fadeUp}
              custom={i * 0.1}
              className="relative p-7 rounded-2xl"
              style={glassStyle}
            >
              {/* Connector line */}
              {i < processSteps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 -right-3 w-6 h-px z-10"
                  style={{ background: COLORS.orange }}
                />
              )}

              <div
                className="text-4xl font-bold mb-4 leading-none"
                style={{ color: 'rgba(249,177,122,0.25)', minWidth: 28 }}
              >
                {step.num}
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: COLORS.white }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: COLORS.lightBlue }}>
                {step.desc}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);
