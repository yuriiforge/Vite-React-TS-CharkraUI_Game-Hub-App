export const routes = {
  base: '/',
  games: '/games',
  gamesSlug: '/games/:slug',
  genres: '/genres',
  platforms: '/platforms/lists/parents',
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];
