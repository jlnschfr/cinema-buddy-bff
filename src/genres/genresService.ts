import { GenresResponse } from "./genres";

export class GenresService {
  public async get(): Promise<GenresResponse> {

    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:`Bearer ${process.env.BEARER_TOKEN}`,
      },
    };

    const data = await fetch(url, options);
    const genres: GenresResponse = await data.json();

    return genres
  }
}