import { MovieModel } from '../../../domain/models/movielist/MovieModels';
import { MovieRepository } from '../../../domain/repositories/MovieRepository';
import { MovieRemoteDatasource } from '../../datasources/movie/MovieRemoteDatasource';
import { injectable, inject } from 'inversify';
import { Resource } from '../../../common/domain/either';
import 'reflect-metadata';
import { MovieDetailsModel } from '../../../domain/models/moviedetails/MovieDetailsModels';

@injectable()
export class MovieRepositoryImpl implements MovieRepository {
  constructor(
    @inject('MovieRemoteDatasource')
    private readonly movieRemoteDatasource: MovieRemoteDatasource,
  ) { }

  async getMovieDetails(movieId: number): Promise<Resource<MovieDetailsModel>> {
    try {
      const result = await this.movieRemoteDatasource.getMovieDetails(movieId);
      return Resource.success(result);
    } catch (err) {
      return Resource.failure((err as Error).message);
    }
  }
  async getPopularMovies(page?: string): Promise<Resource<MovieModel>> {
    try {
      const result = await this.movieRemoteDatasource.getPopularMovies(page ?? '1');
      return Resource.success(result);
    } catch (err) {
      return Resource.failure((err as Error).message);
    }
  }
  async getTopRateMovies(page?: string): Promise<Resource<MovieModel>> {
    try {
      const result = await this.movieRemoteDatasource.getTopRateMovies(page ?? '1');
      return Resource.success(result);
    } catch (err) {
      return Resource.failure((err as Error).message);
    }
  }
  async getUpComingMovies(page?: string): Promise<Resource<MovieModel>> {
    try {
      const result = await this.movieRemoteDatasource.getUpComingMovies(page ?? '1');
      return Resource.success(result);
    } catch (err) {
      return Resource.failure((err as Error).message);
    }
  }

  async getMovies(page?: string): Promise<Resource<MovieModel>> {
    try {
      const result = await this.movieRemoteDatasource.getMovieList(page ?? '1');
      return Resource.success(result);
    } catch (err) {
      return Resource.failure((err as Error).message);
    }
  }
}
