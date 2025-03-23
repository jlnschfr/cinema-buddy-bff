export interface Movie {
  title: string;
  releaseDate: string;
  vote: string;
  imageSrc: string;
}

export interface RecommendationResponse {
  movies: Movie[];
  page: number;
  totalPages: number;
  totalResults: number;
}

export type MovieDbResponse = {
  page: number;
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
  total_pages: number;
  total_results: number;
};