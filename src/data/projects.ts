import maisonMayssaImg from '@/assets/maison-mayssa.png';
import waterplomberieImg from '@/assets/waterplomberie.png';
import type { Project } from '@/types';

/** Réalisations affichées sur la landing — compléter au fil de l'eau. */
export const projects: Project[] = [
  {
    name: 'WaterPlomberie',
    type: 'Site Business',
    gradient: 'linear-gradient(135deg, #1a4a6e 0%, #0d2840 100%)',
    emoji: '\uD83D\uDD27',
    image: waterplomberieImg,
    url: 'https://www.waterplomberie.pro/',
  },
  {
    name: 'Maison Mayssa',
    type: 'Site e-commerce',
    gradient: 'linear-gradient(135deg, #3d2b1f 0%, #2d1e14 100%)',
    emoji: '\uD83C\uDF70',
    image: maisonMayssaImg,
    url: 'https://www.maison-mayssa.fr/',
  },
];
