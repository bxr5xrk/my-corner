import { useTheme } from '../lib/useTheme';
import Sun from '../../../assets/sun.svg';
import Moon from '../../../assets/moon.svg';
import { Button } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {}

export const ThemeSwitcher = ({}: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {theme === 'dark-theme' ? (
        <Moon className="w-5 h-5 stroke-current" />
      ) : (
        <Sun className="w-5 h-5 stroke-current" />
      )}
    </Button>
  );
};
