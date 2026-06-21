import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { fadeUp } from '@/constants/animations';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SplitText } from '@/components/ui/SplitText';
import { LazyVideo } from '@/components/ui/LazyVideo';
import { projects, allProjectTags } from '@/data/projects';
import { useTheme } from '@/hooks/use-theme';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
  onCaseStudy: (project: Project) => void;
  isModalOpen?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project, index, featured = false, onCaseStudy, isModalOpen = false,
}) => {
  const { tokens: t } = useTheme();
  const [hovered, setHovered] = useState(false);
  const num = String(index).padStart(2, '0');

  const media = (
    <motion.div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: featured ? '21 / 9' : '16 / 10',
        overflow: 'hidden',
        background: project.gradient,
        visibility: isModalOpen ? 'hidden' : 'visible',
      }}
      animate={{ scale: hovered && !isModalOpen ? 1.03 : 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {project.video ? (
        <LazyVideo
          src={project.video}
          poster={project.image}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            filter: hovered ? 'grayscale(0%) brightness(0.88)' : 'grayscale(50%) brightness(0.65)',
            transition: 'filter 0.6s ease',
          }}
        />
      ) : project.image ? (
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'top',
            filter: hovered ? 'grayscale(0%) brightness(0.88)' : 'grayscale(50%) brightness(0.65)',
            transition: 'filter 0.6s ease',
          }}
        />
      ) : null}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, transparent 50%, rgba(10,10,11,0.75) 100%)',
      }} />
      {featured && (
        <span style={{
          position: 'absolute', top: '1rem', left: '1rem',
          fontFamily: 'var(--font-title)', fontSize: '0.55rem', fontWeight: 700,
          letterSpacing: '0.2em', textTransform: 'uppercase', color: t.accent,
          padding: '0.35rem 0.75rem',
          border: '1px solid rgba(201,136,42,0.4)', background: 'rgba(10,10,11,0.55)',
        }}>
          Projet phare
        </span>
      )}
    </motion.div>
  );

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'block' }}
      data-cursor="project"
    >
      {media}

      <div style={{ padding: featured ? '1.25rem 0 0' : '1rem 0 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.75rem' }}>
          <span style={{
            fontFamily: 'var(--font-title)', fontSize: '0.55rem', fontWeight: 600,
            letterSpacing: '0.2em', color: t.accent, flexShrink: 0,
          }}>
            {num}
          </span>
          <SplitText
            as="h3"
            text={project.title}
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: featured ? 'clamp(1.2rem, 2.5vw, 1.65rem)' : 'clamp(1rem, 2vw, 1.35rem)',
              fontWeight: 900, letterSpacing: '-0.01em',
              textTransform: 'uppercase', color: '#f4f1ea',
              lineHeight: 1.15, margin: 0, flex: 1, minWidth: 0,
            }}
          />
        </div>

        <p style={{
          fontFamily: 'var(--font-title)', fontSize: '0.58rem',
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'rgba(244,241,234,0.4)', margin: '0 0 0.75rem',
        }}>
          {project.tagline}
        </p>

        <motion.p
          animate={{ opacity: hovered ? 1 : 0.75, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.35 }}
          style={{
            fontFamily: 'var(--font-text)',
            fontSize: featured ? '1.05rem' : '0.95rem',
            fontStyle: 'italic', color: 'rgba(244,241,234,0.52)',
            lineHeight: 1.6, margin: '0 0 1rem',
            maxWidth: featured ? '72ch' : '52ch',
          }}
        >
          {project.summary}
        </motion.p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {project.tags.slice(0, 5).map(tag => (
            <span key={tag} style={{
              fontFamily: 'var(--font-title)', fontSize: '0.5rem', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '0.3rem 0.6rem', borderRadius: 4,
              color: 'rgba(201,136,42,0.85)',
              border: '1px solid rgba(201,136,42,0.25)',
              background: 'rgba(201,136,42,0.08)',
            }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <motion.button
            type="button"
            onClick={() => onCaseStudy(project)}
            whileHover={{ x: 4 }}
            style={{
              fontFamily: 'var(--font-title)', fontSize: '0.62rem', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase', color: '#f4f1ea',
              background: 'none', border: 'none',
              borderBottom: `1px solid ${t.accent}`,
              padding: '0 0 3px', cursor: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            }}
          >
            Étude de cas
            <ArrowRight size={12} style={{ color: t.accent }} />
          </motion.button>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 600,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'rgba(244,241,234,0.35)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
              }}
            >
              Voir le site
              <ExternalLink size={10} />
            </a>
          )}
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${t.borderSubtle}`, marginTop: featured ? '1.5rem' : '1rem' }} />
    </article>
  );
};

interface ProjectsSectionProps {
  onCaseStudy: (project: Project) => void;
  activeProjectSlug?: string | null;
  activeTag?: string | null;
  onTagChange?: (tag: string | null) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onCaseStudy, activeProjectSlug, activeTag: controlledTag, onTagChange,
}) => {
  const { tokens: t } = useTheme();
  const [localTag, setLocalTag] = useState<string | null>(null);
  const activeTag = controlledTag !== undefined ? controlledTag : localTag;

  const setTag = (tag: string | null) => {
    if (onTagChange) onTagChange(tag);
    else setLocalTag(tag);
  };

  const filtered = useMemo(() => {
    if (!activeTag) return projects;
    return projects.filter(p => p.tags.includes(activeTag));
  }, [activeTag]);

  const featured = filtered.find(p => p.featured);
  const secondary = filtered.filter(p => !p.featured);
  const getIndex = (slug: string) => projects.findIndex(p => p.slug === slug) + 1;

  const filterTags = ['Tous', ...allProjectTags];

  return (
    <section id="projets" className="py-24 relative" style={{ background: t.surface }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <SectionTitle
            label="Nos Projets"
            title="Réalisations récentes"
            subtitle="Des sites vitrines aux plateformes e-commerce complètes — chaque projet est pensé pour convertir, se positionner localement et refléter l'excellence de nos clients."
          />
        </AnimatedSection>

        {/* Filtres par tag */}
        <AnimatedSection>
          <motion.div variants={fadeUp} custom={0} style={{
            display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
            marginBottom: '2.5rem',
          }}>
            {filterTags.map(tag => {
              const isActive = tag === 'Tous' ? !activeTag : activeTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setTag(tag === 'Tous' ? null : tag)}
                  style={{
                    fontFamily: 'var(--font-title)', fontSize: '0.52rem', fontWeight: 600,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    padding: '0.45rem 0.85rem', borderRadius: 999,
                    cursor: 'none', transition: 'all 0.2s',
                    color: isActive ? t.onAccent : 'rgba(244,241,234,0.45)',
                    background: isActive ? t.accent : 'transparent',
                    border: `1px solid ${isActive ? t.accent : t.borderSubtle}`,
                  }}
                >
                  {tag}
                </button>
              );
            })}
          </motion.div>
        </AnimatedSection>

        {filtered.length === 0 && (
          <p style={{
            fontFamily: 'var(--font-text)', fontStyle: 'italic',
            color: 'rgba(244,241,234,0.4)', textAlign: 'center', padding: '3rem 0',
          }}>
            Aucun projet pour ce filtre.
          </p>
        )}

        {featured && (
          <AnimatedSection>
            <motion.div variants={fadeUp} custom={0}>
              <ProjectCard
                project={featured}
                index={getIndex(featured.slug)}
                featured
                onCaseStudy={onCaseStudy}
                isModalOpen={activeProjectSlug === featured.slug}
              />
            </motion.div>
          </AnimatedSection>
        )}

        {secondary.length > 0 && (
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: '0 3rem', marginTop: featured ? '3rem' : 0 }}
          >
            {secondary.map((project, i) => (
              <AnimatedSection key={project.slug}>
                <motion.div variants={fadeUp} custom={i * 0.08}>
                  <ProjectCard
                    project={project}
                    index={getIndex(project.slug)}
                    onCaseStudy={onCaseStudy}
                    isModalOpen={activeProjectSlug === project.slug}
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
