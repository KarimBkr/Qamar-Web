/**
 * Navigation par ancres : compatible avec body en overflow:hidden (menu mobile).
 */

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export function scrollToSectionId(sectionId: string): void {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start',
    });
  }
  window.history.replaceState(null, '', `#${sectionId}`);
}

/** Laisse le temps au DOM de retirer overflow:hidden avant de défiler. */
export function scheduleScrollToSectionId(sectionId: string, delayMs = 50): void {
  window.setTimeout(() => scrollToSectionId(sectionId), delayMs);
}
