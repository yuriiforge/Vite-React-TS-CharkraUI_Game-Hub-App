import { queryKeys } from '@/config/queryKeys';
import { routes } from '@/routes';
import { apiClient } from '@/services/api-client';
import type { ApiResponse } from '@/types/apiResponse';
import { type Trailer } from '@/types/trailer';
import { useQuery } from '@tanstack/react-query';
import { generatePath } from 'react-router';

export const useTrailers = (gameId: number) => {
  const url = generatePath(routes.trailers, { id: String(gameId) });

  return useQuery({
    queryKey: [queryKeys.trailers, gameId],
    queryFn: async () => apiClient.getAll<ApiResponse<Trailer>>(url),
  });
};
