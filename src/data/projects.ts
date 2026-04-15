import maisonMayssaImg from '@/assets/maison-mayssa.png';
import waterplomberieImg from '@/assets/waterplomberie.png';
import type { Project } from '@/types';

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
    image: maisonMayssaImg,
    url: 'https://www.maison-mayssa.fr/',
  },
  {
    name: 'ShopElite',
    type: 'E-commerce',
    gradient: 'linear-gradient(135deg, #424769 0%, #2d3250 100%)',
    emoji: '🛍️',
  },
  {
    name: 'MedDash',
    type: 'SaaS / Dashboard',
    gradient: 'linear-gradient(135deg, #3d4a7a 0%, #2d3250 100%)',
    emoji: '🏥',
  },
  {
    name: 'PropVision',
    type: 'Site business',
    gradient: 'linear-gradient(135deg, #5c4a6e 0%, #2d3250 100%)',
    emoji: '🏡',
  },
  {
    name: 'FinTrack',
    type: 'Application web',
    gradient: 'linear-gradient(135deg, #2d5250 0%, #2d3250 100%)',
    emoji: '📊',
  },
  {
    name: 'EduFlow',
    type: 'Plateforme SaaS',
    gradient: 'linear-gradient(135deg, #4a3d6e 0%, #2d3250 100%)',
    emoji: '🎓',
  },
  {
    name: 'FoodRush',
    type: 'App mobile',
    gradient: 'linear-gradient(135deg, #6e3d4a 0%, #2d3250 100%)',
    emoji: '🍔',
  },
];
