import { inject, injectable } from "inversify";
import { HomeRepository } from "../../../domain/repositories/HomeRepository";
import { Resource } from "../../../common/domain/either";
import { HomePageModel } from "../../../domain/models/homepage/HomePageModels";
import { MovieRemoteDatasource } from "../../datasources/movie/MovieRemoteDatasource";

@injectable()
export class HomeRepositoryImpl implements HomeRepository {

    constructor(
        @inject('MovieRemoteDatasource')
        private readonly movieRemoteDatasource: MovieRemoteDatasource,
    ) { }

    async getHomePage(): Promise<Resource<HomePageModel>> {
        try {
            // load up coming movies and we'll takes 10 items only 
            const upcomingMovies = (await this.movieRemoteDatasource.getUpComingMovies('1')).movieList;
            // load now play movies
            const nowPlayingMovies = (await this.movieRemoteDatasource.getMovieList('1')).movieList
            // load popular movies and we'll takes 8 items only
            const popularMovies = (await this.movieRemoteDatasource.getPopularMovies('1')).movieList

            const homeModel:HomePageModel = {
                carousel: upcomingMovies.slice(0,10),
                nowPlaying: nowPlayingMovies,
                popular: popularMovies.slice(0,8)
            }
            return Resource.success(homeModel);
        } catch (err) {
            return Resource.failure((err as Error).message);
        }
    }




}