/**
 * Navigation — labels et identifiants de section.
 */
export const NAV_LINKS = [
  'Accueil',
  'Services',
  'Projets',
  'Tarifs',
  'À propos',
  'Contact',
] as const;

export type NavLink = (typeof NAV_LINKS)[number];

export const NAV_SECTION_MAP: Record<NavLink, string> = {
  Accueil: 'accueil',
  Services: 'services',
  Projets: 'projets',
  Tarifs: 'tarifs',
  'À propos': 'a-propos',
  Contact: 'contact',
};
