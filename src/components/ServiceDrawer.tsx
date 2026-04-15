import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, CheckSquare, Lightbulb, ArrowUpRight } from 'lucide-react';
import { USE_THEME_ACCENT } from '@/constants/colors';
import { useTheme } from '@/context/ThemeContext';
import { drawerProcessSteps } from '@/data/process';
import type { ServiceDetail } from '@/types';

interface ServiceDrawerProps {
  service: ServiceDetail | null;
  onClose: () => void;
}

function serviceColor(service: ServiceDetail, accent: string): string {
  return service.color === USE_THEME_ACCENT ? accent : service.color;
}

export const ServiceDrawer: React.FC<ServiceDrawerProps> = ({ service, onClose }) => {
  const { tokens: t } = useTheme();
  const c = service ? serviceColor(service, t.accent) : t.accent;

  useEffect(() => {
    document.body.style.overflow = service ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
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
          style={{ background: t.overlayScrim, backdropFilter: 'blur(6px)' }}
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
              background: t.drawerPanel,
              borderLeft: `1px solid ${t.borderMedium}`,
              boxShadow: t.drawerShadow,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="sticky top-0 z-10 flex items-center justify-between px-8 py-5"
              style={{
                background: t.drawerHeader,
                backdropFilter: 'blur(20px)',
                borderBottom: `1px solid ${t.borderSubtle}`,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${c}20`, border: `1px solid ${c}40` }}
                >
                  <service.icon size={20} style={{ color: c }} />
                </div>
                <span className="text-sm font-semibold" style={{ color: c }}>
                  {service.title}
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ background: t.drawerCloseBg, color: t.muted }}
                aria-label="Fermer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-8 py-8 space-y-10">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
                  style={{ background: `${c}18`, color: c, border: `1px solid ${c}30` }}
                >
                  <Lightbulb size={12} />
                  <span>{service.tagline}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: t.ink }}>
                  {service.title}
                </h2>
                <p className="text-base leading-relaxed" style={{ color: t.textSecondary }}>
                  {service.longDesc}
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="rounded-2xl p-6"
                style={{ background: `linear-gradient(135deg, ${c}18, ${c}08)`, border: `1px solid ${c}30` }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{service.caseStudy.emoji}</span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: c }}>
                      Étude de cas — {service.caseStudy.name}
                    </div>
                    <div className="text-2xl font-bold" style={{ color: t.ink }}>
                      {service.caseStudy.result}
                    </div>
                  </div>
                </div>
              </motion.div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: t.ink }}>
                  Ce qui est inclus
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{
                        background: t.drawerListBg,
                        border: `1px solid ${t.drawerListBorder}`,
                      }}
                    >
                      <CheckCircle size={16} style={{ color: c, flexShrink: 0, marginTop: 1 }} />
                      <span className="text-sm" style={{ color: t.testimonialQuote }}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: t.ink }}>
                  Livrables
                </h3>
                <div className="flex flex-wrap gap-3">
                  {service.deliverables.map((d) => (
                    <div
                      key={d}
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                      style={{
                        background: t.fillMuted,
                        border: `1px solid ${t.borderSubtle}`,
                        color: t.ink,
                      }}
                    >
                      <CheckSquare size={13} style={{ color: c }} />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: t.ink }}>
                  Technologies utilisées
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                      style={{
                        background: t.drawerTagBg,
                        border: `1px solid ${t.drawerTagBorder}`,
                        color: t.textSecondary,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: t.ink }}>
                  Comment ça se passe
                </h3>
                <div className="space-y-3">
                  {drawerProcessSteps.map((item) => (
                    <div
                      key={item.num}
                      className="flex gap-4 p-4 rounded-xl"
                      style={{
                        background: t.drawerListBg,
                        border: `1px solid ${t.drawerListBorder}`,
                      }}
                    >
                      <div
                        className="text-xl font-bold leading-none mt-0.5"
                        style={{ color: `${c}40`, minWidth: 28 }}
                      >
                        {item.num}
                      </div>
                      <div>
                        <div className="text-sm font-semibold mb-0.5" style={{ color: t.ink }}>
                          {item.title}
                        </div>
                        <div className="text-xs leading-relaxed" style={{ color: t.muted }}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.a
                href="#contact"
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-base"
                style={{
                  background: c,
                  color: t.onAccent,
                  boxShadow: `0 12px 40px ${c}40`,
                }}
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
