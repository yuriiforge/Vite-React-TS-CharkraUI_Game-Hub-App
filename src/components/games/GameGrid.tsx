import { useEffect, useState } from 'react';
import apiClient from '@/services/api-client';
import { Text } from '@chakra-ui/react';
import { type Game, type GameResponse } from '@/types/games';
import { routes } from '@/routes';

const GameGrid = () => {
  const [games, setGames] = useState<Game[] | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await apiClient.get<GameResponse>(routes.games);
        const data = response.data;
        setGames(data.results);
      };
      fetchData();
    } catch (error) {
      setError('Error occured');
    }
  }, []);

  return (
    <>
      {error && <Text>Failed to fetch.</Text>}
      <ul>
        {games?.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
