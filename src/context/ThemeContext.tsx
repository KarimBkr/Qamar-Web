import React, { useMemo } from 'react';
import { THEME_DARK } from '@/constants/colors';
import { ThemeContext } from '@/context/theme-context';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = useMemo(
    () => ({
      mode: 'dark' as const,
      setMode: () => {},
      toggleTheme: () => {},
      tokens: THEME_DARK,
    }),
    []
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
