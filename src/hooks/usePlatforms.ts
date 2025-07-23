import type { Platform } from '@/types/games';
import { routes } from '@/routes';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/services/api-client';
import { type ApiResponse } from '@/types/apiResponse';
import { queryConfig } from '@/config/queryConfig';
import { queryKeys } from '@/config/queryKeys';

export const usePlatforms = () =>
  useQuery({
    queryKey: queryKeys.platforms,
    queryFn: async () => {
      return apiClient.getAll<ApiResponse<Platform>>(routes.platforms);
    },
    staleTime: queryConfig.staleTime,
  });
