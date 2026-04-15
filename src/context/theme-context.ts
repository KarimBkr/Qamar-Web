import { createContext } from 'react';
import type { ThemeTokens } from '@/constants/colors';

export type ThemeMode = 'light' | 'dark';

export type ThemeContextValue = {
  mode: ThemeMode;
  setMode: (m: ThemeMode) => void;
  toggleTheme: () => void;
  tokens: ThemeTokens;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);
