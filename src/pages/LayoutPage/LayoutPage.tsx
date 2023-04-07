import { RoutePath } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { cl } from 'shared/lib/cl';

export const Layout = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cl(theme, 'bg-bg-color text-default min-h-screen')}>
      <div className="flex justify-between border p-3">
        <Link to={RoutePath.main}>Root</Link>

        <Link to={RoutePath.me}>Me</Link>

        <button onClick={toggleTheme}>Theme</button>
      </div>

      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
