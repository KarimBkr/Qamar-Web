import type { LucideIcon } from 'lucide-react';

// ─── Service ─────────────────────────────────────────────────────────────────

export interface CaseStudy {
  name: string;
  result: string;
  emoji: string;
}

export interface ServiceDetail {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  tagline: string;
  longDesc: string;
  features: string[];
  deliverables: string[];
  stack: string[];
  caseStudy: CaseStudy;
}

// ─── Project ─────────────────────────────────────────────────────────────────

export interface Project {
  name: string;
  type: string;
  gradient: string;
  emoji: string;
  /** URL d'une image de preview (screenshot du site) */
  image?: string;
  /** Lien vers le site en production */
  url?: string;
}

// ─── Pricing ─────────────────────────────────────────────────────────────────

export interface Plan {
  name: string;
  price: string;
  badge: string | null;
  badgeColor: string | null;
  accentColor: string;
  features: string[];
  bonus: string;
  cta: string;
}

export interface Upsell {
  icon: LucideIcon;
  title: string;
  price: string;
  desc: string;
}

// ─── Process ─────────────────────────────────────────────────────────────────

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

// ─── Testimonial ─────────────────────────────────────────────────────────────

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  stars: number;
  avatar: string;
}

// ─── Trust ───────────────────────────────────────────────────────────────────

export interface TrustStat {
  icon: LucideIcon;
  value: string;
  label: string;
}

// ─── Tech Stack ──────────────────────────────────────────────────────────────

export interface Tech {
  label: string;
  emoji: string;
}
