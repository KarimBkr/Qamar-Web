import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { getGlassStyle } from '@/constants/colors';
import { fadeUp } from '@/constants/animations';
import { useTheme } from '@/hooks/use-theme';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { testimonials } from '@/data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const { tokens: t } = useTheme();
  const glass = getGlassStyle(t);

  return (
    <section className="py-24 relative" style={{ background: t.canvas }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <SectionTitle
            label="Témoignages"
            title="Ce que disent nos clients"
            subtitle="La satisfaction de nos clients est notre plus grande fierté."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <AnimatedSection key={item.name}>
              <motion.div
                variants={fadeUp}
                custom={i * 0.1}
                className="p-7 rounded-2xl flex flex-col"
                style={glass}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="flex mb-4">
                  {Array.from({ length: item.stars }).map((_, j) => (
                    <Star
                      key={`star-${item.name}-${j}`}
                      size={16}
                      fill={t.accent}
                      style={{ color: t.accent }}
                    />
                  ))}
                </div>

                <p
                  className="text-sm leading-relaxed flex-1 mb-6 italic"
                  style={{ color: t.testimonialQuote }}
                >
                  "{item.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: t.accent,
                      color: t.onAccent,
                    }}
                  >
                    {item.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: t.ink }}>
                      {item.name}
                    </div>
                    <div className="text-xs" style={{ color: t.muted }}>
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
