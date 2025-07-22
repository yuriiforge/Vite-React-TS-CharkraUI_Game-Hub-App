import type { ApiResponse } from './apiResponse';

export type GenresResponse = ApiResponse<Genre>;

export type Genre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};
