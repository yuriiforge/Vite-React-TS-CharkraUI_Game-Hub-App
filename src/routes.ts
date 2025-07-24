export const routes = {
  base: '/',
  games: '/games',
  gamesId: '/games/:id',
  genres: '/genres',
  platforms: '/platforms/lists/parents',
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];
