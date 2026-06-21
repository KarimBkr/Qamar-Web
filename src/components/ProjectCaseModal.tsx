import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, ArrowUpRight, ExternalLink, CheckCircle, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { fadeUp } from '@/constants/animations';
import { useTheme } from '@/hooks/use-theme';
import { getAdjacentProject } from '@/hooks/use-project-url';
import { getTestimonialForProject } from '@/data/testimonials';
import { ProjectMediaCarousel } from '@/components/ProjectMediaCarousel';
import { MagneticButton } from '@/components/ui/MagneticButton';
import type { Project } from '@/types';

interface ProjectCaseModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigate: (project: Project) => void;
}

interface SectionBlockProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

const ModalSection: React.FC<SectionBlockProps> = ({ title, children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const { tokens: t } = useTheme();

  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={delay}>
      <h3 style={{
        fontFamily: 'var(--font-title)',
        fontSize: '0.6rem', fontWeight: 700,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: t.accent, marginBottom: '1.25rem',
      }}>
        {title}
      </h3>
      {children}
    </motion.div>
  );
};

export const ProjectCaseModal: React.FC<ProjectCaseModalProps> = ({ project, onClose, onNavigate }) => {
  const { tokens: t } = useTheme();

  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(getAdjacentProject(project.slug, -1));
      if (e.key === 'ArrowRight') onNavigate(getAdjacentProject(project.slug, 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project, onClose, onNavigate]);

  const testimonial = project ? getTestimonialForProject(project.slug) : undefined;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-0 md:p-6"
          style={{ background: t.overlayScrim, backdropFilter: 'blur(8px)' }}
          onClick={onClose}
        >
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 280, damping: 32 }}
            className="relative w-full overflow-hidden flex flex-col"
            style={{
              maxWidth: 920,
              height: '100%',
              maxHeight: 'min(92svh, 900px)',
              background: t.drawerPanel,
              border: `1px solid ${t.borderMedium}`,
              boxShadow: t.drawerShadow,
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="shrink-0 flex items-center justify-between px-6 md:px-8 py-4"
              style={{ borderBottom: `1px solid ${t.borderSubtle}`, background: t.drawerHeader, backdropFilter: 'blur(20px)' }}
            >
              <div className="flex items-center gap-3">
                <span style={{ fontSize: '1.5rem' }}>{project.emoji}</span>
                <span style={{
                  fontFamily: 'var(--font-title)', fontSize: '0.65rem',
                  letterSpacing: '0.18em', textTransform: 'uppercase', color: t.accent,
                }}>
                  Étude de cas
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onNavigate(getAdjacentProject(project.slug, -1))}
                  aria-label="Projet précédent"
                  style={navBtnStyle(t)}
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate(getAdjacentProject(project.slug, 1))}
                  aria-label="Projet suivant"
                  style={navBtnStyle(t)}
                >
                  <ChevronRight size={16} />
                </button>
                <button type="button" onClick={onClose} aria-label="Fermer" style={{ ...navBtnStyle(t), marginLeft: 4 }}>
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain">
              <ProjectMediaCarousel
                project={project}
                layoutId={`project-media-${project.slug}`}
              />

              <div style={{ padding: '1.5rem 2rem 0' }}>
                {project.location && (
                  <span style={{
                    fontFamily: 'var(--font-title)', fontSize: '0.55rem',
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'rgba(244,241,234,0.45)', display: 'block', marginBottom: '0.5rem',
                  }}>
                    {project.location}
                  </span>
                )}
                <h2 style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                  fontWeight: 900, letterSpacing: '-0.01em',
                  textTransform: 'uppercase', color: '#f4f1ea',
                  margin: '0 0 0.35rem', lineHeight: 1.15,
                }}>
                  {project.title}
                </h2>
                <p style={{
                  fontFamily: 'var(--font-title)', fontSize: '0.58rem',
                  letterSpacing: '0.14em', textTransform: 'uppercase', color: t.accent,
                  marginBottom: '0.75rem',
                }}>
                  {project.type}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {project.ourRole.map(role => (
                    <span key={role} style={{
                      fontFamily: 'var(--font-title)', fontSize: '0.48rem', fontWeight: 600,
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      padding: '0.25rem 0.55rem', borderRadius: 4,
                      color: 'rgba(244,241,234,0.55)',
                      border: `1px solid ${t.borderSubtle}`,
                    }}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Métriques */}
              <div className="px-6 md:px-8 py-8">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="grid grid-cols-3 gap-3"
                >
                  {project.metrics.map(m => (
                    <div
                      key={m.label}
                      style={{
                        padding: '1rem 0.75rem',
                        textAlign: 'center',
                        borderRadius: 12,
                        background: t.drawerListBg,
                        border: `1px solid ${t.drawerListBorder}`,
                      }}
                    >
                      <div style={{
                        fontFamily: 'var(--font-title)',
                        fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                        fontWeight: 900, color: t.accent, lineHeight: 1,
                      }}>
                        {m.value}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-title)',
                        fontSize: '0.48rem', letterSpacing: '0.14em',
                        textTransform: 'uppercase', color: 'rgba(244,241,234,0.4)',
                        marginTop: '0.4rem',
                      }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="px-6 md:px-8 pb-8 space-y-10">
                <ModalSection title="Contexte">
                  <p style={{
                    fontFamily: 'var(--font-text)', fontSize: '1.05rem', fontStyle: 'italic',
                    color: 'rgba(244,241,234,0.55)', lineHeight: 1.65, margin: 0,
                  }}>
                    {project.caseStudy.context}
                  </p>
                </ModalSection>

                <ModalSection title="Objectifs" delay={0.05}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {project.caseStudy.objectives.map(obj => (
                      <li key={obj} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <CheckCircle size={15} style={{ color: t.accent, flexShrink: 0, marginTop: 3 }} />
                        <span style={{ fontFamily: 'var(--font-text)', fontSize: '0.95rem', color: 'rgba(244,241,234,0.65)', lineHeight: 1.5 }}>
                          {obj}
                        </span>
                      </li>
                    ))}
                  </ul>
                </ModalSection>

                <ModalSection title="Ce qu'on a livré" delay={0.08}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {project.caseStudy.deliverables.map(group => (
                      <div key={group.category}>
                        <h4 style={{
                          fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 700,
                          letterSpacing: '0.16em', textTransform: 'uppercase',
                          color: '#f4f1ea', marginBottom: '0.75rem',
                          paddingBottom: '0.5rem',
                          borderBottom: `1px solid ${t.borderSubtle}`,
                        }}>
                          {group.category}
                        </h4>
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                          {group.items.map(item => (
                            <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                              <CheckCircle size={13} style={{ color: t.accent, flexShrink: 0, marginTop: 4 }} />
                              <span style={{
                                fontFamily: 'var(--font-text)', fontSize: '0.9rem',
                                color: 'rgba(244,241,234,0.62)', lineHeight: 1.5,
                              }}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </ModalSection>

                <ModalSection title="Compétences démontrées" delay={0.12}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {project.caseStudy.capabilities.map(cap => (
                      <div key={cap} style={{
                        padding: '0.85rem 1rem', borderRadius: 10,
                        background: `linear-gradient(135deg, rgba(201,136,42,0.1) 0%, rgba(201,136,42,0.03) 100%)`,
                        border: `1px solid rgba(201,136,42,0.2)`,
                        fontFamily: 'var(--font-text)', fontSize: '0.92rem',
                        color: 'rgba(244,241,234,0.72)', lineHeight: 1.45,
                      }}>
                        {cap}
                      </div>
                    ))}
                  </div>
                </ModalSection>

                <ModalSection title="Points forts" delay={0.14}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.caseStudy.highlights.map(h => (
                      <div key={h} style={{
                        padding: '1rem 1.1rem', borderRadius: 12,
                        background: t.drawerListBg, border: `1px solid ${t.drawerListBorder}`,
                      }}>
                        <span style={{ fontFamily: 'var(--font-text)', fontSize: '0.88rem', color: 'rgba(244,241,234,0.62)', lineHeight: 1.5 }}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </ModalSection>

                <ModalSection title="Stack technique" delay={0.15}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.caseStudy.stack.map(tech => (
                      <span key={tech} style={{
                        fontFamily: 'var(--font-title)', fontSize: '0.58rem', fontWeight: 600,
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        padding: '0.45rem 0.85rem', borderRadius: 8,
                        background: t.drawerTagBg, border: `1px solid ${t.drawerTagBorder}`,
                        color: 'rgba(244,241,234,0.55)',
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </ModalSection>

                {testimonial && (
                  <ModalSection title="Témoignage client" delay={0.18}>
                    <div style={{
                      padding: '1.5rem', borderRadius: 12,
                      background: t.drawerListBg, border: `1px solid ${t.drawerListBorder}`,
                    }}>
                      <div style={{ display: 'flex', gap: 4, marginBottom: '0.75rem' }}>
                        {Array.from({ length: testimonial.stars }).map((_, i) => (
                          <Star key={i} size={12} fill={t.accent} color={t.accent} />
                        ))}
                      </div>
                      <p style={{
                        fontFamily: 'var(--font-text)', fontSize: '1rem', fontStyle: 'italic',
                        color: 'rgba(244,241,234,0.7)', lineHeight: 1.6, margin: '0 0 1rem',
                      }}>
                        « {testimonial.text} »
                      </p>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                        <span style={{ color: '#f4f1ea', fontWeight: 700 }}>{testimonial.name}</span>
                        <span style={{ color: 'rgba(244,241,234,0.4)', display: 'block', marginTop: 4, fontWeight: 400 }}>
                          {testimonial.role}
                        </span>
                      </div>
                    </div>
                  </ModalSection>
                )}

                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    margin: 0, padding: '1.75rem 2rem',
                    borderLeft: `3px solid ${t.accent}`,
                    background: 'linear-gradient(135deg, rgba(201,136,42,0.08) 0%, transparent 100%)',
                    borderRadius: '0 12px 12px 0',
                  }}
                >
                  <p style={{
                    fontFamily: 'var(--font-text)', fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
                    fontStyle: 'italic', color: '#f4f1ea', lineHeight: 1.6, margin: 0,
                  }}>
                    « {project.caseStudy.valueProposition} »
                  </p>
                  <footer style={{
                    fontFamily: 'var(--font-title)', fontSize: '0.55rem',
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: t.accent, marginTop: '1rem',
                  }}>
                    — Qamar Web
                  </footer>
                </motion.blockquote>
              </div>
            </div>

            {/* Footer CTAs */}
            <div
              className="shrink-0 flex flex-col sm:flex-row gap-3 px-6 md:px-8 py-4"
              style={{ borderTop: `1px solid ${t.borderSubtle}`, background: t.drawerHeader, backdropFilter: 'blur(20px)' }}
            >
              {project.url && (
                <MagneticButton
                  as="a"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  strength={0.2}
                  style={{
                    flex: 1, justifyContent: 'center',
                    padding: '0.85rem 1.25rem', borderRadius: 12,
                    fontFamily: 'var(--font-title)', fontSize: '0.65rem',
                    fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                    textDecoration: 'none', color: '#f4f1ea',
                    border: `1px solid ${t.borderMedium}`, background: t.drawerListBg,
                  }}
                >
                  Voir le site en live
                  <ExternalLink size={13} />
                </MagneticButton>
              )}
              <MagneticButton
                as="a"
                href="#contact"
                onClick={onClose}
                strength={0.2}
                data-cursor="cta"
                style={{
                  flex: 1, justifyContent: 'center',
                  padding: '0.85rem 1.25rem', borderRadius: 12,
                  fontFamily: 'var(--font-title)', fontSize: '0.65rem',
                  fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
                  textDecoration: 'none', color: t.onAccent, background: t.accent,
                  boxShadow: '0 8px 32px rgba(201,136,42,0.35)',
                }}
              >
                Démarrer un projet similaire
                <ArrowUpRight size={14} />
              </MagneticButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function navBtnStyle(t: ReturnType<typeof useTheme>['tokens']): React.CSSProperties {
  return {
    width: 36, height: 36, borderRadius: 10,
    border: `1px solid ${t.borderSubtle}`,
    background: t.drawerCloseBg, color: t.muted,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'none',
  };
}
