import { Movie, MovieDbResponse, RecommendationResponse } from "./recommendations";

export class RecommendationsService {
  public async get(genres: string[], year: number, page: number = 1): Promise<RecommendationResponse> {
    const genresProcessed = genres.join('|');
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genresProcessed}&primary_release_year=${year}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:`Bearer ${process.env.BEARER_TOKEN}`,
      },
    };

    const data = await fetch(url, options);
    const json: MovieDbResponse = await data.json();

    const movies: Movie[] = json.results.map((movie) => ({
      title: movie.original_title,
      releaseDate: movie.release_date,
      vote: movie.vote_average.toString(),
    }));

    return {
      movies,
      page: json.page,
      totalPages: json.total_pages,
      totalResults: json.total_results
    }
  }
}

/* 
todos: 
* endpoint to get genres
*/