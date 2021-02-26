import { useContext } from 'react';

import { ThemeContext } from '@contexts/theme';

export const useAppTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(`useAppTheme must be used within an AppThemeProvider`);
  }

  return context;
};
