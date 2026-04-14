import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '@/constants/colors';
import { fadeUp, glassStyle } from '@/constants/animations';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import type { Tech } from '@/types';

const TECH_STACK: Tech[] = [
  { label: 'React', emoji: '⚛️' },
  { label: 'Next.js', emoji: '▲' },
  { label: 'Vue.js', emoji: '💚' },
  { label: 'TypeScript', emoji: '🔷' },
  { label: 'Node.js', emoji: '🟩' },
  { label: 'Laravel', emoji: '🔴' },
  { label: 'Python', emoji: '🐍' },
  { label: 'PostgreSQL', emoji: '🐘' },
  { label: 'MongoDB', emoji: '🍃' },
  { label: 'Tailwind CSS', emoji: '🎨' },
  { label: 'Figma', emoji: '✏️' },
  { label: 'Docker', emoji: '🐳' },
];

const STATS: [string, string][] = [
  ["5+", "Ans d'expérience"],
  ['50+', 'Projets livrés'],
  ['98%', 'Satisfaction client'],
];

export const AboutSection: React.FC = () => (
  <section id="a-propos" className="py-24 relative" style={{ background: COLORS.darkBlue }}>
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(249,177,122,0.06) 0%, transparent 60%)' }}
    />

    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <AnimatedSection>
          <motion.div variants={fadeUp} custom={0}>
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-2 rounded-full"
              style={{
                color: COLORS.orange,
                background: 'rgba(249,177,122,0.12)',
                border: '1px solid rgba(249,177,122,0.25)',
              }}
            >
              À propos
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: COLORS.white }}>
              <span>Notre expertise technique, </span>
              <span style={{ color: COLORS.orange }}>à votre service</span>
            </h2>

            <p className="text-base leading-relaxed mb-5" style={{ color: COLORS.lightBlue }}>
              Nous maîtrisons un large spectre de technologies web, du front au back-end, ce qui
              nous permet de choisir en toute liberté les outils les plus adaptés à votre
              projet — plutôt que de vous faire entrer dans un cadre technique figé.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: COLORS.lightBlue }}>
              Notre équipe s'adapte à votre contexte, à vos enjeux métier et à vos contraintes
              pour construire des solutions sur mesure, réellement taillées pour votre croissance.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {STATS.map(([val, lbl]) => (
                <div
                  key={val}
                  className="text-center p-4 rounded-xl"
                  style={{ background: 'rgba(66,71,105,0.4)', border: '1px solid rgba(103,111,157,0.25)' }}
                >
                  <div className="text-2xl font-bold" style={{ color: COLORS.orange }}>{val}</div>
                  <div className="text-xs mt-1" style={{ color: COLORS.lightBlue }}>{lbl}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Right — stack */}
        <AnimatedSection>
          <motion.div variants={fadeUp} custom={0.2} className="relative">
            <div
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{ ...glassStyle, boxShadow: '0 32px 80px rgba(0,0,0,0.3)' }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: COLORS.orange }}>
                Technologies &amp; outils
              </p>

              <div className="flex flex-wrap gap-3">
                {TECH_STACK.map((tech) => (
                  <motion.div
                    key={tech.label}
                    whileHover={{ scale: 1.06, transition: { duration: 0.15 } }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium cursor-default"
                    style={{
                      background: 'rgba(45,50,80,0.6)',
                      border: '1px solid rgba(103,111,157,0.25)',
                      color: COLORS.white,
                    }}
                  >
                    <span className="text-base leading-none">{tech.emoji}</span>
                    <span>{tech.label}</span>
                  </motion.div>
                ))}
              </div>

              <div
                className="mt-8 p-5 rounded-2xl"
                style={{ background: 'rgba(249,177,122,0.08)', border: '1px solid rgba(249,177,122,0.2)' }}
              >
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  <span className="font-semibold" style={{ color: COLORS.orange }}>Notre philosophie :</span>
                  {' '}nous choisissons la technologie en fonction de votre besoin, pas l'inverse.
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
