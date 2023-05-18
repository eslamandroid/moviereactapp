import {Container} from 'inversify';
import {MovieRepositoryImpl} from '../data/repositories/movie/MovieRepositoryImpl';
import {MovieRepository} from '../domain/repositories/MovieRepository';
import {
  MovieRemoteDatasource,
  MovieRemoteDatasourceImpl,
} from '../data/datasources/movie/MovieRemoteDatasource';

import {GetMovieDetails, GetMovieUseCase, GetPopularMovies, GetTopRateMoview, GetUpComingMovies} from '../domain/usecases/movie/MovieUseCases';

const myContainer = new Container();

//UseCases
myContainer.bind<GetMovieUseCase>('GetMovieUseCase').to(GetMovieUseCase);
myContainer.bind<GetPopularMovies>('GetPopularMovies').to(GetPopularMovies);
myContainer.bind<GetTopRateMoview>('GetTopRateMoview').to(GetTopRateMoview);
myContainer.bind<GetUpComingMovies>('GetUpComingMovies').to(GetUpComingMovies);
myContainer.bind<GetMovieDetails>('GetMovieDetails').to(GetMovieDetails);

//Repositories
myContainer.bind<MovieRepository>('MovieRepository').to(MovieRepositoryImpl);

//DataSources
myContainer
  .bind<MovieRemoteDatasource>('MovieRemoteDatasource')
  .to(MovieRemoteDatasourceImpl);

export default myContainer;
