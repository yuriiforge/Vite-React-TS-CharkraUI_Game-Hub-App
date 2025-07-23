import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/services/api-client';
import { routes } from '@/routes';
import type { GenresResponse } from '@/types/genres';
import genres from '@/data/genres';
import { queryConfig } from '@/config/queryConfig';
import { queryKeys } from '@/config/queryKeys';

export const useGenres = () =>
  useQuery({
    queryKey: queryKeys.genres,
    queryFn: async () => {
      return apiClient.getAll<GenresResponse>(routes.genres);
    },
    staleTime: queryConfig.staleTime,
    initialData: {
      count: genres.length,
      results: genres,
      next: '',
      previous: '',
    },
  });
