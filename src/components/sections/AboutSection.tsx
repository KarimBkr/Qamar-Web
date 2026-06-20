import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiVuedotjs, SiTypescript,
  SiNodedotjs, SiLaravel, SiPython, SiPostgresql,
  SiMongodb, SiTailwindcss, SiFigma, SiDocker,
} from 'react-icons/si';
import { fadeUp } from '@/constants/animations';
import { useTheme } from '@/hooks/use-theme';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const TECH_STACK = [
  { name: 'React',        Icon: SiReact,       color: '#61DAFB' },
  { name: 'Next.js',      Icon: SiNextdotjs,   color: '#f4f1ea' },
  { name: 'Vue.js',       Icon: SiVuedotjs,    color: '#4FC08D' },
  { name: 'TypeScript',   Icon: SiTypescript,  color: '#3178C6' },
  { name: 'Node.js',      Icon: SiNodedotjs,   color: '#5FA04E' },
  { name: 'Laravel',      Icon: SiLaravel,     color: '#FF2D20' },
  { name: 'Python',       Icon: SiPython,      color: '#3776AB' },
  { name: 'PostgreSQL',   Icon: SiPostgresql,  color: '#4169E1' },
  { name: 'MongoDB',      Icon: SiMongodb,     color: '#47A248' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Figma',        Icon: SiFigma,       color: '#F24E1E' },
  { name: 'Docker',       Icon: SiDocker,      color: '#2496ED' },
] as const;

const STATS: [string, string][] = [
  ['3+', "Ans d'expérience"],
  ['50+', 'Projets livrés'],
  ['100%', 'Satisfaction client'],
];

const TechItem: React.FC<{ name: string; Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>; color: string }> = ({ name, Icon, color }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.55rem',
        padding: '1.1rem 0.5rem',
        cursor: 'default',
        transition: 'background 0.2s',
      }}
    >
      <Icon
        size={26}
        style={{
          color: hovered ? color : 'rgba(244,241,234,0.35)',
          transition: 'color 0.25s ease',
          flexShrink: 0,
        }}
      />
      <span style={{
        fontFamily: 'var(--font-title)',
        fontSize: '0.5rem',
        fontWeight: 600,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: hovered ? 'rgba(244,241,234,0.75)' : 'rgba(244,241,234,0.3)',
        transition: 'color 0.25s ease',
        textAlign: 'center',
        lineHeight: 1.2,
      }}>
        {name}
      </span>
    </div>
  );
};

export const AboutSection: React.FC = () => {
  const { tokens: t } = useTheme();

  return (
    <section id="a-propos" className="py-24 relative" style={{ background: t.surface }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left — texte éditorial */}
          <AnimatedSection>
            <motion.div variants={fadeUp} custom={0}>
              {/* Label */}
              <div className="flex items-center gap-3 mb-8">
                <div style={{ width: 32, height: 1, background: t.accent, flexShrink: 0 }} />
                <span style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: t.accent,
                }}>
                  À propos
                </span>
              </div>

              {/* Heading */}
              <h2 style={{
                fontFamily: 'var(--font-title)',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: '#f4f1ea',
                lineHeight: 0.95,
                marginBottom: '2rem',
              }}>
                Expertise<br />technique,<br />
                <span style={{ color: t.accent }}>à votre service</span>
              </h2>

              {/* Body */}
              <p style={{
                fontFamily: 'var(--font-text)',
                fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
                color: 'rgba(244,241,234,0.55)',
                lineHeight: 1.6,
                marginBottom: '1.25rem',
              }}>
                Nous sommes deux développeurs avec trois ans d'expérience dans la création
                de sites et d'applications web sur mesure. Nous maîtrisons un large spectre
                de technologies — du front au back-end — pour choisir librement les outils
                les mieux adaptés à votre projet.
              </p>
              <p style={{
                fontFamily: 'var(--font-text)',
                fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
                color: 'rgba(244,241,234,0.55)',
                lineHeight: 1.6,
                marginBottom: '3rem',
              }}>
                Notre équipe s'adapte à votre contexte, à vos enjeux métier et à vos
                contraintes pour construire des solutions sur mesure, réellement taillées
                pour votre croissance.
              </p>

              {/* Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                borderTop: `1px solid ${t.borderSubtle}`,
              }}>
                {STATS.map(([val, lbl], i) => (
                  <div
                    key={val}
                    style={{
                      padding: '1.5rem 1rem 1.5rem 0',
                      borderRight: i < 2 ? `1px solid ${t.borderSubtle}` : 'none',
                      paddingLeft: i > 0 ? '1rem' : 0,
                    }}
                  >
                    <div style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                      fontWeight: 900,
                      letterSpacing: '-0.02em',
                      color: t.accent,
                      lineHeight: 1,
                      marginBottom: '0.3rem',
                    }}>
                      {val}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-title)',
                      fontSize: '0.58rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(244,241,234,0.38)',
                    }}>
                      {lbl}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Right — tech stack avec logos SVG */}
          <AnimatedSection>
            <motion.div variants={fadeUp} custom={0.15}>
              <div style={{ borderTop: `1px solid ${t.borderSubtle}`, paddingTop: '2rem' }}>
                <span style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'rgba(244,241,234,0.38)',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}>
                  Technologies &amp; outils
                </span>

                {/* Grille 4 colonnes */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  borderLeft: `1px solid ${t.borderSubtle}`,
                  borderTop: `1px solid ${t.borderSubtle}`,
                  marginBottom: '2.5rem',
                }}>
                  {TECH_STACK.map(({ name, Icon, color }, i) => (
                    <div
                      key={name}
                      style={{
                        borderRight: `1px solid ${t.borderSubtle}`,
                        borderBottom: `1px solid ${t.borderSubtle}`,
                      }}
                    >
                      <TechItem name={name} Icon={Icon} color={color} key={`${name}-${i}`} />
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div style={{ borderLeft: `2px solid ${t.accent}`, paddingLeft: '1.25rem' }}>
                  <p style={{
                    fontFamily: 'var(--font-text)',
                    fontSize: 'clamp(1.05rem, 1.4vw, 1.15rem)',
                    fontStyle: 'italic',
                    color: 'rgba(244,241,234,0.52)',
                    lineHeight: 1.55,
                  }}>
                    Nous choisissons la technologie en fonction de votre besoin, pas l'inverse.
                    Chaque projet mérite l'architecture qui lui correspond vraiment.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};
