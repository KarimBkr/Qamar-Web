import type { Plan, Upsell } from '@/types';

export const plans: Plan[] = [
  {
    name: 'Starter',
    description: 'Idéal pour lancer votre présence en ligne rapidement.',
    price: '1 200€',
    delivery: '3 – 4 semaines',
    badge: null,
    badgeColor: null,
    accentColor: '#34d399',
    features: [
      "Site vitrine jusqu'à 5 pages",
      'Design responsive sur mesure',
      'Formulaire de contact intégré',
      'SEO technique de base',
      'Optimisation Core Web Vitals',
      'Formation à la mise à jour',
    ],
    bonus: '1 mois de support inclus',
    cta: 'Démarrer mon projet',
  },
  {
    name: 'Business',
    description: 'La formule complète pour convertir vos visiteurs en clients.',
    price: '2 490€',
    delivery: '5 – 7 semaines',
    badge: 'Le plus populaire',
    badgeColor: null,
    accentColor: '#C9882A',
    features: [
      "Jusqu'à 12 pages optimisées",
      'UX/UI sur mesure + micro-animations',
      'Blog ou CMS intégré (sans code)',
      'SEO avancé & stratégie de contenu',
      'Intégrations email & CRM',
      'Dashboard analytique configuré',
    ],
    bonus: '3 mois de support inclus',
    cta: 'Choisir Business',
  },
  {
    name: 'Premium',
    description: 'Pour les projets complexes qui demandent une architecture dédiée.',
    price: '4 990€+',
    delivery: 'Délai sur mesure',
    badge: null,
    badgeColor: null,
    accentColor: '#a78bfa',
    features: [
      'Application web ou e-commerce',
      'Architecture fullstack dédiée',
      'Automatisations & intégrations API',
      "Stratégie d'acquisition digitale",
      'Optimisation des conversions (A/B)',
      'Support prioritaire 7j/7',
    ],
    bonus: '6 mois de support inclus',
    cta: 'Discutons de votre projet',
  },
];

export const upsells: Upsell[] = [
  {
    title: 'Maintenance mensuelle',
    price: '120€ / mois',
    desc: 'Mises à jour, sécurité, sauvegardes et monitoring continu.',
  },
  {
    title: 'SEO & Référencement',
    price: '350€ / mois',
    desc: 'Audit, optimisation on-page et production de contenu mensuelle.',
  },
  {
    title: 'Hébergement Pro',
    price: '45€ / mois',
    desc: 'Serveur dédié haute performance, SSL, CDN et backups quotidiens.',
  },
];
