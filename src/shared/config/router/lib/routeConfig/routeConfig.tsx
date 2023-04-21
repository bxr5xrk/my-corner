import { Layout } from 'pages/LayoutPage/LayoutPage';
import { MainPage } from 'pages/MainPage';
import { MePage } from 'pages/MePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const AppRoutes = {
  ROOT: 'root',
  MAIN: 'main',
  ME: 'me',
  NOT_FOUND: 'not_found'
} as const;

type RoutePath = (typeof AppRoutes)[keyof typeof AppRoutes];

export const RoutePath: Record<RoutePath, string> = {
  [AppRoutes.ROOT]: '/',
  [AppRoutes.MAIN]: '',
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
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
} as const;

const returnRoutes = (): RouteObject => {
  const { root, main, me, not_found } = routeConfig;

  return {
    path: root.path,
    element: root.element,
    children: [
      {
        path: main.path,
        element: main.element
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
