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
        'w-screen h-screen min-h-screen bg-secondary-50 text-secondary-900 overflow-y-auto',
        theme
      )}
    >
      <div className="space-y-2 h-full flex flex-col mx-auto max-w-7xl">
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
