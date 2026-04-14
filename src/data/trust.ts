import { Rocket, Award, Zap } from 'lucide-react';
import type { TrustStat } from '@/types';

export const trustStats: TrustStat[] = [
  { icon: Rocket, value: '+50', label: 'Projets réalisés' },
  { icon: Award, value: '100%', label: 'Clients satisfaits' },
  { icon: Zap, value: '⚡', label: 'Sites rapides & SEO' },
];
