export const AppRoutes = {
  ROOT: 'root',
  HOME: 'home',
  ME: 'me',
  NOT_FOUND: 'not_found'
} as const;

export type RoutePath = (typeof AppRoutes)[keyof typeof AppRoutes];

export const RoutePath: Record<RoutePath, string> = {
  [AppRoutes.ROOT]: '/',
  [AppRoutes.HOME]: '',
  [AppRoutes.ME]: '/me',
  [AppRoutes.NOT_FOUND]: '*'
} as const;
