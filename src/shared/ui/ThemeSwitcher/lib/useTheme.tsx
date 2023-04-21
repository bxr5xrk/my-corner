import { useContext } from 'react';
import { LS_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === 'dark-theme' ? Theme.light : Theme.dark;
    localStorage.setItem(LS_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return {
    theme,
    toggleTheme
  };
};
