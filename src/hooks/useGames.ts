import { routes } from '@/routes';
import apiClient from '@/services/api-client';
import type { Game, GamesResponse } from '@/types/games';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGames = () => {
  const [games, setGames] = useState<Game[] | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get<GamesResponse>(routes.games);
        setGames(response.data.results);
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

  return { games, error, isLoading };
};
