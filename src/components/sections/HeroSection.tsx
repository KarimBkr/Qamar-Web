import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import waterplomberieImg from '@/assets/waterplomberie.png';
import maisonMayssaVideo from '@/assets/maison-mayssa-video.mp4';
import dysponibleVideo from '@/assets/dys-ponible-video.mp4';
import lalbicuttzVideo from '@/assets/lalbicuttz-video.mp4';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface Slide {
  type: 'image' | 'video';
  src: string;
  label: string;
  sub: string;
}

const SLIDES: Slide[] = [
  { type: 'image', src: waterplomberieImg,  label: 'Water Plomberie', sub: 'Site vitrine & leads'   },
  { type: 'video', src: maisonMayssaVideo,  label: 'Maison Mayssa',  sub: 'E-commerce · Précommande'    },
  { type: 'video', src: dysponibleVideo,    label: 'Dys-ponible',    sub: 'Soutien scolaire spécialisé' },
  { type: 'video', src: lalbicuttzVideo,    label: 'LALBICUT',       sub: 'Barbier · Bonneville'   },
];

interface HeroSectionProps {
  introComplete?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ introComplete = true }) => {
  const [idx, setIdx] = useState(0);

  const next = useCallback(() => setIdx(i => (i + 1) % SLIDES.length), []);

  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next]);

  const slide = SLIDES[idx];
  const padded = String(idx + 1).padStart(2, '0');
  const total  = String(SLIDES.length).padStart(2, '0');

  return (
    <section
      id="accueil"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: 600 }}
    >
      {/* Background slides */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <AnimatePresence mode="sync">
          <motion.div
            key={idx}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          >
            {slide.type === 'video' ? (
              <video
                src={slide.src}
                autoPlay loop muted playsInline preload="auto"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'grayscale(60%) brightness(0.55)',
                }}
              />
            ) : (
              <img
                src={slide.src}
                alt=""
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  filter: 'grayscale(60%) brightness(0.55)',
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay gradient — fixe, pas de repaint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(10,10,11,0.0) 0%, rgba(10,10,11,0.55) 100%)',
            'linear-gradient(to bottom, rgba(10,10,11,0.50) 0%, rgba(10,10,11,0.10) 35%, rgba(10,10,11,0.15) 65%, rgba(10,10,11,0.65) 100%)',
          ].join(', '),
          zIndex: 1,
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%', height: '50%',
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(10,10,11,0.65) 0%, transparent 70%)',
          zIndex: 2,
        }}
      />

      {/* Content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-between px-6 md:px-12 py-8 md:py-10"
        style={{ zIndex: 3 }}
        initial={introComplete ? { opacity: 0, y: 24 } : false}
        animate={introComplete ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <div className="flex items-center justify-between">
          <span style={{
            fontFamily: 'var(--font-title)',
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            color: 'rgba(244,241,234,0.45)',
            textTransform: 'uppercase',
          }}>
            Agence Web · Annecy
          </span>
          <div className="flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`Slide ${i + 1}`}
                data-cursor="nav"
                style={{
                  width: i === idx ? 28 : 6,
                  height: 2,
                  background: i === idx ? '#f4f1ea' : 'rgba(244,241,234,0.28)',
                  border: 'none', padding: 0, cursor: 'none',
                  borderRadius: 1,
                  transition: 'width 0.3s, background 0.3s',
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center text-center">

          {/* Services — ce que l'on fait */}
          <div style={{
            fontFamily: 'var(--font-title)',
            fontSize: '0.55rem',
            fontWeight: 600,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(244,241,234,0.38)',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}>
            <span>Sites web</span>
            <span style={{ color: '#C9882A', opacity: 0.6 }}>·</span>
            <span>E-commerce</span>
            <span style={{ color: '#C9882A', opacity: 0.6 }}>·</span>
            <span>Applications</span>
          </div>

          {/* Phrase d'accroche — compétitive et mémorable */}
          <h1
            style={{
              fontFamily: 'var(--font-text)',
              fontSize: 'clamp(2rem, 5vw, 4.75rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#f4f1ea',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              maxWidth: '20ch',
              margin: 0,
              textShadow: '0 2px 40px rgba(10,10,11,0.8), 0 0 80px rgba(10,10,11,0.6)',
            }}
          >
            Le site web que vos concurrents<br/>
            auront voulu faire en premier.
          </h1>

          {/* Projet en cours — contexte discret */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`lbl-${idx}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.4 }}
              style={{
                marginTop: '1.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.52rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#C9882A',
              }}>
                {slide.sub}
              </span>
              <span style={{ color: 'rgba(244,241,234,0.2)', fontSize: '0.5rem' }}>—</span>
              <span style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.52rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(244,241,234,0.4)',
              }}>
                {slide.label}
              </span>
            </motion.div>
          </AnimatePresence>

          <MagneticButton
            as="a"
            href="#contact"
            data-cursor="cta"
            strength={0.25}
            style={{
              marginTop: '2rem',
              fontFamily: 'var(--font-title)',
              fontSize: '0.65rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#f4f1ea',
              textDecoration: 'none',
              alignItems: 'center',
              gap: '0.75rem',
              paddingBottom: '2px',
              borderBottom: '1px solid rgba(244,241,234,0.35)',
            }}
          >
            Démarrer un projet
            <span style={{ color: '#C9882A', fontSize: '1rem', lineHeight: 1 }}>→</span>
          </MagneticButton>
        </div>

        <div className="flex items-end justify-between">
          <span style={{
            fontFamily: 'var(--font-title)',
            fontSize: '0.65rem',
            letterSpacing: '0.16em',
            color: 'rgba(244,241,234,0.35)',
          }}>
            <span style={{ color: '#f4f1ea' }}>{padded}</span>
            <span style={{ margin: '0 6px' }}>/</span>
            {total}
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }} data-cursor="scroll">
            <div style={{ width: 1, height: 48, background: 'rgba(244,241,234,0.18)', position: 'relative', overflow: 'hidden' }}>
              <motion.div
                style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40%', background: '#C9882A' }}
                animate={{ y: [0, 72, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <span style={{
              fontFamily: 'var(--font-title)',
              fontSize: '0.5rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(244,241,234,0.32)',
              writingMode: 'vertical-rl',
            }}>
              Scroll
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
