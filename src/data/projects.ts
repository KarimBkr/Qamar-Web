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
      'Refonte complète pour un plombier-chauffagiste en Haute-Savoie : 11 pages, SEO local multi-villes, parcours urgence 24/7 et formulaires orientés conversion.',
    tags: ['Next.js', 'Framer Motion', 'SEO local', 'Schema.org', 'Leads'],
    location: 'Annecy · Haute-Savoie',
    gradient: 'linear-gradient(135deg, #1a4a6e 0%, #0d2840 100%)',
    emoji: '🔧',
    image: waterplomberieImg,
    gallery: [waterplomberieImg],
    url: 'https://www.waterplomberie.pro/',
    ourRole: ['Design UX/UI', 'Développement Next.js', 'SEO local', 'Intégration leads'],
    cardDeliverables: [
      '11 pages dont 3 pages locales SEO (/plombier-annecy, thonon, annemasse)',
      'Page Urgence 24/7 avec CTA appel immédiat + WhatsApp',
      'Slider avant/après interactif pour les réalisations chantier',
      'Schema.org Plumber, sitemap XML et métadonnées Open Graph',
    ],
    metrics: [
      { value: '11', label: 'Pages livrées' },
      { value: '24/7', label: 'Parcours urgence' },
      { value: '3', label: 'Villes SEO local' },
    ],
    caseStudy: {
      context:
        "Water Plomberie est l'entreprise de Hamza DJAFFER, plombier certifié basé à Annecy. Nous avons remplacé une version statique par un site orienté conversion, pensé pour capter les recherches « plombier Annecy » et transformer chaque visite en appel ou demande de devis.",
      objectives: [
        'Renforcer la crédibilité et l\'image professionnelle',
        'Améliorer le référencement local (Annecy, Thonon, Annemasse…)',
        'Générer des leads : appels, demandes de devis, urgences 24/7',
        'Offrir une expérience mobile-first fluide et mémorable',
      ],
      deliverables: [
        {
          category: 'Design & UX',
          items: [
            'Hero immersif avec parallaxe 3D et animations Framer Motion',
            'Mode clair / sombre (next-themes) sur tout le site',
            'Slider avant/après interactif pour valoriser les chantiers',
            'Boutons flottants : appel direct, WhatsApp, demande de devis',
          ],
        },
        {
          category: 'Développement',
          items: [
            '11 pages structurées : accueil, services, urgence, FAQ, mentions légales…',
            'Modal contact avec sélection du type de service + option urgence',
            'API Nodemailer pour notifications email instantanées',
            'Widget accessibilité + bandeau cookies RGPD',
          ],
        },
        {
          category: 'SEO & visibilité',
          items: [
            'Pages locales dédiées : /plombier-annecy, /plombier-thonon, /plombier-annemasse',
            'Schema.org type Plumber (avis, zones, coordonnées)',
            'Sitemap XML avec priorités par page + balises canoniques',
            'Métadonnées complètes : title, description, Open Graph, Twitter Cards',
          ],
        },
      ],
      capabilities: [
        'Sites vitrines orientés conversion pour artisans',
        'SEO local multi-villes et données structurées',
        'Parcours urgence & génération de leads (appel, WhatsApp, devis)',
        'Animations premium Framer Motion + mode sombre',
      ],
      highlights: [
        'Hero immersif avec parallaxe, animation de texte et dégradés',
        'Mode clair/sombre (next-themes) et composants Framer Motion',
        'Slider avant/après interactif pour mettre en valeur les réalisations',
        '11 pages structurées dont pages locales SEO (/plombier-annecy, etc.)',
        'Schema.org type Plumber, sitemap XML et métadonnées complètes',
        'Modal contact, page Urgence 24/7 et notifications email Nodemailer',
      ],
      stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion', 'Nodemailer', 'Schema.org'],
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
      'Plateforme e-commerce sur mesure : catalogue personnalisable, tunnel WhatsApp, livraison géolocalisée, fidélité, emails auto et dashboard admin complet (stocks, planning, analytics).',
    tags: ['React', 'Firebase', 'PWA', 'Full-stack', 'SEO local'],
    location: 'Annecy · Haute-Savoie',
    featured: true,
    gradient: 'linear-gradient(135deg, #3d2b1f 0%, #2d1e14 100%)',
    emoji: '🍰',
    video: maisonMayssaVideo,
    gallery: [maisonMayssaImg],
    url: 'https://www.maison-mayssa.fr/',
    ourRole: ['Conception produit', 'Dev full-stack', 'Firebase & temps réel', 'Automatisation métier'],
    cardDeliverables: [
      'Catalogue multi-catégories avec personnalisation produit (trompe-l\'œil, boxes…)',
      'Tunnel commande : panier, livraison géo, créneaux horaires, envoi WhatsApp',
      'Dashboard admin : commandes, stocks, planning production, analytics CA',
      'PWA installable + programme fidélité, parrainage & emails transactionnels',
    ],
    metrics: [
      { value: '15+', label: 'Modules admin' },
      { value: 'PWA', label: 'App installable' },
      { value: 'Full', label: 'Stack React + Firebase' },
    ],
    caseStudy: {
      context:
        "Maison Mayssa, pâtisserie artisanale à Annecy, avait besoin d'un outil digital capable de gérer des précommandes complexes (trompe-l'œil, boxes personnalisées, événements) tout en offrant une expérience client premium — sans dépendre d'un Shopify générique.",
      objectives: [
        'Vitrine éditoriale haut de gamme avec identité visuelle forte',
        'Tunnel de commande adapté aux contraintes métier (horaires, stocks, zones)',
        'Espace client avec fidélité, parrainage et récompenses',
        'Back-office admin pour piloter l\'activité sans outil tiers',
        'SEO local ciblé sur « trompe-l\'œil Annecy » et requêtes connexes',
      ],
      deliverables: [
        {
          category: 'Site public & e-commerce',
          items: [
            'Catalogue multi-catégories : trompe-l\'œil, chocolaterie, salé, événements…',
            'Fiches produit personnalisables (tailles, parfums, boxes)',
            'Panier intelligent + livraison géolocalisée (rayon Annecy, API adresse.gouv.fr)',
            'Commandes via WhatsApp avec message prérempli structuré',
            'Programme fidélité, parrainage, codes promo et suivi commande en ligne',
          ],
        },
        {
          category: 'Back-office admin (/admin)',
          items: [
            'Gestion commandes : statuts, édition, export PDF, épinglage',
            'Stocks temps réel, alertes rupture, overrides produits',
            'Planning production & journalier livraison/retrait',
            'Analytics CA (Recharts), promos, clients, emails auto (Resend)',
            'Messages WhatsApp préremplis (validation, commande prête, avis Google)',
          ],
        },
        {
          category: 'Technique & qualité',
          items: [
            'PWA installable avec mode hors ligne (vite-plugin-pwa)',
            'Tests E2E Playwright + tests unitaires Vitest',
            'Monitoring erreurs Sentry + déploiement Vercel',
            'Pages SEO piliers : trompe-l\'œil Annecy, brownies, cadeaux gourmands…',
          ],
        },
      ],
      capabilities: [
        'E-commerce sur mesure avec règles métier complexes',
        'Applications web full-stack React + Firebase temps réel',
        'Back-office / dashboard admin clé en main',
        'PWA, automatisation emails & intégration WhatsApp Business',
      ],
      highlights: [
        'Catalogue multi-catégories avec personnalisation produit avancée',
        'Panier intelligent, livraison géolocalisée et créneaux horaires',
        'Commandes via WhatsApp avec message prérempli structuré',
        'Dashboard admin : commandes, stocks, planning, analytics, promos',
        'Programme fidélité, parrainage et emails transactionnels automatiques',
        'PWA installable, tests Playwright et monitoring Sentry',
      ],
      stack: ['React 19', 'TypeScript', 'Vite 7', 'Tailwind CSS 4', 'Firebase', 'Framer Motion', 'Zustand', 'Vercel'],
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
      'Site vitrine spécialisé pour Souhad Ayouaz : message clair dès la première seconde, parcours rassurant et formulaire de contact simplifié pour une cible exigeante.',
    tags: ['React', 'UX éditorial', 'Accessibilité', 'Conversion'],
    location: 'France',
    gradient: 'linear-gradient(135deg, #3d5a4c 0%, #1e2d26 100%)',
    emoji: '📚',
    video: dysponibleVideo,
    gallery: [dysponibleImg],
    url: 'https://www.dys-ponible.fr/',
    ourRole: ['Stratégie éditoriale', 'Design rassurant', 'Développement React', 'Optimisation conversion'],
    cardDeliverables: [
      'Positionnement immédiat : soutien DYS, TSA, TDA/H dès le hero',
      'Architecture de contenu pensée pour rassurer parents & élèves',
      'Parcours contact simplifié en 2 clics',
      'Design lisible, mobile-first et accessible',
    ],
    metrics: [
      { value: '100%', label: 'Cible spécialisée' },
      { value: '2 clics', label: 'Vers le contact' },
      { value: 'Mobile', label: 'First & responsive' },
    ],
    caseStudy: {
      context:
        'Dys-ponible est le service de Souhad Ayouaz, dédié aux profils DYS, TSA et TDA/H. Le site devait inspirer confiance immédiatement auprès de familles sensibles aux enjeux de lisibilité, de crédibilité et d\'accompagnement humain.',
      objectives: [
        'Annoncer immédiatement la spécialisation du service',
        'Renforcer la crédibilité et la confiance',
        'Simplifier la prise de contact et la compréhension de l\'offre',
        'Optimiser la lisibilité et l\'accessibilité du parcours',
      ],
      deliverables: [
        {
          category: 'Stratégie & contenu',
          items: [
            'Positionnement éditorial : nom de marque, promesse et cible alignés',
            'Hiérarchie de l\'information pensée pour rassurer dès l\'accueil',
            'Contenu orienté intentions de recherche (soutien scolaire spécialisé)',
            'FAQ et pages dédiées aux profils DYS, TSA, TDA/H',
          ],
        },
        {
          category: 'Design & expérience',
          items: [
            'Identité visuelle cohérente et apaisante',
            'Typographie et contrastes optimisés pour la lecture',
            'Parcours utilisateur linéaire vers la prise de contact',
            'Site 100 % responsive et mobile-first',
          ],
        },
        {
          category: 'Conversion',
          items: [
            'Formulaire de contact accessible et simplifié',
            'CTA visibles à chaque étape du parcours',
            'Métadonnées SEO et balises sémantiques',
          ],
        },
      ],
      capabilities: [
        'Sites vitrines de niche avec positionnement éditorial fort',
        'UX orientée confiance pour cibles sensibles',
        'Accessibilité et lisibilité optimisées',
        'Parcours conversion simplifiés',
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
      'Site vitrine premium pour barbier à Bonneville : identité masculine forte, services lisibles en un coup d\'œil et structure orientée prise de rendez-vous.',
    tags: ['Site vitrine', 'Branding', 'Mobile-first', 'Conversion locale'],
    location: 'Bonneville · Haute-Savoie',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    emoji: '✂️',
    video: lalbicuttzVideo,
    url: 'https://www.lalbicuttz.fr/',
    ourRole: ['Identité visuelle', 'Design barber premium', 'Développement React', 'SEO local'],
    cardDeliverables: [
      'Identité barber premium cohérente (typo, couleurs, univers masculin)',
      'Offre services lisible : coupes, barbe, rasage en un coup d\'œil',
      'CTA prise de rendez-vous et contact en évidence',
      'SEO local Bonneville & Haute-Savoie (74)',
    ],
    metrics: [
      { value: 'Local', label: 'SEO Bonneville' },
      { value: 'RDV', label: 'Prise de rendez-vous' },
      { value: 'Premium', label: 'Identité barber' },
    ],
    caseStudy: {
      context:
        'LALBICUT est un barbier à Bonneville en Haute-Savoie. Le site devait traduire l\'univers barber premium, clarifier l\'offre en quelques secondes et faciliter la prise de rendez-vous pour une clientèle locale.',
      objectives: [
        'Valoriser l\'identité de marque et l\'univers barber',
        'Clarifier l\'offre et les services en un coup d\'œil',
        'Faciliter la prise de rendez-vous et le contact',
        'Renforcer la visibilité locale à Bonneville et environs',
      ],
      deliverables: [
        {
          category: 'Branding & design',
          items: [
            'Identité visuelle barber : typographie, palette sombre, iconographie',
            'Hero percutant avec promesse claire (coupes, barbe, rasage)',
            'Mise en page éditoriale premium cohérente sur toutes les pages',
          ],
        },
        {
          category: 'Structure & conversion',
          items: [
            'Page services détaillée avec tarifs et durées',
            'CTA prise de rendez-vous visible sur mobile et desktop',
            'Coordonnées, horaires et zone d\'intervention accessibles',
            'Galerie / présentation de l\'univers du salon',
          ],
        },
        {
          category: 'SEO local',
          items: [
            'Optimisation pour « barbier Bonneville » et requêtes locales',
            'Métadonnées géolocalisées Haute-Savoie (74)',
            'Site rapide et mobile-first',
          ],
        },
      ],
      capabilities: [
        'Sites vitrines pour commerces de proximité',
        'Identité de marque et branding digital',
        'Structure orientée prise de RDV et conversion locale',
        'SEO local pour artisans & services',
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

/** Compétences transversales démontrées par le portfolio */
export const agencyCapabilities = [
  { label: 'Sites vitrines premium', desc: 'Artisans, services locaux, professions libérales' },
  { label: 'E-commerce sur mesure', desc: 'Catalogues, précommandes, règles métier' },
  { label: 'SEO local & technique', desc: 'Pages géo, Schema.org, sitemap, Core Web Vitals' },
  { label: 'Back-office & dashboards', desc: 'Admin, stocks, planning, analytics' },
  { label: 'Conversion & leads', desc: 'Formulaires, WhatsApp, urgence, RDV' },
  { label: 'Animations Framer Motion', desc: 'Micro-interactions, parallax, expériences mémorables' },
];

export const allProjectTags = [...new Set(projects.flatMap(p => p.tags))].sort();

export const featuredProject = projects.find(p => p.featured) ?? projects[1];

export const secondaryProjects = projects.filter(p => !p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
