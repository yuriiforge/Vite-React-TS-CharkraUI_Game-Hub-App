export const routes = {
  base: '/',
  games: '/games',
  genres: '/genres',
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];
