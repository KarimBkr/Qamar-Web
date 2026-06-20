import type { CSSProperties } from 'react';

/** Remplace par `tokens.accent` à l'affichage (services / drawer). */
export const USE_THEME_ACCENT = '__USE_THEME_ACCENT__';

const ACCENT = '#C9882A';
const CANVAS = '#0a0a0b';
const SURFACE = '#111112';
const INK = '#f4f1ea';

function buildTheme() {
  return {
    canvas: CANVAS,
    surface: SURFACE,
    ink: INK,
    muted: '#888480',
    accent: ACCENT,
    onAccent: INK,
    borderSubtle: 'rgba(244,241,234,0.06)',
    borderMedium: 'rgba(244,241,234,0.10)',
    borderStrong: 'rgba(244,241,234,0.16)',
    fillSubtle: 'rgba(244,241,234,0.04)',
    fillMuted: 'rgba(244,241,234,0.06)',
    fillInput: 'rgba(244,241,234,0.04)',
    accentSoft: 'rgba(201,136,42,0.12)',
    accentBorder: 'rgba(201,136,42,0.25)',
    accentBorderStrong: 'rgba(201,136,42,0.40)',
    accentGlow: 'rgba(201,136,42,0.32)',
    accentShadow: 'rgba(201,136,42,0.18)',
    radialMuted: 'rgba(244,241,234,0.03)',
    radialAccent: 'rgba(201,136,42,0.05)',
    navSolid: 'rgba(10,10,11,0.90)',
    navBorder: 'rgba(244,241,234,0.07)',
    navMobileBg: 'rgba(10,10,11,0.98)',
    glassBackground: 'rgba(17,17,18,0.82)',
    glassBorder: 'rgba(244,241,234,0.08)',
    overlayScrim: 'rgba(0,0,0,0.70)',
    overlayDrawer: 'rgba(0,0,0,0.55)',
    drawerPanel: `linear-gradient(160deg, ${SURFACE} 0%, ${CANVAS} 100%)`,
    drawerHeader: 'rgba(10,10,11,0.95)',
    drawerShadow: '-40px 0 120px rgba(0,0,0,0.6)',
    drawerCloseBg: 'rgba(244,241,234,0.06)',
    drawerListBg: 'rgba(244,241,234,0.04)',
    drawerListBorder: 'rgba(244,241,234,0.06)',
    drawerTagBg: 'rgba(17,17,18,0.8)',
    drawerTagBorder: 'rgba(244,241,234,0.10)',
    shadowSm: '0 8px 24px rgba(0,0,0,0.35)',
    shadowMd: '0 12px 40px rgba(0,0,0,0.45)',
    shadowLg: '0 24px 80px rgba(0,0,0,0.55)',
    shadowHeroCard: '0 32px 80px rgba(0,0,0,0.65)',
    success: '#34d399',
    danger: '#ef4444',
    textOnImage: INK,
    textOnImageMuted: 'rgba(244,241,234,0.70)',
    textOnImageFaint: 'rgba(244,241,234,0.45)',
    textSecondary: 'rgba(244,241,234,0.52)',
    textTertiary: 'rgba(244,241,234,0.32)',
    textLabel: 'rgba(244,241,234,0.68)',
    textDisabled: 'rgba(244,241,234,0.22)',
    footerLegal: 'rgba(244,241,234,0.32)',
    browserChrome: 'rgba(244,241,234,0.06)',
    browserUrlText: 'rgba(244,241,234,0.38)',
    gradientHero: `linear-gradient(135deg, ${CANVAS} 0%, ${SURFACE} 100%)`,
    blobCool: 'rgba(201,136,42,0.07)',
    blobWarm: 'rgba(201,136,42,0.04)',
    toneSuccess: '#34d399',
    toneViolet: '#a78bfa',
    projectChipBg: 'rgba(201,136,42,0.14)',
    projectNavInactive: 'rgba(244,241,234,0.22)',
    projectPanelBg: 'rgba(17,17,18,0.82)',
    testimonialQuote: 'rgba(244,241,234,0.82)',
    processLine: 'rgba(201,136,42,0.22)',
    inputBorderBlur: 'rgba(244,241,234,0.10)',
    featuredPlanBg: 'linear-gradient(135deg, rgba(201,136,42,0.10), rgba(17,17,18,0.50))',
    planUpsellBg: 'rgba(17,17,18,0.55)',
    calendlyEmbedParams: 'background_color=0a0a0b&text_color=f4f1ea&primary_color=c9882a',
  };
}

export const THEME_DARK = buildTheme();
export const THEME_LIGHT = THEME_DARK;

export type ThemeTokens = typeof THEME_DARK;

export function getGlassStyle(t: ThemeTokens): CSSProperties {
  return {
    background: t.glassBackground,
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: `1px solid ${t.glassBorder}`,
  };
}
