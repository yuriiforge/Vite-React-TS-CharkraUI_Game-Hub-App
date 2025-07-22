import { routes } from '@/routes';
import type { Game } from '@/types/games';
import { useData } from './useData';

export const useGames = () => useData<Game>(routes.games);
