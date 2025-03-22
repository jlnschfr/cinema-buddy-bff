import {
    Controller,
    Get,
    Query,
    Route,
  } from "tsoa";
  import { RecommendationResponse } from "./recommendations";
  import { RecommendationsService } from "./recommendationsService";
  
  @Route("recommendations")
  export class RecommendationsController extends Controller {
    @Get()
    public async getRecommendations(
        @Query() genres: string[],
        @Query() year: number,
        @Query() page: number
      ): Promise<RecommendationResponse> {
      return new RecommendationsService().get(genres, year, page);
    }
  }