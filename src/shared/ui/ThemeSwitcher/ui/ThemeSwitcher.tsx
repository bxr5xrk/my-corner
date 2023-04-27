import { useTheme } from '../lib/useTheme';
import Sun from '../../../assets/sun.svg';
import Moon from '../../../assets/moon.svg';
import { Button } from 'shared/ui/Button/Button';
import { cl } from 'shared/lib/cl';

interface ThemeSwitcherProps {
  isCollapsed: boolean;
}

export const ThemeSwitcher = ({ isCollapsed }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} className="flex items-center gap-5">
      <span>
        {theme === 'dark-theme' ? (
          <Moon className="h-5 w-5 stroke-current" />
        ) : (
          <Sun className="h-5 w-5 stroke-current" />
        )}
      </span>

      <span
        className={cl(
          isCollapsed ? 'invisible opacity-0' : 'visible opacity-100',
          'transition-all duration-500'
        )}
      >
        {theme === 'dark-theme' ? 'Dark' : 'Light'}
      </span>
    </Button>
  );
};
