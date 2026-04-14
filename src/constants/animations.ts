import type { Variants } from 'framer-motion';
import type React from 'react';

/**
 * Variante Framer Motion : fondu + slide-up réutilisable.
 * Accepte un délai personnalisé via `custom`.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

/**
 * Style glass-morphism partagé entre les cartes et panneaux.
 */
export const glassStyle: React.CSSProperties = {
  background: 'rgba(66,71,105,0.35)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: '1px solid rgba(103,111,157,0.25)',
};
