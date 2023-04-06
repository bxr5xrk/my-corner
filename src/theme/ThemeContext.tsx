import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

export const Theme = {
  light: 'light-theme',
  dark: 'dark-theme',
} as const;

type ThemeType = typeof Theme[keyof typeof Theme];

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (i?: ThemeType) => void;
}

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === 'dark-theme' ? Theme.light : Theme.dark;
    localStorage.setItem(LS_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.light,
  setTheme: () => ({}),
});

export const LS_THEME_KEY = 'theme';

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
