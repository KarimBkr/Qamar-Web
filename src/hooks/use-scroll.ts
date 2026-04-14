import { useState, useEffect } from 'react';

/**
 * Détecte si la page a été scrollée au-delà d'un seuil donné.
 * Utilisé pour appliquer le style de la navbar en mode scrollé.
 */
export function useScroll(threshold = 30): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
