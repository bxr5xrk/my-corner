import { createContext } from 'react';

export const Theme = {
  light: 'light-theme',
  dark: 'dark-theme',
} as const;

export type ThemeType = typeof Theme[keyof typeof Theme];

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (i?: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.light,
  setTheme: () => ({}),
});

export const LS_THEME_KEY = 'theme';
