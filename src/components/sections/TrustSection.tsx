import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '@/constants/colors';
import { fadeUp, glassStyle } from '@/constants/animations';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { trustStats } from '@/data/trust';

export const TrustSection: React.FC = () => (
  <section className="py-16 relative" style={{ background: COLORS.midBlue }}>
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trustStats.map((stat, i) => (
          <AnimatedSection key={stat.label}>
            <motion.div
              variants={fadeUp}
              custom={i * 0.1}
              className="text-center p-8 rounded-2xl"
              style={glassStyle}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <stat.icon size={32} className="mx-auto mb-4" style={{ color: COLORS.orange }} />
              <div
                className="text-5xl font-bold mb-2"
                style={{ color: COLORS.white }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-medium" style={{ color: COLORS.lightBlue }}>
                {stat.label}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);
