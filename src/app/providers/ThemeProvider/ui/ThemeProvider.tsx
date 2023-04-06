import { ReactNode, useMemo, useState } from 'react';
import {
  LS_THEME_KEY,
  Theme,
  ThemeContext,
  ThemeType,
} from '../lib/ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

const themeFromLS =
  (localStorage.getItem(LS_THEME_KEY) as ThemeType) || Theme.light;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(themeFromLS);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
