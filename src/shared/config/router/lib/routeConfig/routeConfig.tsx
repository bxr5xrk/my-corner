import { Layout } from 'app/layout';
import { HomePage } from 'pages/HomePage';
import { MePage } from 'pages/MePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const AppRoutes = {
  ROOT: 'root',
  HOME: 'home',
  ME: 'me',
  NOT_FOUND: 'not_found'
} as const;

type RoutePath = (typeof AppRoutes)[keyof typeof AppRoutes];

export const RoutePath: Record<RoutePath, string> = {
  [AppRoutes.ROOT]: '/',
  [AppRoutes.HOME]: '',
  [AppRoutes.ME]: '/me',
  [AppRoutes.NOT_FOUND]: '*'
} as const;

const routeConfig: Record<RoutePath, RouteObject> = {
  [AppRoutes.ROOT]: {
    path: RoutePath.root,
    element: <Layout />
  },
  [AppRoutes.ME]: {
    path: RoutePath.me,
    element: <MePage />
  },
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
} as const;

const returnRoutes = (): RouteObject => {
  const { root, home, me, not_found } = routeConfig;

  return {
    path: root.path,
    element: root.element,
    children: [
      {
        path: home.path,
        element: home.element
      },
      {
        path: me.path,
        element: me.element
      },
      {
        path: not_found.path,
        element: not_found.element
      }
    ]
  };
};

export const router = createBrowserRouter([returnRoutes()]);
