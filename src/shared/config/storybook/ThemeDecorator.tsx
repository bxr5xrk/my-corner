/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cl } from 'shared/lib/cl';
import { ThemeProvider } from 'shared/ui/ThemeSwitcher';
import { ThemeType } from 'shared/ui/ThemeSwitcher/lib/ThemeContext';

const ThemeDecorator = (theme: ThemeType) => (Story: any) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={cl(theme, 'bg-secondary-50 p-5 text-secondary-900')}>
        <Story />
      </div>
    </ThemeProvider>
  );
};

export default ThemeDecorator;
