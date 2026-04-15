import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { getGlassStyle } from '@/constants/colors';
import { fadeUp } from '@/constants/animations';
import { useTheme } from '@/context/ThemeContext';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const BOOKING_STEPS = [
  {
    emoji: '🗓️',
    title: 'Choisissez un créneau',
    desc: "Sélectionnez le jour et l'heure qui vous conviennent le mieux.",
  },
  {
    emoji: '💬',
    title: 'Échange en visio',
    desc: '30 min pour analyser votre projet et vous proposer les meilleures solutions.',
  },
  {
    emoji: '📋',
    title: 'Recevez une proposition',
    desc: 'Devis détaillé sous 24h, personnalisé selon vos besoins.',
  },
] as const;


export const CalendlySection: React.FC = () => {
  const { tokens: t } = useTheme();
  const glass = getGlassStyle(t);
  const calendlySrc = useMemo(
    () => `https://calendly.com/contact-qamarweb/30min?hide_gdpr_banner=1&${t.calendlyEmbedParams}`,
    [t.calendlyEmbedParams]
  );

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: t.surface }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${t.radialAccent} 0%, transparent 65%)`,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative">
        <AnimatedSection>
          <div className="text-center mb-12">
            <motion.span
              variants={fadeUp}
              custom={0}
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-2 rounded-full"
              style={{
                color: t.accent,
                background: t.accentSoft,
                border: `1px solid ${t.accentBorder}`,
              }}
            >
              Réservation
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
              style={{ color: t.ink }}
            >
              <span>Réservez un appel </span>
              <span style={{ color: t.accent }}>gratuit</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="text-lg max-w-xl mx-auto"
              style={{ color: t.muted }}
            >
              30 minutes pour discuter de votre projet, obtenir des conseils personnalisés et
              recevoir une estimation sans engagement.
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <motion.div variants={fadeUp} custom={0.25} className="grid md:grid-cols-3 gap-5 mb-10">
            {BOOKING_STEPS.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl text-center" style={glass}>
                <span className="text-3xl block mb-3">{item.emoji}</span>
                <h3 className="text-base font-bold mb-2" style={{ color: t.ink }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: t.muted }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatedSection>

        <AnimatedSection>
          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="rounded-3xl overflow-hidden relative"
            style={{
              ...glass,
              boxShadow: t.shadowLg,
              border: `1px solid ${t.accentBorder}`,
            }}
          >
            <iframe
              src={calendlySrc}
              title="Réserver un appel avec Qamar Web"
              width="100%"
              height="700"
              frameBorder="0"
              style={{ display: 'block', minWidth: 0 }}
              loading="lazy"
              allow="payment"
            />
          </motion.div>
        </AnimatedSection>

        <AnimatedSection>
          <motion.p
            variants={fadeUp}
            custom={0.35}
            className="text-center text-xs mt-6"
            style={{ color: t.footerLegal }}
          >
            Propulsé par{' '}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: t.accent, textDecoration: 'underline' }}
            >
              Calendly
            </a>
            {' '}· Aucun compte requis · Annulation gratuite jusqu'à 24h avant
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
};
