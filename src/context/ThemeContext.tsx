import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { THEME_DARK, THEME_LIGHT, type ThemeTokens } from '@/constants/colors';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'qamar-theme';

type ThemeContextValue = {
  mode: ThemeMode;
  setMode: (m: ThemeMode) => void;
  toggleTheme: () => void;
  tokens: ThemeTokens;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readInitialMode(): ThemeMode {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s === 'light' || s === 'dark') return s;
  } catch {
    /* ignore */
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ThemeMode>(() => readInitialMode());

  const setMode = useCallback((m: ThemeMode) => {
    setModeState(m);
  }, []);

  const toggleTheme = useCallback(() => {
    setModeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* ignore */
    }
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  const tokens = mode === 'dark' ? THEME_DARK : THEME_LIGHT;

  const value = useMemo(
    () => ({ mode, setMode, toggleTheme, tokens }),
    [mode, setMode, toggleTheme, tokens],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme doit être utilisé dans un ThemeProvider');
  }
  return ctx;
}
