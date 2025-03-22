// src/users/usersController.ts
import {
    Controller,
    Get,
    Query,
    Route,
  } from "tsoa";
  import { Movie } from "./recommendations";
  import { RecommendationsService } from "./recommendationsService";
  
  @Route("recommendations")
  export class RecommendationsController extends Controller {
    @Get()
    public async getRecommendations(
      @Query() categories: string[]
    ): Promise<Movie[]> {
      return new RecommendationsService().get(categories);
    }
  }