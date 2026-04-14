import type { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    title: 'Analyse du besoin',
    desc: 'Nous étudions votre activité, vos objectifs et votre cible pour définir la meilleure stratégie.',
  },
  {
    num: '02',
    title: 'Design & stratégie',
    desc: 'Conception de maquettes UX/UI modernes, validées avec vous avant le développement.',
  },
  {
    num: '03',
    title: 'Développement',
    desc: 'Développement fullstack avec les technologies les plus performantes du marché.',
  },
  {
    num: '04',
    title: 'Mise en ligne & croissance',
    desc: 'Déploiement, optimisation SEO et accompagnement pour votre croissance digitale.',
  },
];

/**
 * Étapes du mini-process affichées dans le ServiceDrawer.
 * Distinctes des étapes globales — source de vérité centralisée.
 */
export const drawerProcessSteps: ProcessStep[] = [
  {
    num: '01',
    title: 'Appel de découverte',
    desc: 'On échange sur votre projet, vos objectifs et votre budget.',
  },
  {
    num: '02',
    title: 'Proposition & devis',
    desc: 'Vous recevez une proposition détaillée sous 48h.',
  },
  {
    num: '03',
    title: 'Production',
    desc: 'Nous développons votre projet avec des points réguliers.',
  },
  {
    num: '04',
    title: 'Livraison & suivi',
    desc: 'Mise en ligne et accompagnement post-lancement.',
  },
];
