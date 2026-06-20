import type { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    name: 'Maison Mayssa',
    role: 'Pâtisserie artisanale & e-commerce — Annecy',
    text: "Notre site met enfin en valeur nos trompes l'œil et nos gourmandises comme en boutique : parcours d'achat simple, livraison et commande WhatsApp clairs pour nos clients. Une vraie vitrine digitale pour une maison qui joue sur le détail et l'émotion.",
    stars: 5,
    avatar: 'MM',
    projectSlug: 'maison-mayssa',
  },
  {
    name: 'Hamza Djaffer',
    role: 'Water Plomberie — Artisan plombier & chauffagiste, Annecy',
    text: "Le site met en avant ce qui compte pour nous : urgence 24/7, devis transparent et prise de contact immédiate. Nos clients voient tout de suite nos services et notre zone d'intervention — ça change tout pour une entreprise de dépannage. Design pro, comme sur le terrain.",
    stars: 5,
    avatar: 'HD',
    projectSlug: 'water-plomberie',
  },
  {
    name: 'Souhad Ayouaz',
    role: 'Dys-ponible — Soutien scolaire DYS, TSA, TDA/H',
    text: "Le site reflète exactement notre approche : clair, rassurant et accessible. Les familles comprennent immédiatement notre spécialisation et savent comment nous contacter. C'est essentiel pour une offre aussi personnalisée que la nôtre.",
    stars: 5,
    avatar: 'SA',
    projectSlug: 'dys-ponible',
  },
  {
    name: 'LALBICUT',
    role: 'Barbier — Bonneville, Haute-Savoie',
    text: "Notre identité barber est enfin visible en ligne : offre claire, design premium et prise de rendez-vous simplifiée. Les clients locaux nous trouvent facilement et comprennent nos services dès la première visite.",
    stars: 5,
    avatar: 'LB',
    projectSlug: 'lalbicut',
  },
];

export function getTestimonialForProject(slug: string): Testimonial | undefined {
  return testimonials.find(t => t.projectSlug === slug);
}
