import { Controller, Get, Route } from "tsoa";
import { GenresResponse } from "./genres";
import { GenresService } from "./genresService";

@Route("genres")
export class GenresController extends Controller {
  @Get()
  public async getGenres(): Promise<GenresResponse> {
    return new GenresService().get();
  }
}
