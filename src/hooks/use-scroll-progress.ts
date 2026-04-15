import { useEffect, useState } from 'react';

/** Progression du scroll sur la page (0–1), pour la barre mobile. */
export function useScrollProgress(): number {
  const [p, setP] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setP(max <= 0 ? 0 : window.scrollY / max);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return p;
}
