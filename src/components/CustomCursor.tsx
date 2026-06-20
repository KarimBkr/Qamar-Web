import React, { useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const CURSOR_LABELS: Record<string, string> = {
  view: 'Voir',
  project: 'Projet',
  cta: 'Go',
  nav: '',
  scroll: '',
  drag: 'Drag',
};

export const CustomCursor: React.FC = () => {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const posRef  = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const magneticTarget = useRef<{ x: number; y: number; strength: number } | null>(null);
  const cursorMode = useRef<'default' | 'clickable' | 'expanded' | 'drag'>('default');
  const rafRef  = useRef<number>(0);
  const reduced = useReducedMotion();

  const animate = useCallback(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) { rafRef.current = requestAnimationFrame(animate); return; }

    let targetX = posRef.current.x;
    let targetY = posRef.current.y;

    if (magneticTarget.current) {
      const { x, y, strength } = magneticTarget.current;
      targetX += (x - targetX) * strength;
      targetY += (y - targetY) * strength;
    }

    ringPos.current.x += (targetX - ringPos.current.x) * 0.12;
    ringPos.current.y += (targetY - ringPos.current.y) * 0.12;

    dot.style.transform  = `translate(${posRef.current.x - 2.5}px, ${posRef.current.y - 2.5}px)`;
    ring.style.transform = `translate(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px)`;

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (reduced) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      dot.classList.add('cursor-visible');
      ring.classList.add('cursor-visible');

      const magnetic = (e.target as Element)?.closest?.('[data-magnetic]') as HTMLElement | null;
      if (magnetic) {
        const rect = magnetic.getBoundingClientRect();
        magneticTarget.current = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          strength: 0.18,
        };
      } else {
        magneticTarget.current = null;
      }
    };

    const onLeave = () => {
      dot.classList.remove('cursor-visible');
      ring.classList.remove('cursor-visible');
      magneticTarget.current = null;
    };

    const setMode = (mode: typeof cursorMode.current, labelText?: string) => {
      cursorMode.current = mode;
      ring.classList.remove('cursor-clickable', 'cursor-expanded', 'cursor-drag');
      if (mode === 'clickable') ring.classList.add('cursor-clickable');
      if (mode === 'expanded') ring.classList.add('cursor-expanded');
      if (mode === 'drag') ring.classList.add('cursor-drag');
      if (label) {
        label.textContent = labelText ?? '';
        label.style.opacity = labelText ? '1' : '0';
      }
    };

    const onEnterClickable = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const cursorType = el.dataset.cursor ?? 'clickable';
      if (cursorType === 'drag') setMode('drag', CURSOR_LABELS.drag);
      else if (cursorType === 'project' || cursorType === 'view') setMode('expanded', CURSOR_LABELS[cursorType] ?? 'Voir');
      else if (cursorType === 'cta') setMode('clickable', CURSOR_LABELS.cta);
      else setMode('clickable');
    };

    const onLeaveClickable = () => setMode('default');

    const onEnterImage = () => setMode('expanded', CURSOR_LABELS.view);
    const onLeaveImage = () => setMode('default');

    const attachToElements = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
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

    const observer = new MutationObserver(attachToElements);
    observer.observe(document.body, { childList: true, subtree: true });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate, reduced]);

  if (reduced) return null;

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden>
        <span ref={labelRef} className="cursor-label" />
      </div>
    </>
  );
};
