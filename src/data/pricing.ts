import { Shield, BarChart2, Globe } from 'lucide-react';
import { COLORS } from '@/constants/colors';
import type { Plan, Upsell } from '@/types';

export const plans: Plan[] = [
  {
    name: 'Starter',
    price: '990€',
    badge: null,
    badgeColor: null,
    accentColor: '#34d399',
    features: [
      '3 à 5 pages',
      'Design moderne',
      'Responsive mobile',
      'Formulaire de contact',
      'SEO de base',
      'Optimisation vitesse',
    ],
    bonus: '5h de maintenance offertes (1er mois)',
    cta: 'Démarrer avec Starter',
  },
  {
    name: 'Business',
    price: '1990€',
    badge: 'Le plus populaire',
    badgeColor: COLORS.orange,
    accentColor: COLORS.orange,
    features: [
      '5 à 10 pages',
      'UX/UI personnalisé',
      'SEO avancé',
      'Blog / CMS intégré',
      'Intégrations email & CRM',
      'Analytics avancé',
    ],
    bonus: '10h de maintenance offertes',
    cta: 'Choisir Business',
  },
  {
    name: 'Premium',
    price: '2990€',
    badge: null,
    badgeColor: null,
    accentColor: '#a78bfa',
    features: [
      'Site sur mesure illimité',
      'Stratégie digitale complète',
      'Automatisation incluse',
      'Optimisation conversion',
      'Support prioritaire 7j/7',
      'Tableau de bord analytique',
    ],
    bonus: '20h de maintenance offertes',
    cta: 'Lancer Premium',
  },
];

export const upsells: Upsell[] = [
  {
    icon: Shield,
    title: 'Maintenance mensuelle',
    price: '80€/mois',
    desc: 'Mises à jour, sécurité et support technique continu.',
  },
  {
    icon: BarChart2,
    title: 'SEO avancé',
    price: '300€',
    desc: 'Audit complet, optimisation on-page et stratégie de contenu.',
  },
  {
    icon: Globe,
    title: 'Hébergement & support',
    price: 'Sur devis',
    desc: 'Hébergement haute performance avec support dédié 24/7.',
  },
];
