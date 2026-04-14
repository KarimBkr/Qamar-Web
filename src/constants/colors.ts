/**
 * Palette de couleurs centralisée — source de vérité unique.
 * Modifiez ici pour propager les changements dans toute l'app.
 */
export const COLORS = {
  white: '#ffffff',
  lightBlue: '#676f9d',
  midBlue: '#424769',
  darkBlue: '#2d3250',
  orange: '#f9b17a',
} as const;

export type ColorKey = keyof typeof COLORS;
