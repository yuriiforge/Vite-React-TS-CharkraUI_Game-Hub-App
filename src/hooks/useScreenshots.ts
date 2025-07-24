import { queryKeys } from '@/config/queryKeys';
import { routes } from '@/routes';
import { apiClient } from '@/services/api-client';
import type { ApiResponse } from '@/types/apiResponse';
import type { Screenshot } from '@/types/screenshot';
import { useQuery } from '@tanstack/react-query';
import { generatePath } from 'react-router';

export const useScreenshots = (id: number) => {
  const url = generatePath(routes.screenshots, { id: String(id) });

  return useQuery({
    queryKey: [queryKeys.screenshots, id],
    queryFn: async () => apiClient.getAll<ApiResponse<Screenshot>>(url),
  });
};
