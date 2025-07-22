import type { RoutePath } from '@/routes';
import apiClient from '@/services/api-client';
import type { ApiResponse } from '@/types/apiResponse';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useData = <T>(endpoint: RoutePath) => {
  const [data, setData] = useState<T[] | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get<ApiResponse<T>>(endpoint);
        setData(response.data.results);
        setError('');
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          setError('Error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, isLoading };
};
