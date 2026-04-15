import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Fusion de classes Tailwind (alias shadcn / components.json). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
