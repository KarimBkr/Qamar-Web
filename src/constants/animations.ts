import type { Variants } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fondu + slide-up — variante par défaut. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

/** Révélation par clip-path (bas → haut). */
export const clipReveal: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
  visible: (delay: number = 0) => ({
    opacity: 1,
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.85, ease: EASE, delay },
  }),
};

/** Entrée flou → net. */
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay },
  }),
};

/** Scale depuis 0.92. */
export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: EASE, delay },
  }),
};

/** Slide depuis la gauche. */
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

/** Stagger container pour SplitText. */
export const splitContainer: Variants = {
  hidden: {},
  visible: (delay: number = 0) => ({
    transition: { staggerChildren: 0.06, delayChildren: delay },
  }),
};

/** Mot individuel dans SplitText. */
export const splitWord: Variants = {
  hidden: { opacity: 0, y: '110%', filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: '0%',
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: EASE },
  },
};

/** Variantes alternées par index de section. */
export const sectionVariants = [fadeUp, clipReveal, blurIn, scaleReveal, slideFromLeft] as const;

export function getSectionVariant(index: number): Variants {
  return sectionVariants[index % sectionVariants.length];
}
