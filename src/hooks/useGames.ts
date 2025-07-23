import { routes } from '@/routes';
import type { GameQuery } from '@/App';
import { useInfiniteQuery } from '@tanstack/react-query';
import { apiClient } from '@/services/api-client';
import { type GamesResponse } from '@/types/games';

export const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery({
    queryKey: ['games', gameQuery],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      return apiClient.getAll<GamesResponse>(routes.games, {
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
