import { Movie, MovieDbResponse } from "./recommendations";

export class RecommendationsService {
  public async get(categories: string[]): Promise<Movie[]> {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28&year=2025';
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
      releaseDate: movie.release_date
    }));

    return movies;
  }
}

/* 
todos: 
* watch task
* make genres and year dynamic in recommendationsService
* endpoint to get genres
*/