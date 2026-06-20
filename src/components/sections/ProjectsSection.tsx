import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { fadeUp } from '@/constants/animations';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { projects } from '@/data/projects';
import { useTheme } from '@/hooks/use-theme';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
  t: ReturnType<typeof useTheme>['tokens'];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, t }) => {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, '0');

  const media = project.video ? (
    <video
      src={project.video}
      autoPlay loop muted playsInline preload="metadata"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        objectFit: 'cover',
        filter: 'grayscale(50%) brightness(0.65)',
        transition: 'filter 0.6s ease',
      }}
    />
  ) : project.image ? (
    <img
      src={project.image}
      alt={project.name}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        objectFit: 'cover',
        objectPosition: 'top',
        filter: 'grayscale(50%) brightness(0.65)',
        transition: 'filter 0.6s ease',
      }}
    />
  ) : null;

  const inner = (
    <>
      {/* Media */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 10',
          overflow: 'hidden',
          background: project.gradient,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {media}

        {/* Overlay gradient */}
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 55%, rgba(10,10,11,0.7) 100%)',
          }}
        />

        {/* Hover CTA */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(10,10,11,0.45)',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-title)',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#f4f1ea',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                paddingBottom: 2,
                borderBottom: `1px solid ${t.accent}`,
              }}>
                {project.url ? 'Voir le site' : 'Voir le projet'}
                <ExternalLink size={11} />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Infos */}
      <div
        style={{
          padding: '1rem 0 1.5rem',
          display: 'flex',
          alignItems: 'baseline',
          gap: '1rem',
          borderBottom: `1px solid ${t.borderSubtle}`,
        }}
      >
        <span style={{
          fontFamily: 'var(--font-title)',
          fontSize: '0.55rem',
          fontWeight: 600,
          letterSpacing: '0.2em',
          color: t.accent,
          flexShrink: 0,
        }}>
          {num}
        </span>
        <h3 style={{
          fontFamily: 'var(--font-title)',
          fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.01em',
          textTransform: 'uppercase',
          color: '#f4f1ea',
          flex: 1,
          lineHeight: 1,
        }}>
          {project.name}
        </h3>
        <span style={{
          fontFamily: 'var(--font-title)',
          fontSize: '0.58rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(244,241,234,0.35)',
          flexShrink: 0,
        }}>
          {project.type}
        </span>
      </div>
    </>
  );

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', display: 'block' }}
      >
        {inner}
      </a>
    );
  }

  return <div style={{ display: 'block' }}>{inner}</div>;
};

export const ProjectsSection: React.FC = () => {
  const { tokens: t } = useTheme();

  return (
    <section
      id="projets"
      className="py-24 relative"
      style={{ background: t.surface }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <SectionTitle
            label="Nos Projets"
            title="Réalisations récentes"
            subtitle="Quelques projets que nous avons conçus et développés pour nos clients."
          />
        </AnimatedSection>

        {/* Grille éditoriale — 1 col mobile, 2 col md+ */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '0 3rem' }}
        >
          {projects.map((project, i) => (
            <AnimatedSection key={project.name}>
              <motion.div variants={fadeUp} custom={i * 0.08}>
                <ProjectCard project={project} index={i} t={t} />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
