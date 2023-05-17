import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import myContainer from '../../../../di/di';
import {GetMovieUseCase} from '../../../../domain/usecases/movie/MovieUseCases';
import {MovieItemModel, MovieModel} from '../../../../domain/models/MovieModels';
import {Status} from '../../../../common/domain/either';

const movieUseCase = myContainer.get<GetMovieUseCase>('GetMovieUseCase');

// define state
export interface MovieListState {
  movies?: MovieItemModel[];
  isLoading: boolean;
  movie?: MovieModel;
}

// init default state
const initState: MovieListState = {
  isLoading: false
}

export const fetchMovies= createAsyncThunk(
  'movieListSlice/fetchMovies',
  async (page?:string) => {
    const resultMovie = await movieUseCase.execute(page);
    if (resultMovie.status === Status.SUCCESS) {
      return resultMovie.data;
    } else {
      return resultMovie.message;
    }
  },
);

const movieReducerBuilder = (
  builder: ActionReducerMapBuilder<MovieListState>,
) => {
  builder.addCase(fetchMovies.pending, (state: MovieListState) => {
    // show loading
    state.isLoading = true;
  });

  builder.addCase(fetchMovies.fulfilled, (state, action) => {
    // logic here
    state.isLoading = false;
    state.movie = action.payload as MovieModel;
    const currentList = state.movies??[];
    currentList?.push(...(action.payload as MovieModel).movieList);
    state.movies = currentList;
  });

  builder.addCase(fetchMovies.rejected, (state, _) => {
    // error here
    state.isLoading = false;
  });
};

const movieListSlice = createSlice({
  name: 'movieList',
  initialState: initState,
  reducers: {},
  extraReducers: builder => {
    movieReducerBuilder(builder);
  },
});

export default movieListSlice.reducer;
