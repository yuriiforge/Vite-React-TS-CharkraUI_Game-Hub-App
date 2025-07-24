export const routes = {
  base: '/',
  games: '/games',
  gamesSlug: '/games/:slug',
  genres: '/genres',
  platforms: '/platforms/lists/parents',
  trailers: '/games/:id/movies',
  screenshots: '/games/:id/screenshots',
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];
