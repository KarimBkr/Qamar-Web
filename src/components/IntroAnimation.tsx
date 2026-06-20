import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import waterplomberieImg from '@/assets/waterplomberie.png';
import maisonMayssaImg from '@/assets/maison-mayssa.png';
import maisonMayssaVideo from '@/assets/maison-mayssa-video.mp4';
import dysponibleVideo from '@/assets/dys-ponible-video.mov';
import lalbicuttzVideo from '@/assets/lalbicuttz-video.mov';

const CELLS: Array<{ type: 'img'; src: string } | { type: 'video'; src: string }> = [
  { type: 'img',   src: waterplomberieImg },
  { type: 'video', src: maisonMayssaVideo },
  { type: 'img',   src: maisonMayssaImg },
  { type: 'video', src: dysponibleVideo },
  { type: 'img',   src: waterplomberieImg },
  { type: 'video', src: lalbicuttzVideo },
  { type: 'img',   src: maisonMayssaImg },
  { type: 'video', src: maisonMayssaVideo },
  { type: 'img',   src: waterplomberieImg },
  { type: 'video', src: dysponibleVideo },
];

type Phase    = 'grid' | 'converged' | 'logo' | 'tagline' | 'exit';
type LogoStep = 'hidden' | 'drawing' | 'filled';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [phase,    setPhase]    = useState<Phase>('grid');
  const [logoStep, setLogoStep] = useState<LogoStep>('hidden');
  const [visible,  setVisible]  = useState(true);

  useEffect(() => {
    // Dernière cellule visible à 9×70ms + 900ms ≈ 1530ms
    // Timeline :
    //   1900ms — grille converge
    //   2300ms — logo apparaît + stroke draw (lettre par lettre, 9 delays de 130ms)
    //            dernière lettre : delay 1040ms + durée 900ms = fin à 2300+1940 = 4240ms
    //   4400ms — fill transition (0.9s)
    //   4700ms — tagline sweep
    //   5700ms — rideau + unmount
    const t = [
      setTimeout(() => setPhase('converged'), 1900),
      setTimeout(() => { setPhase('logo'); setLogoStep('drawing'); }, 2300),
      setTimeout(() => setLogoStep('filled'), 4400),
      setTimeout(() => setPhase('tagline'), 4700),
      setTimeout(() => setPhase('exit'),    7000),
      setTimeout(() => setVisible(false),   7000),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  const isConverged = phase !== 'grid';
  const logoVisible = phase === 'logo' || phase === 'tagline' || phase === 'exit';
  const showTagline = phase === 'tagline' || phase === 'exit';
  const filled      = logoStep === 'filled';

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 overflow-hidden"
          style={{ background: '#0a0a0b', zIndex: 9999 }}
          exit={{ clipPath: 'inset(100% 0 0 0)' }}
          transition={{ duration: 0.72, ease: [0.87, 0, 0.13, 1] }}
        >
          {/* Grain */}
          <div className="grain-overlay" style={{ zIndex: 1 }} />

          {/* Grille 2×5 */}
          <div
            style={{
              position: 'absolute', inset: 0,
              display: 'grid', placeItems: 'center',
              zIndex: 2,
            }}
          >
            <div
              className={isConverged ? 'intro-grid-converged' : ''}
              style={{
                display: 'grid',
                gridTemplateRows: 'repeat(2, 1fr)',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: 'clamp(4px, 0.6vw, 9px)',
                width: 'min(92vw, 1260px)',
                height: 'min(46vw, 520px)',
                transition: 'transform 1.2s cubic-bezier(0.65,0,0.35,1), filter 1.2s, opacity 0.7s 0.1s',
              }}
            >
              {CELLS.map((cell, i) => (
                <div
                  key={i}
                  className="intro-cell"
                  style={{ ['--i' as string]: i, position: 'relative', overflow: 'hidden' }}
                >
                  <div
                    className="intro-cell-inner"
                    style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d' }}
                  >
                    {cell.type === 'video' ? (
                      <video
                        src={cell.src}
                        autoPlay loop muted playsInline preload="metadata"
                        style={{
                          width: '100%', height: '100%',
                          objectFit: 'cover',
                          filter: 'grayscale(0.3) contrast(1.08)',
                        }}
                      />
                    ) : (
                      <img
                        src={cell.src}
                        alt=""
                        style={{
                          width: '100%', height: '100%',
                          objectFit: 'cover',
                          filter: 'grayscale(0.3) contrast(1.08)',
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo SVG + tagline */}
          <div
            style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              textAlign: 'center',
              zIndex: 3,
              pointerEvents: 'none',
            }}
          >
            {/* ── SVG Logo — stroke draw → fill, identique Ownitt ── */}
            <div
              style={{
                opacity: logoVisible ? 1 : 0,
                transition: 'opacity 0.55s cubic-bezier(0.16,1,0.3,1)',
              }}
              aria-hidden
            >
              <svg
                viewBox="0 0 640 100"
                style={{
                  width: 'min(84vw, 720px)',
                  height: 'auto',
                  overflow: 'visible',
                  display: 'block',
                }}
              >
                {/*
                 * Un <tspan> par lettre = un stroke-dashoffset indépendant par glyphe.
                 * L'animation CSS staggerée sur nth-child() reproduit exactement
                 * le mécanisme Ownitt (8 <path> avec animation-delay individuels).
                 * Après le tracé, la transition fill 0.9s remplit chaque lettre.
                 */}
                <text
                  x="320"
                  y="80"
                  textAnchor="middle"
                  vectorEffect="non-scaling-stroke"
                  className={`intro-logo-text${logoStep !== 'hidden' ? ' logo-draw' : ''}`}
                  style={{
                    fontFamily: "'elza-condensed', 'Helvetica Neue', sans-serif",
                    fontWeight: 900,
                    fontSize: 90,
                    letterSpacing: 2,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: filled ? 0.4 : 1.8,
                    transition: 'stroke-width 0.6s',
                  }}
                >
                  {/* Q */}
                  <tspan stroke="#f4f1ea" style={{ fill: filled ? '#f4f1ea' : 'none', transition: 'fill 0.9s cubic-bezier(0.77,0,0.175,1)' }}>Q</tspan>
                  {/* A */}
                  <tspan stroke="#f4f1ea" style={{ fill: filled ? '#f4f1ea' : 'none', transition: 'fill 0.9s cubic-bezier(0.77,0,0.175,1)' }}>A</tspan>
                  {/* M */}
                  <tspan stroke="#f4f1ea" style={{ fill: filled ? '#f4f1ea' : 'none', transition: 'fill 0.9s cubic-bezier(0.77,0,0.175,1)' }}>M</tspan>
                  {/* A */}
                  <tspan stroke="#f4f1ea" style={{ fill: filled ? '#f4f1ea' : 'none', transition: 'fill 0.9s cubic-bezier(0.77,0,0.175,1)' }}>A</tspan>
                  {/* R */}
                  <tspan stroke="#f4f1ea" style={{ fill: filled ? '#f4f1ea' : 'none', transition: 'fill 0.9s cubic-bezier(0.77,0,0.175,1)' }}>R</tspan>
                  {/* . — terracotta */}
                  <tspan stroke="#C9882A" style={{ fill: filled ? '#C9882A' : 'none', transition: 'fill 0.9s cubic-bezier(0.77,0,0.175,1)' }}>.</tspan>
                  {/* W */}
                  <tspan stroke="#f4f1ea" style={{ fill: filled ? '#f4f1ea' : 'none', transition: 'fill 0.9s cubic-bezier(0.77,0,0.175,1)' }}>W</tspan>
                  {/* E */}
                  <tspan stroke="#f4f1ea" style={{ fill: filled ? '#f4f1ea' : 'none', transition: 'fill 0.9s cubic-bezier(0.77,0,0.175,1)' }}>E</tspan>
                  {/* B */}
                  <tspan stroke="#f4f1ea" style={{ fill: filled ? '#f4f1ea' : 'none', transition: 'fill 0.9s cubic-bezier(0.77,0,0.175,1)' }}>B</tspan>
                </text>
              </svg>
            </div>

            {/* ── Tagline sweep ── */}
            <div
              className={showTagline ? 'intro-tagline-visible' : ''}
              style={{
                marginTop: 'clamp(20px, 3vw, 40px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <span
                className="intro-tagline-text"
                style={{
                  fontFamily: 'var(--font-text)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.75rem)',
                  color: '#f4f1ea',
                  letterSpacing: '0.01em',
                  display: 'inline-block',
                }}
              >
                Tout commence par une conversation.
              </span>
              <span
                className="intro-underline"
                style={{
                  display: 'block',
                  height: 1,
                  width: 'clamp(120px, 16vw, 220px)',
                  background: 'rgba(244,241,234,0.45)',
                }}
              />
            </div>
          </div>

          {/* Ligne shimmer en bas du rideau */}
          {phase === 'exit' && (
            <div
              style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(244,241,234,0.08) 20% 80%, transparent)',
                zIndex: 4,
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
