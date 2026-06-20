import { useEffect, useCallback } from 'react';
import { projects, getProjectBySlug } from '@/data/projects';
import type { Project } from '@/types';

const CASE_PARAM = 'case';

export function readCaseSlugFromUrl(): string | null {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get(CASE_PARAM);
  return slug && getProjectBySlug(slug) ? slug : null;
}

export function setCaseSlugInUrl(slug: string | null) {
  const url = new URL(window.location.href);
  if (slug) {
    url.searchParams.set(CASE_PARAM, slug);
    if (!url.hash) url.hash = 'projets';
  } else {
    url.searchParams.delete(CASE_PARAM);
  }
  window.history.replaceState({}, '', url.toString());
}

/** Sync ?case=slug avec l'état modal + ouverture au chargement. */
export function useProjectUrl(
  selectedProject: Project | null,
  onSelect: (project: Project | null) => void,
  enabled: boolean
) {
  const openProject = useCallback(
    (project: Project | null) => {
      onSelect(project);
      setCaseSlugInUrl(project?.slug ?? null);
    },
    [onSelect]
  );

  useEffect(() => {
    if (!enabled) return;
    const slug = readCaseSlugFromUrl();
    if (slug) {
      const p = getProjectBySlug(slug);
      if (p) {
        onSelect(p);
        requestAnimationFrame(() => {
          document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }
  }, [enabled, onSelect]);

  useEffect(() => {
    if (!enabled) return;
    const onPopState = () => {
      const slug = readCaseSlugFromUrl();
      onSelect(slug ? getProjectBySlug(slug) ?? null : null);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [enabled, onSelect]);

  return { openProject };
}

export function getAdjacentProject(slug: string, dir: -1 | 1): Project {
  const idx = projects.findIndex(p => p.slug === slug);
  const next = (idx + dir + projects.length) % projects.length;
  return projects[next];
}
