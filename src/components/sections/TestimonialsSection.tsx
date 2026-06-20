import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/constants/animations';
import { useTheme } from '@/hooks/use-theme';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { testimonials } from '@/data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const { tokens: t } = useTheme();

  return (
    <section className="py-24 relative" style={{ background: t.surface }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <SectionTitle
            label="Témoignages"
            title="Ce que disent nos clients"
          />
        </AnimatedSection>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-0"
          style={{ borderTop: `1px solid ${t.borderSubtle}` }}
        >
          {testimonials.map((item, i) => (
            <AnimatedSection key={item.name}>
              <motion.div
                variants={fadeUp}
                custom={i * 0.1}
                style={{
                  padding: '3rem 2.5rem',
                  borderBottom: `1px solid ${t.borderSubtle}`,
                  borderRight: i === 0 ? `1px solid ${t.borderSubtle}` : 'none',
                }}
              >
                {/* Guillemet décoratif */}
                <div
                  style={{
                    fontFamily: 'var(--font-text)',
                    fontSize: 'clamp(4rem, 8vw, 6rem)',
                    fontWeight: 700,
                    color: t.accent,
                    lineHeight: 0.7,
                    marginBottom: '1.5rem',
                    opacity: 0.6,
                  }}
                  aria-hidden
                >
                  "
                </div>

                {/* Citation — Cormorant italic */}
                <p
                  style={{
                    fontFamily: 'var(--font-text)',
                    fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)',
                    fontStyle: 'italic',
                    color: 'rgba(244,241,234,0.78)',
                    lineHeight: 1.6,
                    marginBottom: '2rem',
                  }}
                >
                  {item.text}
                </p>

                {/* Attribution */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: t.accent,
                      color: '#f4f1ea',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-title)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      flexShrink: 0,
                    }}
                  >
                    {item.avatar}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#f4f1ea',
                    }}>
                      {item.name}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.12em',
                      color: 'rgba(244,241,234,0.38)',
                    }}>
                      {item.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
