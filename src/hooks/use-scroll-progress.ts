import { useScroll } from 'framer-motion';

/**
 * Retourne un MotionValue (0-1) représentant la progression du scroll.
 * Zéro re-render React — FM met à jour le DOM directement.
 */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
}
