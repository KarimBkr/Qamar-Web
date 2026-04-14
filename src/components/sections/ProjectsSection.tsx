import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from 'lucide-react';
import { COLORS } from '@/constants/colors';
import { glassStyle } from '@/constants/animations';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { projects } from '@/data/projects';
import type { Project } from '@/types';

const VISIBLE_COUNT = 3;

// ─── Project Card ─────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  const cardContent = (
    <>
      {/* Background: image si dispo, sinon gradient */}
      {project.image ? (
        <img
          src={project.image}
          alt={`Aperçu du site ${project.name}`}
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ opacity: 0.85 }}
        />
      ) : null}

      {/* Overlay sombre pour lisibilité */}
      <div
        className="absolute inset-0"
        style={{
          background: project.image
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)'
            : project.gradient,
        }}
      />

      {/* Content */}
      <div className="relative p-8 h-full flex flex-col justify-between" style={{ minHeight: 280 }}>
        <div className="text-5xl">{project.emoji}</div>
        <div>
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-2 px-3 py-1 rounded-full inline-block"
            style={{ background: 'rgba(249,177,122,0.2)', color: COLORS.orange }}
          >
            {project.type}
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold" style={{ color: COLORS.white }}>
              {project.name}
            </h3>
            {project.url && (
              <ExternalLink size={16} style={{ color: 'rgba(255,255,255,0.5)' }} />
            )}
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center rounded-2xl"
            style={{ background: 'rgba(45,50,80,0.75)', backdropFilter: 'blur(4px)' }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="px-6 py-3 rounded-full font-semibold flex items-center gap-2"
              style={{ background: COLORS.orange, color: COLORS.darkBlue }}
            >
              <span>{project.url ? 'Voir le site' : 'Voir le projet'}</span>
              <ArrowRight size={16} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  const sharedProps = {
    className: 'relative rounded-2xl overflow-hidden flex-1',
    style: {
      background: project.gradient,
      minHeight: 280,
      border: '1px solid rgba(103,111,157,0.2)',
      cursor: 'pointer',
    } as React.CSSProperties,
    onMouseEnter,
    onMouseLeave,
  };

  // Carte cliquable si un URL est fourni
  if (project.url) {
    return (
      <a
        key={project.name}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        {...sharedProps}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div key={project.name} {...sharedProps}>
      {cardContent}
    </div>
  );
};

// ─── Section ─────────────────────────────────────────────────────────────────

export const ProjectsSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const maxIdx = Math.max(0, projects.length - VISIBLE_COUNT);

  const handlePrev = () => setCurrentIdx((p) => Math.max(0, p - 1));
  const handleNext = () => setCurrentIdx((p) => Math.min(maxIdx, p + 1));

  return (
    <section
      id="projets"
      className="py-24 relative overflow-hidden"
      style={{ background: COLORS.midBlue }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 100% 50%, rgba(249,177,122,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedSection>
          <SectionTitle
            label="Nos Projets"
            title="Réalisations récentes"
            subtitle="Découvrez quelques-uns des projets que nous avons conçus et développés pour nos clients."
          />
        </AnimatedSection>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `${-(currentIdx * (100 / VISIBLE_COUNT + 2))}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ width: `${(projects.length / VISIBLE_COUNT) * 100}%` }}
            >
              {projects.map((project, i) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={i}
                  isHovered={hoveredIdx === i}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
              style={{
                ...glassStyle,
                color: currentIdx === 0 ? 'rgba(103,111,157,0.4)' : COLORS.white,
                opacity: currentIdx === 0 ? 0.5 : 1,
              }}
              aria-label="Projet précédent"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: maxIdx + 1 }).map((_, i) => (
                <button
                  key={`dot-${i}`}
                  onClick={() => setCurrentIdx(i)}
                  className="h-2 rounded-full transition-all duration-200"
                  style={{
                    background: i === currentIdx ? COLORS.orange : 'rgba(103,111,157,0.4)',
                    width: i === currentIdx ? 24 : 8,
                  }}
                  aria-label={`Groupe de projets ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIdx === maxIdx}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
              style={{
                ...glassStyle,
                color: currentIdx === maxIdx ? 'rgba(103,111,157,0.4)' : COLORS.white,
                opacity: currentIdx === maxIdx ? 0.5 : 1,
              }}
              aria-label="Projet suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
