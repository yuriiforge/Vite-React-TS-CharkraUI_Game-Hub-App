import { routes } from '@/routes';
import type { Genre } from '@/types/genres';
import { useData } from './useData';

export const useGenres = () => useData<Genre>(routes.genres);
