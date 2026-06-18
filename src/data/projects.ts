import waterplomberieImg from '@/assets/waterplomberie.png';
import maisonMayssaVideo from '@/assets/maison-mayssa-video.mp4';
import dysponibleVideo from '@/assets/dys-ponible-video.mov';
import lalbicuttzVideo from '@/assets/lalbicuttz-video.mov';
import type { Project } from '@/types';

/** Réalisations affichées sur la landing — compléter au fil de l'eau. */
export const projects: Project[] = [
  {
    name: 'WaterPlomberie',
    type: 'Site Business',
    gradient: 'linear-gradient(135deg, #1a4a6e 0%, #0d2840 100%)',
    emoji: '🔧',
    image: waterplomberieImg,
    url: 'https://www.waterplomberie.pro/',
  },
  {
    name: 'Maison Mayssa',
    type: 'Site e-commerce',
    gradient: 'linear-gradient(135deg, #3d2b1f 0%, #2d1e14 100%)',
    emoji: '🍰',
    video: maisonMayssaVideo,
    url: 'https://www.maison-mayssa.fr/',
  },
  {
    name: 'Dys-ponible',
    type: 'Site Vitrine',
    gradient: 'linear-gradient(135deg, #3d5a4c 0%, #1e2d26 100%)',
    emoji: '📚',
    video: dysponibleVideo,
    url: 'https://www.dys-ponible.fr/',
  },
  {
    name: 'Lalbicuttz',
    type: 'Réservation Barber',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    emoji: '✂️',
    video: lalbicuttzVideo,
    url: 'https://www.lalbicuttz.fr/',
  },
];

