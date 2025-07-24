import { routes } from '@/routes';
import { apiClient } from '@/services/api-client';
import type { Game } from '@/types/games';
import { useQuery } from '@tanstack/react-query';

export const useGame = (slug: string) =>
  useQuery({
    queryKey: [routes.games, slug],
    queryFn: async () => apiClient.getOne<Game>(`${routes.games}/${slug}`),
  });
