import { Movie, MovieDbResponse } from "./recommendations";

export class RecommendationsService {
  public async get(categories: string[]): Promise<Movie[]> {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28&year=2025';
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzBkOWUzNjZiODQwYWQ5ODY5MmRkZjViMDYzZWMzZiIsIm5iZiI6MTc0MjY0MzczNi43Miwic3ViIjoiNjdkZWEyMTg0YWE5NjZjZThjNjliZWI3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VhGLmK6hHv-pZdotWhjpDByTzEBnv9_jM17UTg3ik0M",
      },
    };

    const data = await fetch(url, options);
    const json: MovieDbResponse = await data.json();

    const movies: Movie[] = json.results.map((movie) => ({
      title: movie.original_title,
      releaseDate: movie.release_date
    }));

    console.log(movies);
    console.log(categories);

    return movies;
  }
}

/* 
todos: 
* optimize bearer
* make genres dynamic in recommendationsService
* endpoint to get genres
*/