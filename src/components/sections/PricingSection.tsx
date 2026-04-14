import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { COLORS } from '@/constants/colors';
import { fadeUp, glassStyle } from '@/constants/animations';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { plans, upsells } from '@/data/pricing';
import type { Plan } from '@/types';

const PlanCard: React.FC<{ plan: Plan; index: number }> = ({ plan, index }) => {
  const isFeatured = Boolean(plan.badge);
  const ctaStyle = isFeatured
    ? {
        background: COLORS.orange,
        color: COLORS.darkBlue,
        boxShadow: '0 8px 24px rgba(249,177,122,0.35)',
      }
    : {
        background: `${plan.accentColor}25`,
        color: plan.accentColor,
        border: `1.5px solid ${plan.accentColor}50`,
      };

  return (
    <AnimatedSection>
      <motion.div
        variants={fadeUp}
        custom={index * 0.1}
        className="relative rounded-3xl p-8 flex flex-col"
        style={{
          background: isFeatured
            ? 'linear-gradient(135deg, rgba(249,177,122,0.15), rgba(66,71,105,0.4))'
            : 'rgba(66,71,105,0.35)',
          backdropFilter: 'blur(16px)',
          border: isFeatured ? '2px solid rgba(249,177,122,0.5)' : '1px solid rgba(103,111,157,0.25)',
          boxShadow: isFeatured ? '0 24px 80px rgba(249,177,122,0.15)' : 'none',
        }}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      >
        {plan.badge && (
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap"
            style={{ background: plan.badgeColor ?? COLORS.orange, color: COLORS.darkBlue }}
          >
            ⭐ {plan.badge}
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2" style={{ color: plan.accentColor }}>
            {plan.name}
          </h3>
          <span className="text-5xl font-bold" style={{ color: COLORS.white }}>
            {plan.price}
          </span>
        </div>

        <ul className="space-y-3 mb-6 flex-1">
          {plan.features.map((feat) => (
            <li key={feat} className="flex items-center gap-3 text-sm">
              <CheckCircle size={16} style={{ color: plan.accentColor, flexShrink: 0 }} />
              <span style={{ color: 'rgba(255,255,255,0.85)' }}>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Bonus */}
        <div
          className="rounded-xl p-4 mb-6 flex items-start gap-3"
          style={{ background: `${plan.accentColor}15`, border: `1px solid ${plan.accentColor}30` }}
        >
          <span className="text-lg">🎁</span>
          <div>
            <div className="text-xs font-bold mb-0.5" style={{ color: plan.accentColor }}>
              BONUS INCLUS
            </div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.75)' }}>
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

export const PricingSection: React.FC = () => (
  <section id="tarifs" className="py-24 relative" style={{ background: COLORS.darkBlue }}>
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(103,111,157,0.1) 0%, transparent 70%)' }}
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

      {/* Upsells */}
      <AnimatedSection>
        <motion.div variants={fadeUp} custom={0}>
          <div
            className="rounded-3xl p-8"
            style={{ ...glassStyle, border: '1px solid rgba(249,177,122,0.2)' }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2" style={{ color: COLORS.white }}>
                Services additionnels
              </h3>
              <p className="text-sm" style={{ color: COLORS.lightBlue }}>
                Complétez votre solution avec nos services complémentaires
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upsells.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl flex flex-col items-center text-center"
                  style={{ background: 'rgba(45,50,80,0.5)', border: '1px solid rgba(103,111,157,0.2)' }}
                >
                  <item.icon size={28} className="mb-3" style={{ color: COLORS.orange }} />
                  <div className="text-base font-bold mb-1" style={{ color: COLORS.white }}>
                    {item.title}
                  </div>
                  <div className="text-xl font-bold mb-2" style={{ color: COLORS.orange }}>
                    {item.price}
                  </div>
                  <div className="text-xs" style={{ color: COLORS.lightBlue }}>
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
