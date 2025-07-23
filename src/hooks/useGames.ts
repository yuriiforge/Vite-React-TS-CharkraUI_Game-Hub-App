import { routes } from '@/routes';
import type { GameQuery } from '@/App';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/services/api-client';
import { type GamesResponse } from '@/types/games';

export const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ['games', gameQuery],
    queryFn: async () => {
      return apiClient.getAll<GamesResponse>(routes.games, {
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      });
    },
  });
