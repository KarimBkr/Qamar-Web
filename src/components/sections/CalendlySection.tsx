import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/constants/animations';
import { useTheme } from '@/hooks/use-theme';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const BOOKING_STEPS = [
  { num: '01', title: 'Choisissez un créneau', desc: "Sélectionnez le jour et l'heure qui vous conviennent." },
  { num: '02', title: 'Échange en visio',       desc: '30 min pour analyser votre projet et vous guider.' },
  { num: '03', title: 'Recevez un devis',        desc: 'Proposition détaillée sous 24h, sans engagement.' },
] as const;

export const CalendlySection: React.FC = () => {
  const { tokens: t } = useTheme();
  const calendlySrc = useMemo(
    () => `https://calendly.com/contact-qamarweb/30min?hide_gdpr_banner=1&${t.calendlyEmbedParams}`,
    [t.calendlyEmbedParams]
  );

  return (
    <section className="py-24 relative" style={{ background: t.canvas }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Header */}
        <AnimatedSection>
          <motion.div variants={fadeUp} custom={0} style={{ marginBottom: '3.5rem' }}>
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width: 32, height: 1, background: t.accent, flexShrink: 0 }} />
              <span style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: t.accent,
              }}>
                Réservation
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-title)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#f4f1ea',
              lineHeight: 0.95,
              marginBottom: '1.25rem',
            }}>
              Réservez<br />un appel gratuit
            </h2>
            <p style={{
              fontFamily: 'var(--font-text)',
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              fontStyle: 'italic',
              color: 'rgba(244,241,234,0.48)',
              maxWidth: '48ch',
              lineHeight: 1.55,
            }}>
              30 minutes pour discuter de votre projet, obtenir des conseils personnalisés
              et recevoir une estimation sans engagement.
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Steps */}
        <AnimatedSection>
          <motion.div
            variants={fadeUp}
            custom={0.1}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              borderTop: `1px solid ${t.borderSubtle}`,
              marginBottom: '3rem',
            }}
          >
            {BOOKING_STEPS.map((step, i) => (
              <div
                key={step.num}
                style={{
                  padding: '1.75rem 1.5rem 1.75rem 0',
                  paddingLeft: i > 0 ? '1.5rem' : 0,
                  borderLeft: i > 0 ? `1px solid ${t.borderSubtle}` : 'none',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  color: t.accent,
                  marginBottom: '0.6rem',
                }}>
                  {step.num}
                </div>
                <div style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#f4f1ea',
                  marginBottom: '0.4rem',
                }}>
                  {step.title}
                </div>
                <p style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  color: 'rgba(244,241,234,0.42)',
                  lineHeight: 1.5,
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Calendly iframe */}
        <AnimatedSection>
          <motion.div
            variants={fadeUp}
            custom={0.2}
            style={{
              background: t.surface,
              border: `1px solid ${t.borderSubtle}`,
              overflow: 'hidden',
            }}
          >
            <iframe
              src={calendlySrc}
              title="Réserver un appel avec Qamar Web"
              width="100%"
              height="700"
              frameBorder="0"
              style={{ display: 'block', minWidth: 0, background: t.surface }}
              loading="eager"
              allow="camera; microphone; fullscreen; payment; clipboard-write"
            />
          </motion.div>
        </AnimatedSection>

        <AnimatedSection>
          <motion.p
            variants={fadeUp}
            custom={0.25}
            className="text-center mt-5"
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '0.58rem',
              letterSpacing: '0.14em',
              color: 'rgba(244,241,234,0.25)',
            }}
          >
            Propulsé par Calendly · Aucun compte requis · Annulation gratuite jusqu'à 24h avant
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
};
