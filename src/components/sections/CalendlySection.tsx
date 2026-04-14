import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '@/constants/colors';
import { fadeUp, glassStyle } from '@/constants/animations';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const BOOKING_STEPS = [
  { emoji: '🗓️', title: 'Choisissez un créneau', desc: "Sélectionnez le jour et l'heure qui vous conviennent le mieux." },
  { emoji: '💬', title: 'Échange en visio', desc: '30 min pour analyser votre projet et vous proposer les meilleures solutions.' },
  { emoji: '📋', title: 'Recevez une proposition', desc: 'Devis détaillé sous 24h, personnalisé selon vos besoins.' },
] as const;

const CALENDLY_URL =
  'https://calendly.com/contact-qamarweb/30min?hide_gdpr_banner=1&background_color=2d3250&text_color=ffffff&primary_color=f9b17a';

export const CalendlySection: React.FC = () => (
  <section className="py-24 relative overflow-hidden" style={{ background: COLORS.darkBlue }}>
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(249,177,122,0.08) 0%, transparent 65%)' }}
    />

    <div className="max-w-5xl mx-auto px-6 relative">
      {/* Header */}
      <AnimatedSection>
        <div className="text-center mb-12">
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-2 rounded-full"
            style={{
              color: COLORS.orange,
              background: 'rgba(249,177,122,0.12)',
              border: '1px solid rgba(249,177,122,0.25)',
            }}
          >
            Réservation
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ color: COLORS.white }}
          >
            <span>Réservez un appel </span>
            <span style={{ color: COLORS.orange }}>gratuit</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="text-lg max-w-xl mx-auto"
            style={{ color: COLORS.lightBlue }}
          >
            30 minutes pour discuter de votre projet, obtenir des conseils personnalisés et
            recevoir une estimation sans engagement.
          </motion.p>
        </div>
      </AnimatedSection>

      {/* Steps */}
      <AnimatedSection>
        <motion.div variants={fadeUp} custom={0.25} className="grid md:grid-cols-3 gap-5 mb-10">
          {BOOKING_STEPS.map((item) => (
            <div key={item.title} className="p-6 rounded-2xl text-center" style={glassStyle}>
              <span className="text-3xl block mb-3">{item.emoji}</span>
              <h3 className="text-base font-bold mb-2" style={{ color: COLORS.white }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: COLORS.lightBlue }}>
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </AnimatedSection>

      {/* Calendly iframe */}
      <AnimatedSection>
        <motion.div
          variants={fadeUp}
          custom={0.3}
          className="rounded-3xl overflow-hidden relative"
          style={{ ...glassStyle, boxShadow: '0 32px 80px rgba(0,0,0,0.4)', border: '1px solid rgba(249,177,122,0.2)' }}
        >
          <iframe
            src={CALENDLY_URL}
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
          style={{ color: 'rgba(103,111,157,0.55)' }}
        >
          Propulsé par{' '}
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: COLORS.lightBlue, textDecoration: 'underline' }}
          >
            Calendly
          </a>
          {' '}· Aucun compte requis · Annulation gratuite jusqu'à 24h avant
        </motion.p>
      </AnimatedSection>
    </div>
  </section>
);
