import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getGlassStyle } from '@/constants/colors';
import { serviceAccentColor } from '@/lib/serviceAccent';
import { fadeUp } from '@/constants/animations';
import { useTheme } from '@/hooks/use-theme';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { services } from '@/data/services';
import type { ServiceDetail } from '@/types';

interface ServicesSectionProps {
  onServiceClick: (service: ServiceDetail) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceClick }) => {
  const { tokens: t } = useTheme();
  const glass = getGlassStyle(t);

  return (
    <section id="services" className="py-24 relative" style={{ background: t.surface }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${t.radialMuted} 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedSection>
          <SectionTitle
            label="Nos Services"
            title="Des solutions digitales complètes"
            subtitle="De la conception au déploiement, nous couvrons tous les besoins de votre présence digitale."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const c = serviceAccentColor(service, t.accent);
            return (
              <AnimatedSection key={service.id}>
                <motion.div
                  variants={fadeUp}
                  custom={i * 0.08}
                  className="p-7 rounded-2xl cursor-pointer group relative overflow-hidden"
                  style={glass}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  onClick={() => onServiceClick(service)}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${c}15, transparent 60%)`,
                    }}
                  />

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${c}20`, border: `1px solid ${c}40` }}
                  >
                    <service.icon size={24} style={{ color: c }} />
                  </div>

                  <h3 className="text-xl font-bold mb-3" style={{ color: t.ink }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: t.muted }}>
                    {service.desc}
                  </p>

                  <div
                    className="mt-5 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: c }}
                  >
                    <span>En savoir plus</span>
                    <ArrowRight size={14} />
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}

          <AnimatedSection>
            <motion.a
              href="#contact"
              variants={fadeUp}
              custom={services.length * 0.08}
              className="p-7 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer group relative overflow-hidden"
              style={{
                background: t.featuredPlanBg,
                border: `1.5px solid ${t.accentBorder}`,
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <span className="text-4xl mb-4" aria-hidden>
                {'\u2728'}
              </span>
              <h3 className="text-xl font-bold mb-2" style={{ color: t.ink }}>
                Votre projet sur mesure
              </h3>
              <p className="text-sm mb-5" style={{ color: t.muted }}>
                Discutons de vos besoins spécifiques
              </p>
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                style={{ background: t.accent, color: t.onAccent }}
              >
                <span>Nous contacter</span>
                <ArrowRight size={14} />
              </span>
            </motion.a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
