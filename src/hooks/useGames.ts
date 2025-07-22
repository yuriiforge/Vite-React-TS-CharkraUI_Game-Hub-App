import { routes } from '@/routes';
import type { Game } from '@/types/games';
import { useData } from './useData';
import type { Genre } from '@/types/genres';

export const useGames = (selectedGenre: Genre | null) =>
  useData<Game>(routes.games, { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
