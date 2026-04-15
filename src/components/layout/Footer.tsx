import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { COLORS } from '@/constants/colors';
import { NAV_LINKS, NAV_SECTION_MAP } from '@/constants/navigation';

const SOCIAL_ICONS = [Twitter, Linkedin, Github, Instagram];

const LEGAL_LINKS = ['Mentions légales', 'Politique de confidentialité', 'CGV'];

export const Footer: React.FC = () => (
  <footer
    className="py-16 relative"
    style={{ background: '#1e2240', borderTop: '1px solid rgba(103,111,157,0.2)' }}
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="text-2xl font-bold mb-4" style={{ color: COLORS.white }}>
            Qamar<span style={{ color: COLORS.orange }}>.</span>Web
          </div>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: COLORS.lightBlue }}>
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
                  background: 'rgba(66,71,105,0.4)',
                  color: COLORS.lightBlue,
                  border: '1px solid rgba(103,111,157,0.25)',
                }}
                aria-label={`Lien réseau social ${i + 1}`}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <div>
          <div
            className="text-sm font-bold mb-4 uppercase tracking-wider"
            style={{ color: COLORS.white }}
          >
            Liens rapides
          </div>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${NAV_SECTION_MAP[link]}`}
                  className="text-sm transition-colors"
                  style={{ color: COLORS.lightBlue }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = COLORS.orange)}
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = COLORS.lightBlue)
                  }
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div
            className="text-sm font-bold mb-4 uppercase tracking-wider"
            style={{ color: COLORS.white }}
          >
            Contact
          </div>
          <ul className="space-y-2.5 text-sm" style={{ color: COLORS.lightBlue }}>
            <li>
              <a
                href="mailto:contact@qamarweb.fr"
                className="transition-colors hover:underline"
                style={{ color: 'inherit' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = COLORS.orange)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = COLORS.lightBlue)}
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
            style={{ background: COLORS.orange, color: COLORS.darkBlue }}
          >
            <span>Demander un devis</span>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop: '1px solid rgba(103,111,157,0.2)' }}
      >
        <p className="text-xs" style={{ color: 'rgba(103,111,157,0.5)' }}>
          © {new Date().getFullYear()} Qamar Web — Tous droits réservés.
        </p>
        <div className="flex gap-6">
          {LEGAL_LINKS.map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs transition-colors"
              style={{ color: 'rgba(103,111,157,0.5)' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = COLORS.orange)}
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'rgba(103,111,157,0.5)')
              }
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
