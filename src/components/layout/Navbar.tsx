import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { NAV_LINKS, NAV_SECTION_MAP } from '@/constants/navigation';

interface NavbarProps {
  scrolled: boolean;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { tokens: t, mode, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? t.navSolid : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? `1px solid ${t.navBorder}` : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <span className="text-2xl font-bold shrink-0" style={{ color: t.ink }}>
          Qamar<span style={{ color: t.accent }}>.</span>Web
        </span>

        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {NAV_LINKS.map((link) => {
            const sectionId = NAV_SECTION_MAP[link];
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link}
                href={`#${sectionId}`}
                className="relative text-sm font-medium transition-colors duration-200"
                style={{ color: isActive ? t.accent : t.textSecondary }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.target as HTMLElement).style.color = t.ink;
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.target as HTMLElement).style.color = t.textSecondary;
                }}
              >
                {link}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: t.accent }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all hover:scale-105"
            style={{
              border: `1px solid ${t.borderMedium}`,
              color: t.ink,
              background: t.fillSubtle,
            }}
            aria-label={mode === 'light' ? 'Activer le thème sombre' : 'Activer le thème clair'}
          >
            {mode === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background: t.accent,
              color: t.onAccent,
              boxShadow: `0 0 24px ${t.accentGlow}`,
            }}
          >
            <span>Demander un devis</span>
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full"
            style={{
              border: `1px solid ${t.borderMedium}`,
              color: t.ink,
              background: t.fillSubtle,
            }}
            aria-label={mode === 'light' ? 'Thème sombre' : 'Thème clair'}
          >
            {mode === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            style={{ color: t.ink }}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden px-6 pb-6"
            style={{
              background: t.navMobileBg,
              borderBottom: `1px solid ${t.borderSubtle}`,
            }}
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
                    color: isActive ? t.accent : t.ink,
                    borderColor: t.borderSubtle,
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{link}</span>
                  {isActive && (
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: t.accent }} />
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full text-sm font-semibold"
              style={{ background: t.accent, color: t.onAccent }}
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
