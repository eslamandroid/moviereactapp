import { Container } from 'inversify';
import { MovieRepositoryImpl } from '../data/repositories/movie/MovieRepositoryImpl';
import { MovieRepository } from '../domain/repositories/MovieRepository';
import {
  MovieRemoteDatasource,
  MovieRemoteDatasourceImpl,
} from '../data/datasources/movie/MovieRemoteDatasource';

import { GetMovieDetails, GetMovieUseCase, GetPopularMovies, GetTopRateMoview, GetUpComingMovies } from '../domain/usecases/movie/MovieUseCases';
import { HomeRepository } from '../domain/repositories/HomeRepository';
import { HomeRepositoryImpl } from '../data/repositories/home/HomeRepositoryImpl';
import { GetHomePageCase } from '../domain/usecases/homepage/HomeUseCases';

const myContainer = new Container();

//UseCases
myContainer.bind<GetMovieUseCase>('GetMovieUseCase').to(GetMovieUseCase);
myContainer.bind<GetPopularMovies>('GetPopularMovies').to(GetPopularMovies);
myContainer.bind<GetTopRateMoview>('GetTopRateMoview').to(GetTopRateMoview);
myContainer.bind<GetUpComingMovies>('GetUpComingMovies').to(GetUpComingMovies);
myContainer.bind<GetMovieDetails>('GetMovieDetails').to(GetMovieDetails);
myContainer.bind<GetHomePageCase>('GetHomePageCase').to(GetHomePageCase);

//Repositories
myContainer.bind<MovieRepository>('MovieRepository').to(MovieRepositoryImpl);
myContainer.bind<HomeRepository>('HomeRepository').to(HomeRepositoryImpl);

//DataSources
myContainer
  .bind<MovieRemoteDatasource>('MovieRemoteDatasource')
  .to(MovieRemoteDatasourceImpl);

export default myContainer;
