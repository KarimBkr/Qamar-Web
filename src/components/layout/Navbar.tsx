import React, { useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { NAV_LINKS, NAV_SECTION_MAP } from '@/constants/navigation';
import { useScrollProgress } from '@/hooks/use-scroll-progress';
import { scheduleScrollToSectionId } from '@/lib/scroll';

interface NavbarProps {
  scrolled: boolean;
  activeSection: string;
  mobileMenuOpen: boolean;
  onMobileMenuOpenChange: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  scrolled,
  activeSection,
  mobileMenuOpen,
  onMobileMenuOpenChange,
}) => {
  const scrollProgress = useScrollProgress();
  const { tokens: t, mode, toggleTheme } = useTheme();

  const navigateToSection = useCallback(
    (sectionId: string) => {
      onMobileMenuOpenChange(false);
      scheduleScrollToSectionId(sectionId, 50);
    },
    [onMobileMenuOpenChange]
  );

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onMobileMenuOpenChange(false);
    };
    window.addEventListener('keydown', onKey);

    const mq = window.matchMedia('(min-width: 768px)');
    const onMq = () => {
      if (mq.matches) onMobileMenuOpenChange(false);
    };
    mq.addEventListener('change', onMq);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, [mobileMenuOpen, onMobileMenuOpenChange]);

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-0 right-0 z-[51] h-1 md:hidden overflow-hidden"
        aria-hidden
      >
        <div
          className="h-full rounded-none origin-left transition-[width] duration-150 ease-out"
          style={{
            width: `${Math.min(100, scrollProgress * 100)}%`,
            background: t.accent,
          }}
        />
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden cursor-pointer border-0 p-0"
            style={{ background: 'rgba(0,0,0,0.45)' }}
            aria-label="Fermer le menu"
            onClick={() => onMobileMenuOpenChange(false)}
          />
        )}
      </AnimatePresence>

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
          <a
            href="#accueil"
            className="text-2xl font-bold shrink-0"
            style={{ color: t.ink }}
            onClick={e => {
              if (mobileMenuOpen) {
                e.preventDefault();
                navigateToSection('accueil');
              }
            }}
          >
            Qamar<span style={{ color: t.accent }}>.</span>Web
          </a>

          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {NAV_LINKS.map(link => {
              const sectionId = NAV_SECTION_MAP[link];
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link}
                  href={`#${sectionId}`}
                  className="relative text-sm font-medium transition-colors duration-200"
                  style={{ color: isActive ? t.accent : t.textSecondary }}
                  onMouseEnter={e => {
                    if (!isActive) (e.target as HTMLElement).style.color = t.ink;
                  }}
                  onMouseLeave={e => {
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

          <div className="flex md:hidden items-center gap-2 relative z-10">
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
              type="button"
              style={{ color: t.ink }}
              onClick={() => onMobileMenuOpenChange(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden px-6 pb-6 relative z-10"
              style={{
                background: t.navMobileBg,
                borderBottom: `1px solid ${t.borderSubtle}`,
              }}
            >
              {NAV_LINKS.map(link => {
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
                    onClick={e => {
                      e.preventDefault();
                      navigateToSection(sectionId);
                    }}
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
                onClick={e => {
                  e.preventDefault();
                  navigateToSection('contact');
                }}
              >
                <span>Demander un devis</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
