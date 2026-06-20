import React, { useRef, useState, useEffect } from 'react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  autoPlay?: boolean;
}

/** Vidéo chargée uniquement quand visible dans le viewport. */
export const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  poster,
  className = '',
  style,
  autoPlay = true,
}) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { rootMargin: '120px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !visible) return;
    if (autoPlay) el.play().catch(() => {});
  }, [visible, autoPlay]);

  return (
    <video
      ref={ref}
      src={visible ? src : undefined}
      poster={poster}
      className={className}
      style={style}
      loop
      muted
      playsInline
      preload={visible ? 'metadata' : 'none'}
    />
  );
};
