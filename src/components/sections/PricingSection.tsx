import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { getGlassStyle } from '@/constants/colors';
import { fadeUp } from '@/constants/animations';
import { useTheme } from '@/context/ThemeContext';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { plans, upsells } from '@/data/pricing';
import type { Plan } from '@/types';

const PlanCard: React.FC<{ plan: Plan; index: number }> = ({ plan, index }) => {
  const { tokens: t } = useTheme();
  const glass = getGlassStyle(t);
  const isFeatured = Boolean(plan.badge);
  const planAccent = isFeatured ? t.accent : plan.accentColor;
  const ctaStyle = isFeatured
    ? {
        background: t.accent,
        color: t.onAccent,
        boxShadow: `0 8px 24px ${t.accentGlow}`,
      }
    : {
        background: `${planAccent}18`,
        color: planAccent,
        border: `1.5px solid ${planAccent}55`,
      };

  return (
    <AnimatedSection>
      <motion.div
        variants={fadeUp}
        custom={index * 0.1}
        className="relative rounded-3xl p-8 flex flex-col"
        style={
          isFeatured
            ? {
                background: t.featuredPlanBg,
                backdropFilter: 'blur(16px)',
                border: `2px solid ${t.accentBorderStrong}`,
                boxShadow: `0 24px 80px ${t.accentShadow}`,
              }
            : {
                ...glass,
                border: `1px solid ${t.borderMedium}`,
              }
        }
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      >
        {plan.badge && (
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap"
            style={{ background: plan.badgeColor ?? planAccent, color: t.onAccent }}
          >
            {'\u2B50'} {plan.badge}
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2" style={{ color: planAccent }}>
            {plan.name}
          </h3>
          <span className="text-5xl font-bold" style={{ color: t.ink }}>
            {plan.price}
          </span>
        </div>

        <ul className="space-y-3 mb-6 flex-1">
          {plan.features.map((feat) => (
            <li key={feat} className="flex items-center gap-3 text-sm">
              <CheckCircle size={16} style={{ color: planAccent, flexShrink: 0 }} />
              <span style={{ color: t.testimonialQuote }}>{feat}</span>
            </li>
          ))}
        </ul>

        <div
          className="rounded-xl p-4 mb-6 flex items-start gap-3"
          style={{ background: `${planAccent}12`, border: `1px solid ${planAccent}28` }}
        >
          <span className="text-lg">{'\uD83C\uDF81'}</span>
          <div>
            <div className="text-xs font-bold mb-0.5" style={{ color: planAccent }}>
              BONUS INCLUS
            </div>
            <div className="text-xs" style={{ color: t.muted }}>
              {plan.bonus}
            </div>
          </div>
        </div>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-3.5 rounded-xl font-semibold text-sm text-center transition-all block"
          style={ctaStyle}
        >
          {plan.cta}
        </motion.a>
      </motion.div>
    </AnimatedSection>
  );
};

export const PricingSection: React.FC = () => {
  const { tokens: t } = useTheme();
  const glass = getGlassStyle(t);

  return (
    <section id="tarifs" className="py-24 relative" style={{ background: t.surface }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 100%, ${t.radialMuted} 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedSection>
          <SectionTitle
            label="Tarifs"
            title="Des offres transparentes"
            subtitle="Choisissez le plan qui correspond à vos ambitions. Aucun frais caché."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        <AnimatedSection>
          <motion.div variants={fadeUp} custom={0}>
            <div
              className="rounded-3xl p-8"
              style={{ ...glass, border: `1px solid ${t.accentBorder}` }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2" style={{ color: t.ink }}>
                  Services additionnels
                </h3>
                <p className="text-sm" style={{ color: t.muted }}>
                  Complétez votre solution avec nos services complémentaires
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upsells.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl flex flex-col items-center text-center"
                    style={{
                      background: t.planUpsellBg,
                      border: `1px solid ${t.borderSubtle}`,
                    }}
                  >
                    <item.icon size={28} className="mb-3" style={{ color: t.accent }} />
                    <div className="text-base font-bold mb-1" style={{ color: t.ink }}>
                      {item.title}
                    </div>
                    <div className="text-xl font-bold mb-2" style={{ color: t.accent }}>
                      {item.price}
                    </div>
                    <div className="text-xs" style={{ color: t.muted }}>
                      {item.desc}
                    </div>
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
