import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { cl } from 'shared/lib/cl';
import { useTheme } from 'shared/ui/ThemeSwitcher';
import { Navbar } from 'widgets/Navbar';

export const Layout = () => {
  const { theme } = useTheme();

  return (
    <div className={cl(theme, 'bg-bg-color text-default min-h-screen')}>
      <Navbar />

      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
