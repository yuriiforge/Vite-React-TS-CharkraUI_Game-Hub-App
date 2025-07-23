import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/services/api-client';
import { routes } from '@/routes';
import type { GenresResponse } from '@/types/genres';
import genres from '@/data/genres';

export const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: async () => {
      return apiClient.getAll<GenresResponse>(routes.genres);
    },
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {
      count: genres.length,
      results: genres,
      next: '',
      previous: '',
    },
  });
