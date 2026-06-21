import React, { useRef, useState, useEffect } from 'react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  autoPlay?: boolean;
}

/** Vidéo chargée et lue uniquement quand visible — pause automatique hors viewport. */
export const LazyVideo: React.FC<LazyVideoProps> = ({
  src, poster, className = '', style, autoPlay = true,
}) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (autoPlay) {
          if (entry.isIntersecting) el.play().catch(() => {});
          else el.pause();
        }
      },
      { rootMargin: '120px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [autoPlay]);

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
