import { MovieItemModel } from "../movielist/MovieModels";

export interface HomePageModel {
    carousel: MovieItemModel[],
    nowPlaying: MovieItemModel[],
    popular: MovieItemModel[]
}