export type GenresResponse = {
  count: number;
  next: string;
  previous: string;
  results: Genre[];
};

export type Genre = {
  id: number;
  name: string;
  slug: string;
  games_count: string;
  image_background: string;
};
