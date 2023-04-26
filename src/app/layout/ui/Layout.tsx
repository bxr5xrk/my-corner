import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { cl } from 'shared/lib/cl/cl';
import { useTheme } from 'shared/ui/ThemeSwitcher';
import { Navbar } from 'widgets/Navbar';

export const Layout = () => {
  const { theme } = useTheme();

  return (
    <div
      className={cl(
        'grid h-screen w-screen grid-rows-autoFr space-y-5 overflow-y-auto bg-secondary-50 text-secondary-900',
        theme
      )}
    >
      <Navbar />

      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
