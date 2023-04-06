import { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { ThemeProvider, useTheme } from 'theme/ThemeContext';
const MainPage = lazy(() => import('pages/MainPage'));
const MePage = lazy(() => import('pages/MePage'));

const cl = (
  ...classes: Array<string | undefined | boolean | null | Record<string, any>>
): string =>
  classes
    .map((i) =>
      !i
        ? ''
        : typeof i === 'string'
        ? i
        : typeof i === 'object' && !!Object.values(i)[0]
        ? Object.keys(i)[0]
        : ''
    )
    .filter(Boolean)
    .join(' ');

export default function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

const Layout = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cl(theme, 'bg-bg-color text-default min-h-screen')}>
      <div className="flex justify-between border p-3">
        <Link to="/">Root</Link>

        <Link to="/me">Me</Link>

        <button onClick={toggleTheme}>Theme</button>
      </div>

      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'me',
        element: <MePage />,
      },
    ],
  },
]);
