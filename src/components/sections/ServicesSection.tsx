import React from 'react';
import { useTheme } from '@/hooks/use-theme';
import type { ServiceDetail } from '@/types';

const ITEMS = [
  'Sites web',
  'Applications',
  'Mobile',
  'Automatisation',
  'Stratégie digitale',
  'UX / UI Design',
  'E-commerce',
  'Branding',
  'SEO',
  'SaaS',
];

interface ServicesSectionProps {
  onServiceClick: (service: ServiceDetail) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceClick: _onServiceClick }) => {
  const { tokens: t } = useTheme();

  const repeated = [...ITEMS, ...ITEMS];

  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{ background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Ligne label */}
      <div
        className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-6"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
          }}
        >
          Services
        </span>
        <a
          href="#contact"
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: '0.65rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: t.accent,
            textDecoration: 'none',
          }}
        >
          Parlons de votre projet →
        </a>
      </div>

      {/* Ticker marquee */}
      <div className="py-8 overflow-hidden">
        <div className="marquee-track">
          {repeated.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
                fontWeight: 300,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: i % 2 === 0 ? '#FFFFFF' : 'rgba(255,255,255,0.18)',
                whiteSpace: 'nowrap',
                padding: '0 2rem',
                flexShrink: 0,
              }}
            >
              {item}
              <span
                style={{
                  color: t.accent,
                  marginLeft: '2rem',
                  fontSize: '0.5em',
                  verticalAlign: 'middle',
                }}
              >
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Deuxième ticker inverse */}
      <div className="pb-8 overflow-hidden">
        <div
          className="marquee-track"
          style={{ animationDirection: 'reverse', animationDuration: '32s' }}
        >
          {[...ITEMS].reverse().concat([...ITEMS].reverse()).map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                fontWeight: 300,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.12)',
                whiteSpace: 'nowrap',
                padding: '0 2rem',
                flexShrink: 0,
              }}
            >
              {item}
              <span style={{ color: 'rgba(201,136,42,0.35)', marginLeft: '2rem', fontSize: '0.6em', verticalAlign: 'middle' }}>
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
