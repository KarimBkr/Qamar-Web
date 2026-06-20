import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import waterplomberieImg from '@/assets/waterplomberie.png';
import maisonMayssaVideo from '@/assets/maison-mayssa-video.mp4';
import dysponibleVideo from '@/assets/dys-ponible-video.mov';
import lalbicuttzVideo from '@/assets/lalbicuttz-video.mov';

interface Slide {
  type: 'image' | 'video';
  src: string;
  label: string;
  sub: string;
}

const SLIDES: Slide[] = [
  { type: 'image', src: waterplomberieImg,  label: 'WaterPlomberie', sub: 'Site Business'          },
  { type: 'video', src: maisonMayssaVideo,  label: 'Maison Mayssa',  sub: 'E-commerce'             },
  { type: 'video', src: dysponibleVideo,    label: 'Dys-ponible',    sub: 'Site Vitrine'           },
  { type: 'video', src: lalbicuttzVideo,    label: 'Lalbicuttz',     sub: 'Réservation Barber'     },
];

export const HeroSection: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const tiltRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => setIdx(i => (i + 1) % SLIDES.length), []);

  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next]);

  /* 3D tilt on mouse move — Ownitt-style */
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = ((e.clientX - left) / width  - 0.5) * 8;
    const y = ((e.clientY - top)  / height - 0.5) * 8;
    el.style.transform = `translate(-50%,-50%) rotateX(${-y}deg) rotateY(${x}deg)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.transform = 'translate(-50%,-50%) rotateX(0deg) rotateY(0deg)';
  }, []);

  const slide = SLIDES[idx];
  const padded = String(idx + 1).padStart(2, '0');
  const total  = String(SLIDES.length).padStart(2, '0');

  return (
    <section
      id="accueil"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: 600 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Background slides (crossfade) ── */}
      <div
        ref={tiltRef}
        style={{
          position: 'absolute',
          inset: '-4%',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          transition: 'transform 0.12s ease-out',
          transform: 'translate(-50%,-50%)',
          top: '50%',
          left: '50%',
          width: '108%',
          height: '108%',
        }}
      >
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
                  width: '100%', height: '100%',
                  objectFit: 'cover',
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
                  filter: 'grayscale(60%) brightness(0.50)',
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Overlay — vignette forte + gradient central pour lisibilité ── */}
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
      {/* Halo derrière le texte pour isolation totale */}
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

      {/* ── Content ── */}
      <div className="absolute inset-0 flex flex-col justify-between px-6 md:px-12 py-8 md:py-10" style={{ zIndex: 3 }}>

        {/* Top bar */}
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
          {/* Dots navigation */}
          <div className="flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`Slide ${i + 1}`}
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

        {/* Centre — tagline */}
        <div className="flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`lbl-${idx}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.45 }}
              style={{ marginBottom: '2rem' }}
            >
              <span style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.58rem',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: '#C9882A',
                display: 'block',
                marginBottom: '0.4rem',
              }}>
                {slide.sub}
              </span>
              <span style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(244,241,234,0.55)',
              }}>
                {slide.label}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Main tagline — Cormorant italic, large, ombre pour lisibilité */}
          <h1
            style={{
              fontFamily: 'var(--font-text)',
              fontSize: 'clamp(2rem, 5.5vw, 5rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#f4f1ea',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              maxWidth: '16ch',
              margin: 0,
              textShadow: '0 2px 40px rgba(10,10,11,0.8), 0 0 80px rgba(10,10,11,0.6)',
            }}
          >
            Tout commence par une conversation.
          </h1>

          <a
            href="#contact"
            style={{
              marginTop: '2.5rem',
              fontFamily: 'var(--font-title)',
              fontSize: '0.65rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#f4f1ea',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              paddingBottom: '2px',
              borderBottom: '1px solid rgba(244,241,234,0.35)',
              transition: 'border-color 0.2s',
            }}
          >
            Démarrer un projet
            <span style={{ color: '#C9882A', fontSize: '1rem', lineHeight: 1 }}>→</span>
          </a>
        </div>

        {/* Bottom bar */}
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

          {/* Scroll indicator */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
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
      </div>
    </section>
  );
};
