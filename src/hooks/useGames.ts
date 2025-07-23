import { routes } from '@/routes';
import { type GamesResponse } from '@/types/games';
import type { GameQuery } from '@/App';
import { useQuery } from '@tanstack/react-query';
import apiClient from '@/services/api-client';

export const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ['games', gameQuery],
    queryFn: async () => {
      const response = await apiClient.get<GamesResponse>(routes.games, {
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      });

      return response.data;
    },
  });
