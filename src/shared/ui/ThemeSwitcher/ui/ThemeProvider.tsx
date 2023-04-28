import { ReactNode, useEffect, useMemo, useState } from 'react';
import {
  LS_THEME_KEY,
  Theme,
  ThemeContext,
  ThemeType
} from '../lib/ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: ThemeType;
}

const themeFromLS =
  (localStorage.getItem(LS_THEME_KEY) as ThemeType) || Theme.light;

export const ThemeProvider = ({
  children,
  initialTheme
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(initialTheme ?? themeFromLS);

  useEffect(() => {
    document.body.className = theme;
  }, []);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
