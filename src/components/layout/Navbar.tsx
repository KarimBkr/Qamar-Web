import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { COLORS } from '@/constants/colors';
import { NAV_LINKS, NAV_SECTION_MAP } from '@/constants/navigation';

interface NavbarProps {
  scrolled: boolean;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(45,50,80,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(103,111,157,0.2)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span className="text-2xl font-bold" style={{ color: COLORS.white }}>
          Qamar<span style={{ color: COLORS.orange }}>.</span>Web
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const sectionId = NAV_SECTION_MAP[link];
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link}
                href={`#${sectionId}`}
                className="relative text-sm font-medium transition-colors duration-200"
                style={{ color: isActive ? COLORS.orange : 'rgba(255,255,255,0.75)' }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.target as HTMLElement).style.color = COLORS.white;
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.75)';
                }}
              >
                {link}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: COLORS.orange }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA desktop */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
          style={{
            background: COLORS.orange,
            color: COLORS.darkBlue,
            boxShadow: '0 0 24px rgba(249,177,122,0.35)',
          }}
        >
          <span>Demander un devis</span>
          <ArrowRight size={14} />
        </a>

        {/* Burger */}
        <button
          className="md:hidden"
          style={{ color: COLORS.white }}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden px-6 pb-6"
            style={{ background: 'rgba(45,50,80,0.98)' }}
          >
            {NAV_LINKS.map((link) => {
              const sectionId = NAV_SECTION_MAP[link];
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link}
                  href={`#${sectionId}`}
                  className="flex items-center justify-between py-3 text-sm font-medium border-b"
                  style={{
                    color: isActive ? COLORS.orange : COLORS.white,
                    borderColor: 'rgba(103,111,157,0.2)',
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{link}</span>
                  {isActive && (
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: COLORS.orange }}
                    />
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full text-sm font-semibold"
              style={{ background: COLORS.orange, color: COLORS.darkBlue }}
              onClick={() => setMenuOpen(false)}
            >
              <span>Demander un devis</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
