import { MovieModel } from '../../models/movielist/MovieModels';
import { MovieRepository } from '../../repositories/MovieRepository';
import { UseCase } from '../../../common/usecase/UseCase';
import { injectable, inject } from 'inversify';
import { Resource } from '../../../common/domain/either';
import 'reflect-metadata';
import { MovieDetailsModel } from '../../models/moviedetails/MovieDetailsModels';

@injectable()
export class GetMovieUseCase implements UseCase<Resource<MovieModel>, string> {
  constructor(@inject('MovieRepository') private repository: MovieRepository) { }
  execute(_params?: string): Promise<Resource<MovieModel>> {
    return this.repository.getMovies(_params);
  }
}


@injectable()
export class GetPopularMovies implements UseCase<Resource<MovieModel>, string> {
  constructor(@inject('MovieRepository') private repository: MovieRepository) { }
  execute(_params?: string): Promise<Resource<MovieModel>> {
    return this.repository.getPopularMovies(_params);
  }
}

@injectable()
export class GetTopRateMoview implements UseCase<Resource<MovieModel>, string> {
  constructor(@inject('MovieRepository') private repository: MovieRepository) { }
  execute(_params?: string): Promise<Resource<MovieModel>> {
    return this.repository.getTopRateMovies(_params);
  }
}

@injectable()
export class GetUpComingMovies implements UseCase<Resource<MovieModel>, string> {
  constructor(@inject('MovieRepository') private repository: MovieRepository) { }
  execute(_params?: string): Promise<Resource<MovieModel>> {
    return this.repository.getUpComingMovies(_params);
  }
}

@injectable()
export class GetMovieDetails implements UseCase<Resource<MovieDetailsModel>, number> {
  constructor(@inject('MovieRepository') private repository: MovieRepository) { }
  execute(_params?: number): Promise<Resource<MovieDetailsModel>> {
    return this.repository.getMovieDetails(_params!);
  }
}