import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { COLORS } from '@/constants/colors';
import { fadeUp, glassStyle } from '@/constants/animations';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { services } from '@/data/services';
import type { ServiceDetail } from '@/types';

interface ServicesSectionProps {
  onServiceClick: (service: ServiceDetail) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceClick }) => (
  <section id="services" className="py-24 relative" style={{ background: COLORS.darkBlue }}>
    {/* Ambient gradient */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(103,111,157,0.12) 0%, transparent 70%)' }}
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
        {services.map((service, i) => (
          <AnimatedSection key={service.id}>
            <motion.div
              variants={fadeUp}
              custom={i * 0.08}
              className="p-7 rounded-2xl cursor-pointer group relative overflow-hidden"
              style={glassStyle}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              onClick={() => onServiceClick(service)}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at 30% 30%, ${service.color}15, transparent 60%)` }}
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${service.color}20`, border: `1px solid ${service.color}40` }}
              >
                <service.icon size={24} style={{ color: service.color }} />
              </div>

              <h3 className="text-xl font-bold mb-3" style={{ color: COLORS.white }}>
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: COLORS.lightBlue }}>
                {service.desc}
              </p>

              <div
                className="mt-5 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: service.color }}
              >
                <span>En savoir plus</span>
                <ArrowRight size={14} />
              </div>
            </motion.div>
          </AnimatedSection>
        ))}

        {/* CTA card */}
        <AnimatedSection>
          <motion.a
            href="#contact"
            variants={fadeUp}
            custom={services.length * 0.08}
            className="p-7 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer group relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(249,177,122,0.2), rgba(249,177,122,0.08))',
              border: '1.5px solid rgba(249,177,122,0.35)',
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <span className="text-4xl mb-4">✨</span>
            <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.white }}>
              Votre projet sur mesure
            </h3>
            <p className="text-sm mb-5" style={{ color: COLORS.lightBlue }}>
              Discutons de vos besoins spécifiques
            </p>
            <span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
              style={{ background: COLORS.orange, color: COLORS.darkBlue }}
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
