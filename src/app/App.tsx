import { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { ThemeProvider, useTheme } from 'app/providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import { MePage } from 'pages/MePage';
import { cl } from 'shared/lib/cl';

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
