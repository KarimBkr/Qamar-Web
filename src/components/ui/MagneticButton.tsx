import React, { useRef, useCallback } from 'react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  strength?: number;
  as?: 'a' | 'button' | 'div';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  'data-cursor'?: string;
}

/** Wrapper magnétique — attire légèrement l'élément vers le curseur au hover. */
export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  style,
  strength = 0.35,
  as: Tag = 'div',
  href,
  target,
  rel,
  onClick,
  'data-cursor': dataCursor,
}) => {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduced || !ref.current) return;
      const el = ref.current;
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) * strength;
      const y = (e.clientY - top - height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    },
    [reduced, strength]
  );

  const onLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  }, []);

  const shared = {
    ref: ref as React.Ref<HTMLAnchorElement & HTMLButtonElement & HTMLDivElement>,
    className: `magnetic-el ${className}`.trim(),
    style: {
      ...style,
      transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
      display: style?.display ?? 'inline-flex',
    },
    'data-magnetic': true,
    'data-cursor': dataCursor,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    onClick,
  };

  if (Tag === 'a') {
    return (
      <a {...shared} href={href} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  if (Tag === 'button') {
    return (
      <button {...shared} type="button">
        {children}
      </button>
    );
  }

  return <div {...shared}>{children}</div>;
};
