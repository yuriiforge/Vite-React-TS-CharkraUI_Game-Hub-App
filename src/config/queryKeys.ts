export const queryKeys = {
  genres: ['genres'],
  platforms: ['platforms'],
  games: (filters?: unknown) => ['games', filters],
  trailers: ['trailers'],
  screenshots: ['screenshots'],
};
