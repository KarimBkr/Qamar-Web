import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

interface MobileContactFabProps {
  /** Masqué quand le menu mobile est ouvert (évite le chevauchement). */
  hidden: boolean;
}

export const MobileContactFab: React.FC<MobileContactFabProps> = ({ hidden }) => {
  const { tokens: t } = useTheme();

  if (hidden) return null;

  return (
    <a
      href="#contact"
      className="md:hidden fixed z-[45] flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform active:scale-95"
      style={{
        right: 'max(1.25rem, env(safe-area-inset-right, 0px))',
        bottom: 'max(1.25rem, env(safe-area-inset-bottom, 0px))',
        background: t.accent,
        color: t.onAccent,
        boxShadow: `0 8px 28px ${t.accentGlow}`,
      }}
      aria-label="Aller au formulaire de contact"
    >
      <MessageCircle size={24} strokeWidth={2} />
    </a>
  );
};
