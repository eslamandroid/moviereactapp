import { injectable } from 'inversify';
import { MovieEntity } from '../../entities/MovieEntities';
import { ApiUrls } from '../../network/api_urls';
import AxiosService from '../../network/axios_service';
import 'reflect-metadata';

export interface MovieRemoteDatasource {
  getMovieList(page: string): Promise<MovieEntity>;
  getPopularMovies(page: string): Promise<MovieEntity>;
  getTopRateMovies(page: string): Promise<MovieEntity>;
  getUpComingMovies(page: string): Promise<MovieEntity>;
}

@injectable()
export class MovieRemoteDatasourceImpl implements MovieRemoteDatasource {
  constructor() { }
  async getPopularMovies(page: string = '1'): Promise<MovieEntity> {
    const response = await AxiosService.getServiceData(ApiUrls.POPULAR_MOVIE_LIST, { page: page });
    if (response.status === 200) {      
      return new MovieEntity(response.data);
    } else {
      console.log(response.data.errors);
      throw new Error('Something went wrong');
    }
  }
  async getTopRateMovies(page: string = '1'): Promise<MovieEntity> {
    const response = await AxiosService.getServiceData(ApiUrls.TOP_RATED_MOVIE_LIST, { page: page });
    if (response.status === 200) {
      return new MovieEntity(response.data);
    } else {
      console.log(response.data.errors);
      throw new Error('Something went wrong');
    }
  }
  async getUpComingMovies(page: string = '1'): Promise<MovieEntity> {
    const response = await AxiosService.getServiceData(ApiUrls.UP_COMING_MOVIE_LIST, { page: page });
    if (response.status === 200) {
      return new MovieEntity(response.data);
    } else {
      console.log(response.data.errors);
      throw new Error('Something went wrong');
    }
  }
  async getMovieList(page: string = '1'): Promise<MovieEntity> {
    const response = await AxiosService.getServiceData(ApiUrls.MOVIE_LIST, { page: page });
    if (response.status === 200) {
      return new MovieEntity(response.data);
    } else {
      console.log(response.data.errors);
      throw new Error('Something went wrong');
    }
  }
}
