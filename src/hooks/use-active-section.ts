import { useState, useEffect } from 'react';
import { NAV_SECTION_MAP } from '@/constants/navigation';

/**
 * Détecte la section active via IntersectionObserver.
 * N'installe les observers que lorsque `ready` est true :
 * les sections doivent être montées dans le DOM avant qu'on puisse les observer.
 */
export function useActiveSection(ready = true): string {
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    if (!ready) return;

    const sectionIds = Object.values(NAV_SECTION_MAP);
    const observers: IntersectionObserver[] = [];

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
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
  }, [ready]);

  return activeSection;
}
