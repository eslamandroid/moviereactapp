export type Dates = {
  maximum: string;
  minmum: string;
};

export class MovieModel {
  date: Dates;
  movieList: MovieItemModel[];
  currentPage: number;
  totalPage: number;
  totalResult: number;
  constructor(values: MovieModel) {
    this.date = values.date;
    this.movieList = values.movieList;
    this.currentPage = values.currentPage;
    this.totalPage = values.totalPage;
    this.totalResult = values.totalResult;
  }
}

export class MovieItemModel {
  audlt: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;

  constructor(values: MovieItemModel) {
    this.audlt = values.audlt;
    this.backdrop_path = values.backdrop_path;
    this.genre_ids = values.genre_ids;
    this.id = values.id;
    this.original_language = values.original_language;
    this.original_title = values.original_title;
    this.overview = values.overview;
    this.popularity = values.popularity;
    this.poster_path = values.poster_path;
    this.release_date = values.release_date;
    this.title = values.title;
    this.vote_average = values.vote_average;
    this.vote_count = values.vote_count;
  }
}
