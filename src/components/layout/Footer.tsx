import React from 'react';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { NAV_LINKS, NAV_SECTION_MAP } from '@/constants/navigation';

const SOCIAL_ICONS = [
  { Icon: Twitter,   label: 'Twitter' },
  { Icon: Linkedin,  label: 'LinkedIn' },
  { Icon: Github,    label: 'GitHub' },
  { Icon: Instagram, label: 'Instagram' },
];

const LEGAL_LINKS = ['Mentions légales', 'Politique de confidentialité', 'CGV'];

export const Footer: React.FC = () => {
  const { tokens: t } = useTheme();

  return (
    <footer
      style={{
        background: t.canvas,
        borderTop: `1px solid ${t.borderSubtle}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Main grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-4"
          style={{ borderBottom: `1px solid ${t.borderSubtle}` }}
        >
          {/* Brand column */}
          <div
            className="md:col-span-2 py-12 pr-12"
            style={{ borderRight: `1px solid ${t.borderSubtle}` }}
          >
            <div
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#f4f1ea',
                marginBottom: '1.25rem',
              }}
            >
              QAMAR<span style={{ color: t.accent }}>.</span>WEB
            </div>

            <p
              style={{
                fontFamily: 'var(--font-text)',
                fontSize: '1rem',
                fontStyle: 'italic',
                color: 'rgba(244,241,234,0.42)',
                lineHeight: 1.6,
                maxWidth: '32ch',
                marginBottom: '2rem',
              }}
            >
              Agence web spécialisée dans la création de solutions digitales performantes
              qui génèrent de la croissance.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {SOCIAL_ICONS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    border: `1px solid ${t.borderSubtle}`,
                    color: 'rgba(244,241,234,0.35)',
                    textDecoration: 'none',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = t.accent;
                    e.currentTarget.style.borderColor = t.accent;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(244,241,234,0.35)';
                    e.currentTarget.style.borderColor = t.borderSubtle;
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav column */}
          <div className="py-12 px-8" style={{ borderRight: `1px solid ${t.borderSubtle}` }}>
            <div style={{
              fontFamily: 'var(--font-title)',
              fontSize: '0.6rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(244,241,234,0.35)',
              marginBottom: '1.25rem',
            }}>
              Navigation
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {NAV_LINKS.map(link => (
                <li key={link}>
                  <a
                    href={`#${NAV_SECTION_MAP[link]}`}
                    style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(244,241,234,0.45)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = '#f4f1ea')}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(244,241,234,0.45)')}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="py-12 pl-8">
            <div style={{
              fontFamily: 'var(--font-title)',
              fontSize: '0.6rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(244,241,234,0.35)',
              marginBottom: '1.25rem',
            }}>
              Contact
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
              <li>
                <a
                  href="mailto:contact@qamarweb.fr"
                  style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.04em',
                    color: 'rgba(244,241,234,0.45)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = t.accent)}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(244,241,234,0.45)')}
                >
                  contact@qamarweb.fr
                </a>
              </li>
              <li style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.78rem',
                letterSpacing: '0.04em',
                color: 'rgba(244,241,234,0.28)',
              }}>
                +33 (0)6 XX XX XX XX
              </li>
              <li style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.78rem',
                letterSpacing: '0.04em',
                color: 'rgba(244,241,234,0.28)',
              }}>
                Annecy, France
              </li>
            </ul>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-title)',
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: t.accent,
                textDecoration: 'none',
                paddingBottom: '2px',
                borderBottom: `1px solid ${t.accent}`,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.65'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
            >
              Demander un devis →
            </a>
          </div>
        </div>

        {/* Legal bar */}
        <div
          className="py-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p style={{
            fontFamily: 'var(--font-title)',
            fontSize: '0.58rem',
            letterSpacing: '0.1em',
            color: 'rgba(244,241,234,0.22)',
          }}>
            © {new Date().getFullYear()} Qamar Web — Tous droits réservés.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {LEGAL_LINKS.map(item => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.1em',
                  color: 'rgba(244,241,234,0.22)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = t.accent)}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(244,241,234,0.22)')}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
