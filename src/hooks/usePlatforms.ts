import type { Platform } from '@/types/games';
import { routes } from '@/routes';
import { useQuery } from '@tanstack/react-query';
import apiClient from '@/services/api-client';
import type { ApiResponse } from '@/types/apiResponse';

export const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: async () => {
      const response = await apiClient.get<ApiResponse<Platform>>(
        routes.platforms
      );
      return response.data;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });
