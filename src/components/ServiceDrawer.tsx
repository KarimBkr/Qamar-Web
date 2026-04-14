import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, CheckSquare, Lightbulb, ArrowUpRight } from 'lucide-react';
import { COLORS } from '@/constants/colors';
import { glassStyle } from '@/constants/animations';
import { drawerProcessSteps } from '@/data/process';
import type { ServiceDetail } from '@/types';

interface ServiceDrawerProps {
  service: ServiceDetail | null;
  onClose: () => void;
}

export const ServiceDrawer: React.FC<ServiceDrawerProps> = ({ service, onClose }) => {
  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = service ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [service]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          key="drawer-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-stretch justify-end"
          style={{ background: 'rgba(30,34,64,0.7)', backdropFilter: 'blur(6px)' }}
          onClick={onClose}
        >
          <motion.div
            key="drawer-panel"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 35 }}
            className="relative h-full overflow-y-auto"
            style={{
              width: 'min(620px, 100vw)',
              background: 'linear-gradient(160deg, #2d3250 0%, #1e2240 100%)',
              borderLeft: '1px solid rgba(103,111,157,0.25)',
              boxShadow: '-40px 0 120px rgba(0,0,0,0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky header */}
            <div
              className="sticky top-0 z-10 flex items-center justify-between px-8 py-5"
              style={{
                background: 'rgba(45,50,80,0.95)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(103,111,157,0.15)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${service.color}20`, border: `1px solid ${service.color}40` }}
                >
                  <service.icon size={20} style={{ color: service.color }} />
                </div>
                <span className="text-sm font-semibold" style={{ color: service.color }}>
                  {service.title}
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(103,111,157,0.2)', color: COLORS.lightBlue }}
                aria-label="Fermer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="px-8 py-8 space-y-10">
              {/* Hero */}
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
                  style={{ background: `${service.color}18`, color: service.color, border: `1px solid ${service.color}30` }}
                >
                  <Lightbulb size={12} />
                  <span>{service.tagline}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: COLORS.white }}>
                  {service.title}
                </h2>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(103,111,157,0.9)' }}>
                  {service.longDesc}
                </p>
              </div>

              {/* Case study */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="rounded-2xl p-6"
                style={{ background: `linear-gradient(135deg, ${service.color}18, ${service.color}08)`, border: `1px solid ${service.color}30` }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{service.caseStudy.emoji}</span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: service.color }}>
                      Étude de cas — {service.caseStudy.name}
                    </div>
                    <div className="text-2xl font-bold" style={{ color: COLORS.white }}>
                      {service.caseStudy.result}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Features */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: COLORS.white }}>
                  Ce qui est inclus
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{ background: 'rgba(66,71,105,0.3)', border: '1px solid rgba(103,111,157,0.15)' }}
                    >
                      <CheckCircle size={16} style={{ color: service.color, flexShrink: 0, marginTop: 1 }} />
                      <span className="text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: COLORS.white }}>
                  Livrables
                </h3>
                <div className="flex flex-wrap gap-3">
                  {service.deliverables.map((d) => (
                    <div
                      key={d}
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                      style={{ background: 'rgba(66,71,105,0.4)', border: '1px solid rgba(103,111,157,0.2)', color: COLORS.white }}
                    >
                      <CheckSquare size={13} style={{ color: service.color }} />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: COLORS.white }}>
                  Technologies utilisées
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                      style={{ background: 'rgba(45,50,80,0.8)', border: '1px solid rgba(103,111,157,0.3)', color: 'rgba(255,255,255,0.75)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mini process */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: COLORS.white }}>
                  Comment ça se passe
                </h3>
                <div className="space-y-3">
                  {drawerProcessSteps.map((item) => (
                    <div
                      key={item.num}
                      className="flex gap-4 p-4 rounded-xl"
                      style={{ background: 'rgba(45,50,80,0.5)', border: '1px solid rgba(103,111,157,0.15)' }}
                    >
                      <div
                        className="text-xl font-bold leading-none mt-0.5"
                        style={{ color: `${service.color}40`, minWidth: 28 }}
                      >
                        {item.num}
                      </div>
                      <div>
                        <div className="text-sm font-semibold mb-0.5" style={{ color: COLORS.white }}>
                          {item.title}
                        </div>
                        <div className="text-xs leading-relaxed" style={{ color: COLORS.lightBlue }}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-base"
                style={{ background: service.color, color: COLORS.darkBlue, boxShadow: `0 12px 40px ${service.color}40` }}
              >
                <span>Démarrer ce projet</span>
                <ArrowUpRight size={18} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
