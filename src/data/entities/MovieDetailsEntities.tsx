import { GenericModel, MovieDetailsModel } from "../../domain/models/moviedetails/MovieDetailsModels";

export class MovieDetailsEntity implements MovieDetailsModel {
    audlt: boolean;
    backdropPath: string;
    budget: string;
    homepage: string;
    id: number;
    imdhId: string;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    posterPath: string;
    releaseDate: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
    generes: GenericModel[];
    status: string;

    private constructor(item: MovieDetailsEntity) {
        this.audlt = item.audlt
        this.backdropPath = item.backdropPath
        this.budget = item.budget
        this.id = item.id
        this.homepage = item.homepage
        this.imdhId = item.imdhId
        this.originalLanguage = item.originalLanguage
        this.originalTitle = item.originalTitle
        this.overview = item.overview
        this.popularity = item.popularity
        this.posterPath = item.posterPath
        this.releaseDate = item.releaseDate
        this.video = item.video
        this.voteAverage = item.voteAverage
        this.voteCount = item.voteCount
        this.generes = item.generes
        this.status = item.status;
    }
 
    static fromJson(json: any):MovieDetailsEntity {
        const params: MovieDetailsEntity = {
            audlt: json.adult,
            backdropPath: json.backdrop_path,
            budget: json.budget,
            homepage: json.homepage,
            id: json.id,
            imdhId: json.imdb_id,
            originalLanguage: json.original_language,
            originalTitle: json.original_title,
            overview: json.overview,
            popularity: json.popularity,
            posterPath: json.poster_path,
            releaseDate: json.release_date,
            video: json.video,
            status:json.status,
            voteAverage: json.vote_average,
            voteCount: json.vote_count,
            generes: json.genres.map((item: any) => {
                const newValue: GenericModel = {
                    id: item.id,
                    name: item.name
                }
                return newValue
            })
        }
 
        return new MovieDetailsEntity(params)
    }
}

