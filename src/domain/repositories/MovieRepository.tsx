import {MovieModel} from '../models/MovieModels';
import {Resource} from '../../common/domain/either';

export interface MovieRepository {
  getMovies(page?:string): Promise<Resource<MovieModel>>;
  getPopularMovies(page?:string): Promise<Resource<MovieModel>>;
  getTopRateMovies(page?:string): Promise<Resource<MovieModel>>;
  getUpComingMovies(page?:string): Promise<Resource<MovieModel>>;
}
