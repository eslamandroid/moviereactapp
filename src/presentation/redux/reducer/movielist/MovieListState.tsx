import {MovieItemModel, MovieModel} from '../../../../domain/models/MovieModels';

export interface MovieListState {
  movies?: MovieItemModel[];
  isLoading: boolean;
  movie?:MovieModel;
}

export const movieInitState: MovieListState = {
  movies: undefined,
  isLoading: false,
};
