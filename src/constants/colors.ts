import type { CSSProperties } from 'react';

type RGB = { r: number; g: number; b: number };

function toRgb(hex: string): RGB {
  const h = hex.replace('#', '');
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function rgba(rgb: RGB, a: number): string {
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${a})`;
}

const white: RGB = { r: 255, g: 255, b: 255 };

/** Remplace par `tokens.accent` à l’affichage (services / drawer). */
export const USE_THEME_ACCENT = '__USE_THEME_ACCENT__';

function buildLightTheme() {
  const base = {
    canvas: '#F5F5F7',
    surface: '#FFFFFF',
    ink: '#1D1D1F',
    muted: '#86868B',
    accent: '#007AFF',
  } as const;
  const ink = toRgb(base.ink);
  const accent = toRgb(base.accent);

  return {
    ...base,
    onAccent: '#FFFFFF',
    borderSubtle: rgba(ink, 0.08),
    borderMedium: rgba(ink, 0.12),
    borderStrong: rgba(ink, 0.18),
    fillSubtle: rgba(ink, 0.04),
    fillMuted: rgba(ink, 0.06),
    fillInput: rgba(ink, 0.03),
    accentSoft: rgba(accent, 0.12),
    accentBorder: rgba(accent, 0.22),
    accentBorderStrong: rgba(accent, 0.35),
    accentGlow: rgba(accent, 0.3),
    accentShadow: rgba(accent, 0.25),
    radialMuted: rgba(ink, 0.06),
    radialAccent: rgba(accent, 0.07),
    navSolid: rgba(white, 0.86),
    navBorder: rgba(ink, 0.08),
    navMobileBg: rgba(white, 0.98),
    glassBackground: rgba(white, 0.82),
    glassBorder: rgba(ink, 0.1),
    overlayScrim: rgba(ink, 0.35),
    overlayDrawer: rgba(ink, 0.25),
    drawerPanel: `linear-gradient(165deg, ${base.surface} 0%, ${base.canvas} 100%)`,
    drawerHeader: rgba(white, 0.92),
    drawerShadow: `-24px 0 80px ${rgba(ink, 0.12)}`,
    drawerCloseBg: rgba(ink, 0.06),
    drawerListBg: rgba(ink, 0.04),
    drawerListBorder: rgba(ink, 0.08),
    drawerTagBg: rgba(ink, 0.06),
    drawerTagBorder: rgba(ink, 0.12),
    shadowSm: `0 8px 24px ${rgba(ink, 0.06)}`,
    shadowMd: `0 16px 48px ${rgba(ink, 0.08)}`,
    shadowLg: `0 24px 80px ${rgba(ink, 0.1)}`,
    shadowHeroCard: `0 32px 80px ${rgba(ink, 0.12)}`,
    success: '#34C759',
    danger: '#FF3B30',
    textOnImage: '#FFFFFF',
    textOnImageMuted: rgba(white, 0.75),
    textOnImageFaint: rgba(white, 0.5),
    textSecondary: rgba(ink, 0.62),
    textTertiary: rgba(ink, 0.45),
    textLabel: rgba(ink, 0.55),
    textDisabled: rgba(ink, 0.35),
    footerLegal: rgba(ink, 0.45),
    browserChrome: rgba(ink, 0.06),
    browserUrlText: rgba(ink, 0.42),
    gradientHero: `linear-gradient(135deg, ${base.surface} 0%, ${base.canvas} 100%)`,
    blobCool: rgba(accent, 0.14),
    blobWarm: rgba(accent, 0.06),
    toneSuccess: '#34C759',
    toneViolet: '#AF52DE',
    projectChipBg: rgba(accent, 0.15),
    projectNavInactive: rgba(ink, 0.22),
    projectPanelBg: rgba(white, 0.92),
    testimonialQuote: rgba(ink, 0.82),
    processLine: rgba(accent, 0.2),
    inputBorderBlur: rgba(ink, 0.12),
    featuredPlanBg: `linear-gradient(135deg, ${rgba(accent, 0.08)}, ${rgba(ink, 0.03)})`,
    planUpsellBg: rgba(ink, 0.04),
    calendlyEmbedParams: 'background_color=f5f5f7&text_color=1d1d1f&primary_color=007aff',
  };
}

function buildDarkTheme() {
  const base = {
    canvas: '#2d3250',
    surface: '#424769',
    ink: '#ffffff',
    muted: '#676f9d',
    accent: '#f9b17a',
  } as const;
  const ink = toRgb(base.ink);
  const accent = toRgb(base.accent);
  const line = toRgb('#676f9d');
  const panel = toRgb('#424769');

  return {
    ...base,
    onAccent: '#2d3250',
    borderSubtle: rgba(line, 0.2),
    borderMedium: rgba(line, 0.25),
    borderStrong: rgba(line, 0.4),
    fillSubtle: rgba(panel, 0.4),
    fillMuted: rgba(toRgb('#2d3250'), 0.6),
    fillInput: rgba(toRgb('#2d3250'), 0.6),
    accentSoft: rgba(accent, 0.12),
    accentBorder: rgba(accent, 0.25),
    accentBorderStrong: rgba(accent, 0.35),
    accentGlow: rgba(accent, 0.4),
    accentShadow: rgba(accent, 0.2),
    radialMuted: rgba(line, 0.12),
    radialAccent: rgba(accent, 0.06),
    navSolid: 'rgba(45,50,80,0.92)',
    navBorder: rgba(line, 0.2),
    navMobileBg: 'rgba(45,50,80,0.98)',
    glassBackground: rgba(panel, 0.35),
    glassBorder: rgba(line, 0.25),
    overlayScrim: 'rgba(30,34,64,0.7)',
    overlayDrawer: 'rgba(30,34,64,0.7)',
    drawerPanel: 'linear-gradient(160deg, #2d3250 0%, #1e2240 100%)',
    drawerHeader: 'rgba(45,50,80,0.95)',
    drawerShadow: '-40px 0 120px rgba(0,0,0,0.5)',
    drawerCloseBg: rgba(line, 0.2),
    drawerListBg: rgba(panel, 0.3),
    drawerListBorder: rgba(line, 0.15),
    drawerTagBg: 'rgba(45,50,80,0.8)',
    drawerTagBorder: rgba(line, 0.3),
    shadowSm: '0 8px 24px rgba(0,0,0,0.2)',
    shadowMd: '0 12px 40px rgba(0,0,0,0.3)',
    shadowLg: '0 24px 80px rgba(0,0,0,0.3)',
    shadowHeroCard: '0 32px 80px rgba(0,0,0,0.4)',
    success: '#34d399',
    danger: '#ef4444',
    textOnImage: '#FFFFFF',
    textOnImageMuted: rgba(white, 0.75),
    textOnImageFaint: rgba(white, 0.5),
    textSecondary: rgba(line, 0.95),
    textTertiary: rgba(white, 0.4),
    textLabel: rgba(white, 0.8),
    textDisabled: rgba(line, 0.4),
    footerLegal: rgba(line, 0.55),
    browserChrome: rgba(line, 0.2),
    browserUrlText: rgba(white, 0.4),
    gradientHero: 'linear-gradient(135deg, #2d3250 0%, #1e2240 100%)',
    blobCool: rgba(line, 0.15),
    blobWarm: rgba(accent, 0.08),
    toneSuccess: '#34d399',
    toneViolet: '#a78bfa',
    projectChipBg: rgba(accent, 0.2),
    projectNavInactive: rgba(line, 0.4),
    projectPanelBg: 'rgba(45,50,80,0.75)',
    testimonialQuote: rgba(white, 0.85),
    processLine: rgba(accent, 0.25),
    inputBorderBlur: rgba(line, 0.3),
    featuredPlanBg: 'linear-gradient(135deg, rgba(249,177,122,0.15), rgba(66,71,105,0.4))',
    planUpsellBg: 'rgba(45,50,80,0.5)',
    calendlyEmbedParams: 'background_color=2d3250&text_color=ffffff&primary_color=f9b17a',
  };
}

export const THEME_LIGHT = buildLightTheme();
export const THEME_DARK = buildDarkTheme();

export type ThemeTokens = typeof THEME_LIGHT | typeof THEME_DARK;

/** @deprecated Utilisez `useTheme().tokens` ou `THEME_LIGHT` / `THEME_DARK`. */
export const THEME = THEME_LIGHT;
export const COLORS = THEME_LIGHT;

export type ThemeKey = keyof ThemeTokens;
export type ColorKey = keyof ThemeTokens;

export function getGlassStyle(t: ThemeTokens): CSSProperties {
  return {
    background: t.glassBackground,
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: `1px solid ${t.glassBorder}`,
  };
}

/** @deprecated Utilisez `getGlassStyle(tokens)`. */
export const glassStyle: CSSProperties = getGlassStyle(THEME_LIGHT);
