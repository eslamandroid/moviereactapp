/* eslint-disable prettier/prettier */
import { MovieItemModel, MovieModel } from '../../domain/models/MovieModels';


export class MovieEntity extends MovieModel {

    constructor(jsonObject: any) {
        let params: MovieModel = {
            date: {
                maximum: jsonObject?.dates?.maximum??'',
                minmum: jsonObject?.dates?.maximum??'',
            },
            movieList: (jsonObject.results as []).map(movie => new MovieItemEntity(movie)),
            currentPage: jsonObject.page,
            totalPage: jsonObject.total_pages,
            totalResult: jsonObject.total_results,
        };
        super(params);
    }
}

export class MovieItemEntity extends MovieItemModel {

    constructor(jsonObject: any) {
        let params: MovieItemModel = {
            audlt: jsonObject.adult,
            backdrop_path: jsonObject.backdrop_path,
            genre_ids: jsonObject.genre_ids,
            id: jsonObject.id,
            original_language: jsonObject.original_language,
            original_title: jsonObject.original_title,
            overview: jsonObject.overview,
            popularity: jsonObject.popularity,
            poster_path: jsonObject.poster_path,
            release_date: jsonObject.release_date,
            title: jsonObject.title,
            vote_average: jsonObject.vote_average,
            vote_count: jsonObject.vote_count,
        };

        super(params);
    }

}

