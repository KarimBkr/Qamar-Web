import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { THEME_DARK, THEME_LIGHT } from '@/constants/colors';
import { ThemeContext, type ThemeMode } from '@/context/theme-context';

const STORAGE_KEY = 'qamar-theme';

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
    setModeState(prev => (prev === 'light' ? 'dark' : 'light'));
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
    [mode, setMode, toggleTheme, tokens]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
