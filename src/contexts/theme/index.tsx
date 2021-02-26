import {
  useMemo,
  useState,
  useEffect,
  useCallback,
  createContext,
} from 'react';

import { ThemeProvider } from 'styled-components';

import { PropsWithRequiredChildren } from '@common/types';
import { GlobalStyles, theme } from '@styles';
import { composeStorageKey } from '@utils';

export type ThemeModes = 'light' | 'dark';

export type AppThemeContext = {
  currentTheme: ThemeModes;
  toggleTheme(): void;
};

export const ThemeContext = createContext<AppThemeContext | null>(null);

export const AppThemeProvider = ({ children }: PropsWithRequiredChildren) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeModes>(() => {
    const storedTheme = localStorage.getItem(
      composeStorageKey('theme'),
    ) as ThemeModes;

    if (storedTheme) {
      return JSON.parse(storedTheme);
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // eslint-disable-next-line no-console
      console.log('Dark Theme enabled by the system preferences');
      return 'dark';
    }

    return 'light';
  });

  const toggleTheme = useCallback(
    () =>
      setCurrentTheme((prevTheme) => {
        const newTheme = prevTheme === 'light' ? 'dark' : 'light';

        localStorage.setItem(
          composeStorageKey('theme'),
          JSON.stringify(newTheme),
        );
        return newTheme;
      }),
    [],
  );

  const value = useMemo(
    () => ({
      currentTheme,
      toggleTheme,
    }),
    [currentTheme, toggleTheme],
  );

  useEffect(() => {
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const systemColorScheme: ThemeModes = e.matches ? 'dark' : 'light';

      setCurrentTheme(systemColorScheme);
    };

    const matchMediaPrefDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );

    matchMediaPrefDark?.addEventListener('change', handleSystemThemeChange);

    return () => {
      matchMediaPrefDark?.removeEventListener(
        'change',
        handleSystemThemeChange,
      );
    };
  }, []);

  useEffect(() => {
    document.body.dataset.theme = currentTheme;

    localStorage.setItem(
      composeStorageKey('theme'),
      JSON.stringify(currentTheme),
    );
  }, [currentTheme]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
      <GlobalStyles />
    </ThemeProvider>
  );
};
