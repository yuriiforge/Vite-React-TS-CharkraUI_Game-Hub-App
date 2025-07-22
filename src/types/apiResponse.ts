export type ApiResponse<T> = {
  count: number;
  results: T[];
  next: string;
  previous: string;
};
