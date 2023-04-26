/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cl } from 'shared/lib/cl';
import { ThemeType } from 'shared/ui/ThemeSwitcher/lib/ThemeContext';

const ThemeDecorator = (theme: ThemeType) => (Story: any) => {
  return (
    <div className={cl('bg-secondary-50 text-secondary-900', theme)}>
      <Story />
    </div>
  );
};

export default ThemeDecorator;
