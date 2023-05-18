import { MovieModel } from '../models/movielist/MovieModels';
import { Resource } from '../../common/domain/either';
import { MovieDetailsModel } from '../models/moviedetails/MovieDetailsModels';

export interface MovieRepository {
  getMovies(page?: string): Promise<Resource<MovieModel>>;
  getPopularMovies(page?: string): Promise<Resource<MovieModel>>;
  getTopRateMovies(page?: string): Promise<Resource<MovieModel>>;
  getUpComingMovies(page?: string): Promise<Resource<MovieModel>>;
  getMovieDetails(movieId: number): Promise<Resource<MovieDetailsModel>>;
}
