import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { COLORS } from '@/constants/colors';
import { fadeUp, glassStyle } from '@/constants/animations';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { testimonials } from '@/data/testimonials';

export const TestimonialsSection: React.FC = () => (
  <section className="py-24 relative" style={{ background: COLORS.midBlue }}>
    <div className="max-w-7xl mx-auto px-6">
      <AnimatedSection>
        <SectionTitle
          label="Témoignages"
          title="Ce que disent nos clients"
          subtitle="La satisfaction de nos clients est notre plus grande fierté."
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name}>
            <motion.div
              variants={fadeUp}
              custom={i * 0.1}
              className="p-7 rounded-2xl flex flex-col"
              style={glassStyle}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              {/* Stars */}
              <div className="flex mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={`star-${t.name}-${j}`} size={16} fill={COLORS.orange} style={{ color: COLORS.orange }} />
                ))}
              </div>

              <p
                className="text-sm leading-relaxed flex-1 mb-6 italic"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.midBlue})`,
                    color: COLORS.white,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: COLORS.white }}>
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: COLORS.lightBlue }}>
                    {t.role}
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
