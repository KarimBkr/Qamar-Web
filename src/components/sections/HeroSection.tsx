import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { COLORS } from '@/constants/colors';
import { glassStyle } from '@/constants/animations';
import maisonMayssaImg from '@/assets/maison-mayssa.png';

/**
 * Section héro — première impression du site.
 */
export const HeroSection: React.FC = () => (
  <section
    id="accueil"
    className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16"
    style={{ background: `linear-gradient(135deg, ${COLORS.darkBlue} 0%, #1e2240 100%)` }}
  >
    {/* Ambient blobs */}
    <div
      className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
      style={{ background: 'rgba(103,111,157,0.15)' }}
    />
    <div
      className="absolute bottom-1/3 left-1/6 w-72 h-72 rounded-full blur-3xl pointer-events-none"
      style={{ background: 'rgba(249,177,122,0.08)' }}
    />

    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center w-full">
      {/* Left — Copy */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
          style={{
            color: COLORS.orange,
            background: 'rgba(249,177,122,0.12)',
            border: '1px solid rgba(249,177,122,0.25)',
          }}
        >
          🚀 Agence Fullstack Premium
        </span>

        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{ color: COLORS.white }}
        >
          <span>Nous créons des solutions digitales qui </span>
          <span style={{ color: COLORS.orange }}>génèrent des clients</span>
        </h1>

        <p className="text-lg mb-8 leading-relaxed" style={{ color: COLORS.lightBlue }}>
          Sites web, applications et stratégies digitales pour développer votre activité et
          transformer vos visiteurs en clients.
        </p>

        <div className="flex flex-wrap gap-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-base"
            style={{
              background: COLORS.orange,
              color: COLORS.darkBlue,
              boxShadow: '0 8px 32px rgba(249,177,122,0.4)',
            }}
          >
            <span>Démarrer un projet</span>
            <ArrowRight size={16} />
          </motion.a>

          <motion.a
            href="#projets"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-base"
            style={{
              border: '1.5px solid rgba(103,111,157,0.5)',
              color: COLORS.white,
              background: 'rgba(66,71,105,0.25)',
            }}
          >
            <span>Voir nos réalisations</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Right — Mockup */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative"
      >
        <div className="relative mx-auto" style={{ maxWidth: 480 }}>
          {/* Main card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-3xl p-6 relative overflow-hidden"
            style={{ ...glassStyle, boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}
          >
            {/* Browser dots */}
            <div className="flex items-center gap-3 mb-5">
              {['#ff5f57', '#febc2e', '#28c840'].map((color) => (
                <div key={color} className="w-3 h-3 rounded-full" style={{ background: color }} />
              ))}
              <div
                className="flex-1 h-8 rounded-lg mb-0 flex items-center px-4"
                style={{ background: 'rgba(103,111,157,0.2)' }}
              >
                <div className="text-[10px] font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.4)' }}>maison-mayssa.fr</div>
              </div>
            </div>

            {/* Application Screenshot */}
            <div className="relative w-full rounded-2xl overflow-hidden mb-5 border border-white/10" style={{ height: '240px' }}>
              <motion.img
                src={maisonMayssaImg}
                alt="Aperçu Site Maison Mayssa"
                className="w-full object-cover object-top"
                initial={{ objectPosition: 'center 0%' }}
                animate={{ objectPosition: 'center 15%' }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              />
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)' }} />
            </div>



            <div
              className="mt-5 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-[1.02]"
              style={{ background: COLORS.orange, boxShadow: '0 8px 16px rgba(249,177,122,0.2)' }}
            >
              <span className="text-sm font-bold" style={{ color: COLORS.darkBlue }}>
                Voir l'étude de cas →
              </span>
            </div>
          </motion.div>

          {/* Floating badge — performance */}
          <motion.div
            animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -top-6 -left-6 px-4 py-3 rounded-2xl pointer-events-none"
            style={{ ...glassStyle, boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <div className="text-xs font-bold" style={{ color: COLORS.white }}>
                  Performance
                </div>
                <div className="text-xs" style={{ color: COLORS.lightBlue }}>
                  Score 98/100
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating badge — conversion */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-4 -right-4 px-4 py-3 rounded-2xl pointer-events-none"
            style={{ ...glassStyle, boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <div className="text-xs font-bold" style={{ color: COLORS.white }}>
                  Conversion
                </div>
                <div className="text-xs" style={{ color: COLORS.lightBlue }}>
                  +320% leads
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);
