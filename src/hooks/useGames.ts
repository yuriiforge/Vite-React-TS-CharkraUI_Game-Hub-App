import { routes } from '@/routes';
import { useInfiniteQuery } from '@tanstack/react-query';
import { apiClient } from '@/services/api-client';
import { type GamesResponse } from '@/types/games';
import { queryConfig } from '@/config/queryConfig';
import { queryKeys } from '@/config/queryKeys';
import useGameQueryStore from '@/store';

export const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery({
    queryKey: queryKeys.games(gameQuery),
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      return apiClient.getAll<GamesResponse>(routes.games, {
        params: {
          genres: gameQuery.genreId,
          platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: queryConfig.staleTime,
  });
};
