import type { Platform } from '@/types/games';
import { useData } from './useData';
import { routes } from '@/routes';

export const usePlatforms = () => useData<Platform>(routes.platforms);
