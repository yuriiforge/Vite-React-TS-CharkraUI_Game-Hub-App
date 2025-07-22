import { routes } from '@/routes';
import type { Game } from '@/types/games';
import { useData } from './useData';
import type { GameQuery } from '@/App';

export const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    routes.games,
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );
