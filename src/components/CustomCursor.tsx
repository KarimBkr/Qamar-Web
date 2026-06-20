import React, { useEffect, useRef, useCallback } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef  = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef  = useRef<number>(0);

  const animate = useCallback(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) { rafRef.current = requestAnimationFrame(animate); return; }

    // Ring lags behind dot with lerp
    ringPos.current.x += (posRef.current.x - ringPos.current.x) * 0.12;
    ringPos.current.y += (posRef.current.y - ringPos.current.y) * 0.12;

    dot.style.transform  = `translate(${posRef.current.x - 2.5}px, ${posRef.current.y - 2.5}px)`;
    ring.style.transform = `translate(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px)`;

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      dot.classList.add('cursor-visible');
      ring.classList.add('cursor-visible');
    };

    const onLeave = () => {
      dot.classList.remove('cursor-visible');
      ring.classList.remove('cursor-visible');
    };

    const onEnterClickable = () => ring.classList.add('cursor-clickable');
    const onLeaveClickable = () => ring.classList.remove('cursor-clickable');

    const onEnterImage = () => ring.classList.add('cursor-expanded');
    const onLeaveImage = () => ring.classList.remove('cursor-expanded');

    const attachToElements = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', onEnterClickable);
        el.addEventListener('mouseleave', onLeaveClickable);
      });
      document.querySelectorAll('video, img').forEach(el => {
        el.addEventListener('mouseenter', onEnterImage);
        el.addEventListener('mouseleave', onLeaveImage);
      });
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    attachToElements();

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden>
        <span className="cursor-label">Voir</span>
      </div>
    </>
  );
};
