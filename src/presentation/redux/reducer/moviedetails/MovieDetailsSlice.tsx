import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import myContainer from '../../../../di/di';
import { GetMovieDetails } from '../../../../domain/usecases/movie/MovieUseCases';
import { Status } from '../../../../common/domain/either';
import { MovieDetailsModel } from '../../../../domain/models/moviedetails/MovieDetailsModels';

const movieDetailsCase = myContainer.get<GetMovieDetails>('GetMovieDetails');

// define state
export interface MovieDetailsState {
  isLoading: boolean;
  movie?: MovieDetailsModel;
}

// init default state
const initState: MovieDetailsState = {
  isLoading: false
}

export const fetchMovieDetails = createAsyncThunk(
  'movieDetailsSlice/fetchMovieDetails',
  async (movieId: number) => {
    const resultMovie = await movieDetailsCase.execute(movieId);
    if (resultMovie.status === Status.SUCCESS) {
      return resultMovie.data;
    } else {
      return resultMovie.message;
    }
  },
);

const movieDetailsReducerBuilder = (
  builder: ActionReducerMapBuilder<MovieDetailsState>,
) => {
  builder.addCase(fetchMovieDetails.pending, (state: MovieDetailsState) => {
    // show loading
    state.isLoading = true;
  });

  builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
    // logic here
     
    state.isLoading = false;
    state.movie = action.payload as MovieDetailsModel;
 
  });

  builder.addCase(fetchMovieDetails.rejected, (state, _) => {
    // error here
    state.isLoading = false;
  });
};

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState: initState,
  reducers: {},
  extraReducers: builder => {
    movieDetailsReducerBuilder(builder);
  },
});

export default movieDetailsSlice.reducer;
