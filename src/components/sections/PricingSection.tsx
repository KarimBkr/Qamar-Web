import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp } from '@/constants/animations';
import { useTheme } from '@/hooks/use-theme';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { plans, upsells } from '@/data/pricing';
import type { Plan } from '@/types';

const INCLUDED = [
  'Hébergement guidé',
  'Déploiement inclus',
  'Révisions illimitées (14 jours)',
  'Code source livré',
  'Devis gratuit sous 24h',
];

const PlanCard: React.FC<{ plan: Plan; index: number }> = ({ plan, index }) => {
  const { tokens: t } = useTheme();
  const isFeatured = Boolean(plan.badge);

  return (
    <AnimatedSection>
      <motion.div
        variants={fadeUp}
        custom={index * 0.08}
        style={{
          padding: '2rem 1.75rem 2rem',
          borderTop: isFeatured ? `2px solid ${t.accent}` : `1px solid ${t.borderSubtle}`,
          borderLeft: index > 0 ? `1px solid ${t.borderSubtle}` : 'none',
          background: isFeatured ? 'rgba(201,136,42,0.035)' : 'transparent',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          position: 'relative',
        }}
      >
        {/* Badge populaire */}
        {isFeatured && (
          <div style={{
            position: 'absolute',
            top: '-1px',
            right: '1.75rem',
            transform: 'translateY(-100%)',
            paddingBottom: '0.35rem',
            fontFamily: 'var(--font-title)',
            fontSize: '0.5rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: t.accent,
          }}>
            Le plus populaire
          </div>
        )}

        {/* Plan name + description */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{
            fontFamily: 'var(--font-title)',
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: isFeatured ? t.accent : 'rgba(244,241,234,0.5)',
            marginBottom: '0.5rem',
          }}>
            {plan.name}
          </h3>
          <p style={{
            fontFamily: 'var(--font-text)',
            fontSize: '0.95rem',
            fontStyle: 'italic',
            color: 'rgba(244,241,234,0.4)',
            lineHeight: 1.45,
          }}>
            {plan.description}
          </p>
        </div>

        {/* Price + delivery */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            fontFamily: 'var(--font-title)',
            fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: '#f4f1ea',
            lineHeight: 1,
            marginBottom: '0.5rem',
          }}>
            {plan.price}
          </div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'var(--font-title)',
            fontSize: '0.55rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: t.accent,
          }}>
            <span style={{ display: 'inline-block', width: 16, height: 1, background: t.accent, flexShrink: 0 }} />
            {plan.delivery}
          </div>
        </div>

        {/* Features */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, marginBottom: '1.75rem' }}>
          {plan.features.map(feat => (
            <li
              key={feat}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.65rem',
                padding: '0.55rem 0',
                borderBottom: `1px solid ${t.borderSubtle}`,
              }}
            >
              <span style={{ color: t.accent, flexShrink: 0, lineHeight: 1.5, fontSize: '0.85rem' }}>—</span>
              <span style={{
                fontFamily: 'var(--font-text)',
                fontSize: '0.95rem',
                color: 'rgba(244,241,234,0.62)',
                lineHeight: 1.4,
              }}>
                {feat}
              </span>
            </li>
          ))}
        </ul>

        {/* Bonus */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1.5rem',
          padding: '0.6rem 0',
          borderTop: `1px solid ${t.borderSubtle}`,
        }}>
          <span style={{ color: t.accent, fontSize: '0.75rem' }}>✦</span>
          <span style={{
            fontFamily: 'var(--font-title)',
            fontSize: '0.58rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(244,241,234,0.38)',
          }}>
            {plan.bonus}
          </span>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '0.9rem 1.5rem',
            fontFamily: 'var(--font-title)',
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            background: isFeatured ? t.accent : 'transparent',
            color: isFeatured ? '#0a0a0b' : 'rgba(244,241,234,0.55)',
            border: isFeatured ? 'none' : `1px solid rgba(244,241,234,0.15)`,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.75'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
        >
          {plan.cta}
          {isFeatured && <ArrowRight size={12} />}
        </a>
      </motion.div>
    </AnimatedSection>
  );
};

export const PricingSection: React.FC = () => {
  const { tokens: t } = useTheme();

  return (
    <section id="tarifs" className="py-24 relative" style={{ background: t.canvas }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <SectionTitle
            label="Tarifs"
            title="Des offres transparentes"
            subtitle="Choisissez le plan qui correspond à vos ambitions. Aucun frais caché."
          />
        </AnimatedSection>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 mb-12">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Inclus dans tous les plans */}
        <AnimatedSection>
          <motion.div variants={fadeUp} custom={0}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.5rem 1.5rem',
                padding: '1.25rem 0',
                borderTop: `1px solid ${t.borderSubtle}`,
                borderBottom: `1px solid ${t.borderSubtle}`,
                marginBottom: '4rem',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(244,241,234,0.3)',
                flexShrink: 0,
                marginRight: '0.5rem',
              }}>
                Inclus partout :
              </span>
              {INCLUDED.map((item, i) => (
                <React.Fragment key={item}>
                  <span style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(244,241,234,0.5)',
                  }}>
                    {item}
                  </span>
                  {i < INCLUDED.length - 1 && (
                    <span style={{ color: t.accent, fontSize: '0.5rem', opacity: 0.6 }}>·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Services additionnels */}
        <AnimatedSection>
          <motion.div variants={fadeUp} custom={0.1}>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div style={{ width: 32, height: 1, background: t.accent, flexShrink: 0 }} />
                <span style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: t.accent,
                }}>
                  Services additionnels
                </span>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-3"
                style={{ borderTop: `1px solid ${t.borderSubtle}` }}
              >
                {upsells.map((item, i) => (
                  <div
                    key={item.title}
                    className={`border-b md:border-b-0 ${i < 2 ? 'md:border-r' : ''} ${i > 0 ? 'md:pl-7' : ''} ${i < 2 ? 'md:pr-7' : ''}`}
                    style={{
                      paddingTop: '1.5rem',
                      paddingBottom: '1.5rem',
                      borderColor: t.borderSubtle,
                    }}
                  >
                    <div style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#f4f1ea',
                      marginBottom: '0.5rem',
                    }}>
                      {item.title}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: 'clamp(1.4rem, 2vw, 1.9rem)',
                      fontWeight: 900,
                      letterSpacing: '-0.01em',
                      color: t.accent,
                      marginBottom: '0.6rem',
                      lineHeight: 1,
                    }}>
                      {item.price}
                    </div>
                    <p style={{
                      fontFamily: 'var(--font-text)',
                      fontSize: '0.95rem',
                      fontStyle: 'italic',
                      color: 'rgba(244,241,234,0.42)',
                      lineHeight: 1.5,
                    }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
