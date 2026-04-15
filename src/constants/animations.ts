import type { Variants } from 'framer-motion';

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
