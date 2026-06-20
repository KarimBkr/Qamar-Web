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

export interface ProjectCaseStudy {
  context: string;
  objectives: string[];
  highlights: string[];
  stack: string[];
  valueProposition: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  name: string;
  type: string;
  gradient: string;
  emoji: string;
  image?: string;
  video?: string;
  /** Images supplémentaires pour le carrousel modal */
  gallery?: string[];
  url?: string;
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  tags: string[];
  location?: string;
  featured?: boolean;
  /** Chiffres clés affichés en haut de l'étude de cas */
  metrics: ProjectMetric[];
  caseStudy: ProjectCaseStudy;
}

// ─── Pricing ─────────────────────────────────────────────────────────────────

export interface Plan {
  name: string;
  description: string;
  price: string;
  delivery: string;
  badge: string | null;
  badgeColor: string | null;
  accentColor: string;
  features: string[];
  bonus: string;
  cta: string;
}

export interface Upsell {
  icon?: LucideIcon;
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
  /** Lien vers le slug projet (étude de cas) */
  projectSlug?: string;
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
