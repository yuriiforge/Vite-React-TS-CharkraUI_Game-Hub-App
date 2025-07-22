export const routes = {
  base: '/',
  games: '/games',
  genres: '/genres',
  platforms: '/platforms/lists/parents',
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];
