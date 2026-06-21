import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
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
  onMobileMenuOpenChange,
}) => {
  const scrollProgress = useScrollProgress();
  const { tokens: t } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu  = useCallback(() => { setMenuOpen(true);  onMobileMenuOpenChange(true);  }, [onMobileMenuOpenChange]);
  const closeMenu = useCallback(() => { setMenuOpen(false); onMobileMenuOpenChange(false); }, [onMobileMenuOpenChange]);

  const navigateToSection = useCallback((sectionId: string) => {
    closeMenu();
    scheduleScrollToSectionId(sectionId, 50);
  }, [closeMenu]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeMenu]);

  useEffect(() => {
    if (menuOpen) {
      const sw = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (sw > 0) document.body.style.paddingRight = `${sw}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [menuOpen]);

  return (
    <>
      {/* Scroll progress line — MotionValue direct, zéro re-render */}
      <div className="pointer-events-none fixed top-0 left-0 right-0 z-[9980] h-[1px] overflow-hidden" aria-hidden>
        <motion.div
          style={{
            height: '100%',
            scaleX: scrollProgress,
            transformOrigin: 'left center',
            background: t.accent,
          }}
        />
      </div>

      {/* ── Navbar strip ── */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: menuOpen ? 0 : 1 }}
        transition={{ duration: menuOpen ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[9970]"
        style={{
          background: scrolled ? 'rgba(10,10,11,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(244,241,234,0.05)' : 'none',
          pointerEvents: menuOpen ? 'none' : 'auto',
        }}
      >
        <div className="px-6 md:px-10 py-5 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#accueil"
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: '1rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#f4f1ea',
              textDecoration: 'none',
            }}
            onClick={e => { if (menuOpen) { e.preventDefault(); navigateToSection('accueil'); } }}
          >
            QAMAR<span style={{ color: t.accent }}>.</span>WEB
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => {
              const sectionId = NAV_SECTION_MAP[link];
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link}
                  href={`#${sectionId}`}
                  style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: isActive ? '#f4f1ea' : 'rgba(244,241,234,0.38)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    paddingBottom: 2,
                    borderBottom: isActive ? `1px solid ${t.accent}` : '1px solid transparent',
                  }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = '#f4f1ea'; }}
                  onMouseLeave={e => {
                    if (!isActive) (e.target as HTMLElement).style.color = 'rgba(244,241,234,0.38)';
                  }}
                >
                  {link}
                </a>
              );
            })}
          </nav>

          {/* CTA + Burger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a
              href="#contact"
              className="hidden md:inline-block"
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: t.accent,
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.opacity = '0.65'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.opacity = '1'; }}
            >
              Devis gratuit →
            </a>

            {/* Circular burger button — Ownitt style */}
            <button
              type="button"
              onClick={menuOpen ? closeMenu : openMenu}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
              style={{
                position: 'relative',
                width: 54, height: 54,
                borderRadius: '50%',
                border: menuOpen ? '1px solid rgba(0,0,0,0.2)' : '1px solid rgba(244,241,234,0.28)',
                background: 'transparent',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 7,
                cursor: 'none',
                overflow: 'hidden',
                animation: menuOpen ? 'none' : 'ringPulse 2.5s ease-in-out infinite',
                transition: 'border-color 0.4s',
              }}
            >
              {/* Hover fill — cream slides up */}
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: '#f4f1ea',
                  transform: 'translateY(102%)',
                  transition: 'transform 0.55s cubic-bezier(0.65,0,0.35,1)',
                  zIndex: 0,
                }}
                className="burger-fill"
              />

              {/* Lines */}
              {[0, 1].map(i => (
                <span
                  key={i}
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'block',
                    height: 2,
                    width: menuOpen ? 22 : (i === 0 ? 26 : 17),
                    background: '#f4f1ea',
                    borderRadius: 999,
                    transformOrigin: '50%',
                    transition: 'width 0.45s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.77,0,0.175,1), background 0.4s',
                    transform: menuOpen
                      ? i === 0 ? 'translateY(4.5px) rotate(45deg)' : 'translateY(-4.5px) rotate(-45deg)'
                      : 'none',
                  }}
                />
              ))}

              <style>{`
                button:hover .burger-fill { transform: translateY(0) !important; }
                button:hover span[style*="border-radius: 999px"] { background: #0a0a0b !important; }
              `}</style>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Full-screen overlay menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            className="fixed inset-0 flex flex-col overflow-hidden"
            style={{ background: '#0a0a0b', zIndex: 9975 }}
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="grain-overlay" style={{ zIndex: 1 }} />

            {/* Header */}
            <div
              className="flex items-center justify-between px-6 md:px-10 py-5 relative"
              style={{ zIndex: 2, borderBottom: '1px solid rgba(244,241,234,0.06)' }}
            >
              <span style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#f4f1ea',
              }}>
                QAMAR<span style={{ color: t.accent }}>.</span>WEB
              </span>
              {/* Bouton fermer — même taille que le burger (54px) pour aligner les deux headers */}
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Fermer le menu"
                style={{
                  position: 'relative',
                  width: 54, height: 54,
                  borderRadius: '50%',
                  border: '1px solid rgba(244,241,234,0.28)',
                  background: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'none',
                  color: '#f4f1ea',
                  flexShrink: 0,
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation links */}
            <nav
              className="flex-1 flex flex-col justify-center px-6 md:px-10 relative"
              style={{ zIndex: 2 }}
            >
              {NAV_LINKS.map((link, i) => {
                const sectionId = NAV_SECTION_MAP[link];
                return (
                  <motion.a
                    key={link}
                    href={`#${sectionId}`}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.18 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    onClick={e => { e.preventDefault(); navigateToSection(sectionId); }}
                    className="group flex items-baseline gap-5 py-3.5 transition-opacity"
                    style={{
                      textDecoration: 'none',
                      borderBottom: '1px solid rgba(244,241,234,0.06)',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.5'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: '0.52rem',
                      letterSpacing: '0.22em',
                      color: t.accent,
                      minWidth: '1.5rem',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: 'clamp(2rem, 5.5vw, 4rem)',
                      fontWeight: 700,
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      color: '#f4f1ea',
                      lineHeight: 1.1,
                    }}>
                      {link}
                    </span>
                  </motion.a>
                );
              })}
            </nav>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-6 md:px-10 py-6 flex items-center justify-between relative"
              style={{ zIndex: 2, borderTop: '1px solid rgba(244,241,234,0.06)' }}
            >
              <em style={{
                fontFamily: 'var(--font-text)',
                fontStyle: 'italic',
                fontSize: '0.85rem',
                color: 'rgba(244,241,234,0.32)',
              }}>
                Tout commence par une conversation.
              </em>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); navigateToSection('contact'); }}
                style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: t.accent,
                  textDecoration: 'none',
                }}
              >
                Nous contacter →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
