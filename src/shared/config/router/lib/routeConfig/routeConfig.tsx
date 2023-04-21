import { Layout } from 'pages/LayoutPage/LayoutPage';
import { MainPage } from 'pages/MainPage';
import { MePage } from 'pages/MePage';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const AppRoutes = {
  ROOT: 'root',
  MAIN: 'main',
  ME: 'me'
} as const;

type RoutePath = (typeof AppRoutes)[keyof typeof AppRoutes];

export const RoutePath: Record<RoutePath, string> = {
  [AppRoutes.ROOT]: '/',
  [AppRoutes.MAIN]: '',
  [AppRoutes.ME]: '/me'
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
  }
} as const;

const returnRoutes = (): RouteObject => {
  const { root, main, me } = routeConfig;

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
      }
    ]
  };
};

export const router = createBrowserRouter([returnRoutes()]);
