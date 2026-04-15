import { USE_THEME_ACCENT } from '@/constants/colors';
import type { ServiceDetail } from '@/types';

/** Couleur d’accent d’un service (sentinelle → accent du thème). */
export function serviceAccentColor(service: ServiceDetail, themeAccent: string): string {
  return service.color === USE_THEME_ACCENT ? themeAccent : service.color;
}
