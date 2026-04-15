import { Globe, Layers, Smartphone, Zap, BarChart2 } from 'lucide-react';
import { USE_THEME_ACCENT } from '@/constants/colors';
import type { ServiceDetail } from '@/types';

export const services: ServiceDetail[] = [
  {
    id: 'sites-web',
    icon: Globe,
    title: 'Création de sites web',
    desc: 'Sites modernes, rapides et optimisés pour convertir vos visiteurs en clients.',
    color: USE_THEME_ACCENT,
    tagline: 'Votre vitrine digitale, réinventée.',
    longDesc:
      "Un site web professionnel est bien plus qu'une simple présence en ligne — c'est votre meilleur commercial. Nous concevons des sites qui captivent, convainquent et convertissent, en combinant design premium, performance technique et stratégie de contenu pensée pour votre audience.",
    features: [
      'Design sur mesure centré sur la conversion',
      'Performance Lighthouse 95+',
      'SEO technique et on-page intégré',
      'Responsive et accessible (WCAG)',
      'Animations et micro-interactions',
      'CMS intégré pour autonomie totale',
    ],
    deliverables: [
      'Maquettes UX/UI validées',
      'Site livré clé-en-main',
      'Rapport SEO & performance',
      "Formation à l'outil",
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Contentful', 'Vercel'],
    caseStudy: {
      name: 'Maison Mayssa',
      result: "E-commerce pâtisserie, trompes l'œil & livraison — Annecy",
      emoji: '🍰',
    },
  },
  {
    id: 'sites-business',
    icon: Layers,
    title: 'Sites business avancés',
    desc: 'UX/UI sur mesure et stratégie digitale pour maximiser votre impact en ligne.',
    color: '#a78bfa',
    tagline: 'Stratégie + Design + Performance.',
    longDesc:
      "Pour les entreprises qui veulent dominer leur marché, nous créons des expériences digitales complexes : tunnels de vente optimisés, landing pages haute conversion, portails clients ou espaces membres. Chaque élément est pensé pour guider l'utilisateur vers l'action.",
    features: [
      'Audit UX de votre existant',
      "Architecture d'information avancée",
      'Tunnel de vente optimisé',
      'A/B testing et analytics',
      'Intégration CRM & marketing',
      'Tracking des conversions',
    ],
    deliverables: [
      'Audit UX complet',
      'Prototypes interactifs',
      'Site déployé & suivi',
      'Dashboard analytics',
    ],
    stack: ['Next.js', 'TypeScript', 'HubSpot', 'Google Analytics 4', 'Hotjar'],
    caseStudy: {
      name: 'Water Plomberie',
      result: 'Vitrine artisan plombier, urgence 24/7 & devis — Annecy',
      emoji: '🔧',
    },
  },
  {
    id: 'saas',
    icon: BarChart2,
    title: 'Applications web / SaaS',
    desc: 'Plateformes, dashboards et outils métiers évolutifs et performants.',
    color: '#34d399',
    tagline: "Votre produit SaaS, de l'idée au marché.",
    longDesc:
      "Nous construisons des produits SaaS complets, de l'idée à la mise en production. Architecture scalable, authentification, facturation, dashboard analytique, API — nous gérons l'ensemble de la stack technique pour que vous puissiez vous concentrer sur votre croissance.",
    features: [
      'Architecture microservices scalable',
      'Authentification & gestion des rôles',
      'Facturation Stripe intégrée',
      'API REST & webhooks',
      'Dashboard analytique temps réel',
      'Notifications & emails transactionnels',
    ],
    deliverables: ['MVP fonctionnel', 'Documentation API', 'Tests automatisés', 'Pipeline CI/CD'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker', 'AWS'],
    caseStudy: {
      name: 'Maison Mayssa',
      result: "Parcours d'achat, catalogue & commande structurés — maison-mayssa.fr",
      emoji: '🍰',
    },
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Applications mobiles',
    desc: 'Applications iOS & Android performantes avec une expérience utilisateur premium.',
    color: '#60a5fa',
    tagline: 'Une app premium dans chaque poche.',
    longDesc:
      'Du concept au Store, nous développons des applications mobiles natives et cross-platform qui offrent une expérience fluide et engageante. Design system cohérent, animations natives et performance optimisée pour iOS et Android.',
    features: [
      'iOS & Android (React Native)',
      'Design system mobile natif',
      'Notifications push',
      'Mode hors ligne (offline-first)',
      'Paiement in-app',
      'Analytics & crash reporting',
    ],
    deliverables: [
      'App publiée sur les Stores',
      'Design system complet',
      'Rapport de tests',
      'Support post-lancement',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'RevenueCat'],
    caseStudy: {
      name: 'Water Plomberie',
      result: 'Expérience mobile-first, urgence & RDV au premier plan — waterplomberie.pro',
      emoji: '🔧',
    },
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Automatisation & outils',
    desc: "Optimisation de vos processus métiers pour gagner du temps et de l'efficacité.",
    color: '#fbbf24',
    tagline: 'Travaillez moins. Produisez plus.',
    longDesc:
      "Chaque heure passée sur des tâches répétitives est une heure perdue pour votre croissance. Nous analysons vos processus métiers et automatisons tout ce qui peut l'être : facturation, relances, reporting, onboarding client, intégrations entre outils.",
    features: [
      'Audit de vos processus actuels',
      'Automatisation no-code & custom',
      'Intégrations API (Zapier, Make, custom)',
      'Tableaux de bord automatisés',
      'Alertes et reporting automatique',
      'Formation de vos équipes',
    ],
    deliverables: [
      'Cartographie des flux',
      'Automatisations déployées',
      "Guide d'utilisation",
      'Support & maintenance',
    ],
    stack: ['Make', 'Zapier', 'Python', 'n8n', 'Airtable', 'Notion API'],
    caseStudy: {
      name: 'Maison Mayssa',
      result: 'Panier, envoi WhatsApp & précommandes — parcours allégé côté client',
      emoji: '🍰',
    },
  },
];
