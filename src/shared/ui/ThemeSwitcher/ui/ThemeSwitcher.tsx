import { useTheme } from '../lib/useTheme';
import Sun from '../../../assets/sun.svg';
import Moon from '../../../assets/moon.svg';
import { Button } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  isCollapsed: boolean;
}

export const ThemeSwitcher = ({ isCollapsed }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} className="flex items-center gap-5">
      {theme === 'dark-theme' ? (
        <Moon className="h-5 w-5 stroke-current" />
      ) : (
        <Sun className="h-5 w-5 stroke-current" />
      )}

      {!isCollapsed ? (
        <span>{theme === 'dark-theme' ? 'Dark' : 'Light'}</span>
      ) : null}
    </Button>
  );
};
