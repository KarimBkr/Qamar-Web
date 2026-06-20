import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectMediaCarouselProps {
  project: Project;
  layoutId?: string;
}

/** Carrousel vidéo + screenshots dans la modal étude de cas. */
export const ProjectMediaCarousel: React.FC<ProjectMediaCarouselProps> = ({ project, layoutId }) => {
  const slides: Array<{ type: 'video' | 'image'; src: string }> = [];
  if (project.video) slides.push({ type: 'video', src: project.video });
  if (project.image && !project.video) slides.push({ type: 'image', src: project.image });
  project.gallery?.forEach(src => {
    if (!slides.some(s => s.src === src)) slides.push({ type: 'image', src });
  });

  const [idx, setIdx] = useState(0);
  const slide = slides[idx] ?? slides[0];
  const hasMultiple = slides.length > 1;

  if (!slide) return null;

  const prev = () => setIdx(i => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx(i => (i + 1) % slides.length);

  return (
    <div style={{ position: 'relative' }}>
      <motion.div
        layoutId={layoutId}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          background: project.gradient,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${project.slug}-${idx}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            style={{ position: 'absolute', inset: 0 }}
          >
            {slide.type === 'video' ? (
              <video
                src={slide.src}
                autoPlay loop muted playsInline preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <img
                src={slide.src}
                alt={project.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(10,10,11,0.85) 0%, transparent 55%)',
          pointerEvents: 'none',
        }} />

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Slide précédente"
              style={{
                position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
                width: 36, height: 36, borderRadius: '50%',
                border: '1px solid rgba(244,241,234,0.25)',
                background: 'rgba(10,10,11,0.55)',
                color: '#f4f1ea', cursor: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Slide suivante"
              style={{
                position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                width: 36, height: 36, borderRadius: '50%',
                border: '1px solid rgba(244,241,234,0.25)',
                background: 'rgba(10,10,11,0.55)',
                color: '#f4f1ea', cursor: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <ChevronRight size={16} />
            </button>
            <div style={{
              position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)',
              display: 'flex', gap: 6,
            }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setIdx(i)}
                  style={{
                    width: i === idx ? 20 : 6, height: 2,
                    border: 'none', padding: 0, borderRadius: 1,
                    background: i === idx ? '#C9882A' : 'rgba(244,241,234,0.35)',
                    cursor: 'none',
                    transition: 'width 0.25s',
                  }}
                />
              ))}
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};
