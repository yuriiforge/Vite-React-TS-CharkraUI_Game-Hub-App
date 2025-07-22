import { routes } from '@/routes';
import apiClient from '@/services/api-client';
import type { Game, GamesResponse } from '@/types/games';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGames = () => {
  const [games, setGames] = useState<Game[] | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await apiClient.get<GamesResponse>(routes.games);
        const data = response.data;
        console.log(data.results);
        setGames(data.results);
      };
      fetchData();
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
      } else {
        setError('Error occurred');
      }
    }
  }, []);

  return { games, error };
};
