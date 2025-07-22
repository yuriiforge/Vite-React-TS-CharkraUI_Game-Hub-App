export type GamesResponse = {
  count: number;
  results: Game[];
  next: string;
  previous: string;
};

export type Game = {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Record<string, unknown>;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: Record<string, unknown>;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
  } | null;
  platforms: {
    platform: Platform;
    released_at?: string;
    requirements?: {
      minimum?: string;
      recommended?: string;
    };
  }[];
};

export type Platform = {
  id: number;
  name: string;
  slug: string;
};
