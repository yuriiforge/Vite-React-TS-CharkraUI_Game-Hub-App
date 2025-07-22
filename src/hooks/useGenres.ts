import { routes } from '@/routes';
import apiClient from '@/services/api-client';
import type { Genre, GenresResponse } from '@/types/genres';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGenres = () => {
  const [genres, setGenres] = useState<Genre[] | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get<GenresResponse>(routes.genres);
        setGenres(response.data.results);
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

  return { genres, error, isLoading };
};
