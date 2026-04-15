import { useState, useEffect } from 'react';
import { NAV_SECTION_MAP } from '@/constants/navigation';

/**
 * Détecte la section active à l'écran via IntersectionObserver.
 * Retourne l'id de la section visible (ex: 'services').
 */
export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const sectionIds = Object.values(NAV_SECTION_MAP);
    const observers: IntersectionObserver[] = [];

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(onIntersect, {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      });
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  return activeSection;
}
