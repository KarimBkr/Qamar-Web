import waterplomberieImg from '@/assets/waterplomberie.png';
import maisonMayssaImg from '@/assets/maison-mayssa.png';
import maisonMayssaVideo from '@/assets/maison-mayssa-video.mp4';
import dysponibleImg from '@/assets/dys-ponible.jpeg';
import dysponibleVideo from '@/assets/dys-ponible-video.mp4';
import lalbicuttzVideo from '@/assets/lalbicuttz-video.mp4';
import type { Project } from '@/types';

/** Réalisations affichées sur la landing — source de vérité contenu portfolio. */
export const projects: Project[] = [
  {
    name: 'Water Plomberie',
    slug: 'water-plomberie',
    type: 'Site vitrine & leads',
    title: 'Water Plomberie — Site vitrine & génération de leads',
    tagline: 'Site business · SEO local · Annecy',
    summary:
      'Site moderne pour plombier-chauffagiste en Haute-Savoie : UX animée, pages géolocalisées et parcours urgence 24/7 pour convertir les visiteurs en clients.',
    tags: ['Next.js', 'Framer Motion', 'SEO local', 'Schema.org', 'Leads'],
    location: 'Annecy · Haute-Savoie',
    gradient: 'linear-gradient(135deg, #1a4a6e 0%, #0d2840 100%)',
    emoji: '🔧',
    image: waterplomberieImg,
    gallery: [waterplomberieImg],
    url: 'https://www.waterplomberie.pro/',
    metrics: [
      { value: '11', label: 'Pages structurées' },
      { value: '24/7', label: 'Parcours urgence' },
      { value: '95+', label: 'Score Lighthouse visé' },
    ],
    caseStudy: {
      context:
        "Water Plomberie est l'entreprise de Hamza DJAFFER, plombier certifié basé à Annecy. Le site remplace une ancienne version statique pour positionner l'artisan comme référence locale sur la plomberie d'urgence, le sanitaire et le chauffage, sur un rayon de 50 km en Haute-Savoie.",
      objectives: [
        'Renforcer la crédibilité et l\'image professionnelle',
        'Améliorer le référencement local (Annecy, Thonon, Annemasse…)',
        'Générer des leads : appels, demandes de devis, urgences 24/7',
        'Offrir une expérience mobile-first fluide et mémorable',
      ],
      highlights: [
        'Hero immersif avec parallaxe, animation de texte et dégradés',
        'Mode clair/sombre (next-themes) et composants Framer Motion',
        'Slider avant/après interactif pour mettre en valeur les réalisations',
        '11 pages structurées dont pages locales SEO (/plombier-annecy, etc.)',
        'Schema.org type Plumber, sitemap XML et métadonnées complètes',
        'Modal contact, page Urgence 24/7 et notifications email Nodemailer',
      ],
      stack: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Tailwind CSS 4',
        'Framer Motion',
        'Nodemailer',
        'Schema.org',
      ],
      valueProposition:
        "Nous avons transformé la présence digitale d'un artisan local en un véritable outil commercial : un site qui ne se contente pas d'informer, mais qui convertit — identité premium, SEO local stratégique et parcours urgence.",
    },
  },
  {
    name: 'Maison Mayssa',
    slug: 'maison-mayssa',
    type: 'E-commerce · Précommande · Back-office',
    title: 'Maison Mayssa — E-commerce artisanal sur mesure',
    tagline: 'Plateforme complète · Trompe-l\'œil · Annecy',
    summary:
      "Plateforme complète pour pâtisserie trompe-l'œil à Annecy : vitrine premium, tunnel WhatsApp, fidélité et dashboard admin (stocks, planning, livraisons).",
    tags: ['React', 'Firebase', 'PWA', 'Full-stack', 'SEO local'],
    location: 'Annecy · Haute-Savoie',
    featured: true,
    gradient: 'linear-gradient(135deg, #3d2b1f 0%, #2d1e14 100%)',
    emoji: '🍰',
    video: maisonMayssaVideo,
    gallery: [maisonMayssaImg],
    url: 'https://www.maison-mayssa.fr/',
    metrics: [
      { value: 'PWA', label: 'App installable' },
      { value: 'Admin', label: 'Back-office complet' },
      { value: 'WhatsApp', label: 'Tunnel de commande' },
    ],
    caseStudy: {
      context:
        "Maison Mayssa, pâtisserie artisanale à Annecy, avait besoin d'un outil digital capable de gérer des précommandes complexes (trompe-l'œil, boxes personnalisées, événements) tout en offrant une expérience client premium.",
      objectives: [
        'Vitrine éditoriale haut de gamme avec identité visuelle forte',
        'Tunnel de commande adapté aux contraintes métier (horaires, stocks, zones)',
        'Espace client avec fidélité, parrainage et récompenses',
        'Back-office admin pour piloter l\'activité sans outil tiers',
        'SEO local ciblé sur « trompe-l\'œil Annecy » et requêtes connexes',
      ],
      highlights: [
        'Catalogue multi-catégories avec personnalisation produit avancée',
        'Panier intelligent, livraison géolocalisée et créneaux horaires',
        'Commandes via WhatsApp avec message prérempli structuré',
        'Dashboard admin : commandes, stocks, planning, analytics, promos',
        'Programme fidélité, parrainage et emails transactionnels automatiques',
        'PWA installable, tests Playwright et monitoring Sentry',
      ],
      stack: [
        'React 19',
        'TypeScript',
        'Vite 7',
        'Tailwind CSS 4',
        'Firebase',
        'Framer Motion',
        'Zustand',
        'Vercel',
      ],
      valueProposition:
        "Bien plus qu'un site — une plateforme de vente et de gestion clé en main, pensée pour le terrain. Nous transformons les artisans en marques digitales.",
    },
  },
  {
    name: 'Dys-ponible',
    slug: 'dys-ponible',
    type: 'Site vitrine · Niche · Accessibilité',
    title: 'Dys-ponible — Soutien scolaire spécialisé',
    tagline: 'DYS · TSA · TDA/H',
    summary:
      'Site rassurant pour accompagnement DYS, TSA et TDA/H : message clair, confiance immédiate et parcours simplifié pour une cible exigeante.',
    tags: ['React', 'UX éditorial', 'Accessibilité', 'Conversion'],
    location: 'France',
    gradient: 'linear-gradient(135deg, #3d5a4c 0%, #1e2d26 100%)',
    emoji: '📚',
    video: dysponibleVideo,
    gallery: [dysponibleImg],
    url: 'https://www.dys-ponible.fr/',
    metrics: [
      { value: '100%', label: 'Message spécialisé' },
      { value: 'Mobile', label: 'First responsive' },
      { value: 'WCAG', label: 'Lisibilité optimisée' },
    ],
    caseStudy: {
      context:
        'Dys-ponible est un service de soutien scolaire dédié aux profils DYS, TSA et TDA/H. Le site doit inspirer confiance dès les premières secondes auprès d\'un public sensible aux enjeux de lisibilité et d\'accompagnement.',
      objectives: [
        'Annoncer immédiatement la spécialisation du service',
        'Renforcer la crédibilité et la confiance',
        'Simplifier la prise de contact et la compréhension de l\'offre',
        'Optimiser la lisibilité et l\'accessibilité du parcours',
      ],
      highlights: [
        'Positionnement éditorial fort et cohérent avec la marque',
        'Hiérarchie de l\'information pensée pour rassurer',
        'Parcours utilisateur simplifié vers la prise de contact',
        'Design compatible mobile et lecture facilitée',
        'Identité mémorable : nom, promesse et cible alignés',
      ],
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      valueProposition:
        'Une présence en ligne claire et rassurante, adaptée à une cible spécifique et exigeante — valoriser une offre spécialisée et renforcer la crédibilité dès la page d\'accueil.',
    },
  },
  {
    name: 'LALBICUT',
    slug: 'lalbicut',
    type: 'Site vitrine · Réservation · Local',
    title: 'LALBICUT — Barbier à Bonneville',
    tagline: 'Coupes · Barbe · Rasage · Haute-Savoie',
    summary:
      'Site vitrine local pour barbier en Haute-Savoie : identité forte, offre lisible en un coup d\'œil et structure orientée prise de rendez-vous.',
    tags: ['Site vitrine', 'Branding', 'Mobile-first', 'Conversion locale'],
    location: 'Bonneville · Haute-Savoie',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    emoji: '✂️',
    video: lalbicuttzVideo,
    url: 'https://www.lalbicuttz.fr/',
    metrics: [
      { value: 'Local', label: 'SEO Bonneville' },
      { value: 'RDV', label: 'Prise de rendez-vous' },
      { value: 'Premium', label: 'Identité barber' },
    ],
    caseStudy: {
      context:
        'LALBICUT est un barbier à Bonneville en Haute-Savoie. Le site cible une clientèle locale avec une promesse simple : coupes, barbe et rasage, dans un univers masculin premium.',
      objectives: [
        'Valoriser l\'identité de marque et l\'univers barber',
        'Clarifier l\'offre et les services en un coup d\'œil',
        'Faciliter la prise de rendez-vous et le contact',
        'Renforcer la visibilité locale à Bonneville et environs',
      ],
      highlights: [
        'Positionnement local direct et rassurant',
        'Proposition de valeur courte et immédiatement lisible',
        'Identité visuelle cohérente avec l\'univers barber premium',
        'Structure orientée conversion et prise de rendez-vous',
        'Navigation simple et expérience mobile-first',
      ],
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      valueProposition:
        "Valoriser l'identité de marque, clarifier l'offre et faciliter la prise de contact — un site vitrine pensé pour un commerce de proximité avec une identité forte.",
    },
  },
];

/** Tous les tags uniques pour les filtres */
export const allProjectTags = [...new Set(projects.flatMap(p => p.tags))].sort();

export const featuredProject = projects.find(p => p.featured) ?? projects[1];

export const secondaryProjects = projects.filter(p => !p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
