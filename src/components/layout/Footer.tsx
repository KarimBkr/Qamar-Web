import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { NAV_LINKS, NAV_SECTION_MAP } from '@/constants/navigation';

const SOCIAL_ICONS = [Twitter, Linkedin, Github, Instagram];

const LEGAL_LINKS = ['Mentions légales', 'Politique de confidentialité', 'CGV'];

export const Footer: React.FC = () => {
  const { tokens: t } = useTheme();

  return (
    <footer
      className="py-16 relative"
      style={{ background: t.surface, borderTop: `1px solid ${t.borderSubtle}` }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4" style={{ color: t.ink }}>
              Qamar<span style={{ color: t.accent }}>.</span>Web
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: t.muted }}>
              Agence de développement fullstack spécialisée dans la création de solutions digitales
              performantes qui génèrent de la croissance.
            </p>
            <div className="flex gap-4 mt-5">
              {SOCIAL_ICONS.map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: t.fillSubtle,
                    color: t.muted,
                    border: `1px solid ${t.borderSubtle}`,
                  }}
                  aria-label={`Lien réseau social ${i + 1}`}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <div
              className="text-sm font-bold mb-4 uppercase tracking-wider"
              style={{ color: t.ink }}
            >
              Liens rapides
            </div>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(link => (
                <li key={link}>
                  <a
                    href={`#${NAV_SECTION_MAP[link]}`}
                    className="text-sm transition-colors"
                    style={{ color: t.muted }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = t.accent)}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = t.muted)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              className="text-sm font-bold mb-4 uppercase tracking-wider"
              style={{ color: t.ink }}
            >
              Contact
            </div>
            <ul className="space-y-2.5 text-sm" style={{ color: t.muted }}>
              <li>
                <a
                  href="mailto:contact@qamarweb.fr"
                  className="transition-colors hover:underline"
                  style={{ color: 'inherit' }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = t.accent)}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = t.muted)}
                >
                  contact@qamarweb.fr
                </a>
              </li>
              <li>+33 (0)6 XX XX XX XX</li>
              <li>Paris, France 🇫🇷</li>
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full text-sm font-semibold"
              style={{ background: t.accent, color: t.onAccent }}
            >
              <span>Demander un devis</span>
            </a>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: `1px solid ${t.borderSubtle}` }}
        >
          <p className="text-xs" style={{ color: t.footerLegal }}>
            © {new Date().getFullYear()} Qamar Web — Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {LEGAL_LINKS.map(item => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors"
                style={{ color: t.footerLegal }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = t.accent)}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = t.footerLegal)}
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
