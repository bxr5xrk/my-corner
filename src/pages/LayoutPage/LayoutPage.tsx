import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { cl } from 'shared/lib/cl';
import { useTheme } from 'shared/ui/ThemeSwitcher';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const Layout = () => {
  const { theme } = useTheme();

  return (
    <div
      className={cl(
        'h-screen min-h-screen w-screen overflow-y-auto bg-secondary-50 text-secondary-900',
        theme
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col space-y-2">
        <Navbar />

        <div className="flex h-full w-full gap-10">
          <Sidebar />

          {/* <main className="w-full h-full"> */}
          <Suspense fallback={<>Loading...</>}>
            <Outlet />
          </Suspense>
          {/* </main> */}
        </div>
      </div>
    </div>
  );
};