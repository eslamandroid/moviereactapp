import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../../../common/domain/either";
import { MovieItemModel, MovieModel } from "../../../../domain/models/movielist/MovieModels";
import container from "../../../../di/di";
import { GetUpComingMovies } from "../../../../domain/usecases/movie/MovieUseCases";

// define state
export interface UpComingMovieState {
    movies?: MovieItemModel[];
    isLoading: boolean;
    movie?: MovieModel;
}

// init default state
const initState: UpComingMovieState = {
    isLoading: false
}

const getUpComingMovies = container.get<GetUpComingMovies>('GetUpComingMovies');

// create thunk to execute promis functions
export const fetchUpComingMovies = createAsyncThunk('upComingMoviesSlice/fetchUpComingMovies', async (page?: string) => {
    const resultMovie = await getUpComingMovies.execute(page);
    if (resultMovie.status === Status.SUCCESS) {
        return resultMovie.data;
    } else {
        return resultMovie.message;
    }
});

// handle cases for thunk whether loading , success, error
const movieReducerBuilder = (
    builder: ActionReducerMapBuilder<UpComingMovieState>,
) => {
    builder.addCase(fetchUpComingMovies.pending, (state: UpComingMovieState) => {
        // show loading
        state.isLoading = true;
    });

    builder.addCase(fetchUpComingMovies.fulfilled, (state, action) => {
        // logic here
        state.isLoading = false;
        state.movie = action.payload as MovieModel;        
        const currentList = state.movies ?? [];
        currentList?.push(...(action.payload as MovieModel).movieList);
        state.movies = currentList;
    });

    builder.addCase(fetchUpComingMovies.rejected, (state, _) => {
        // error here
        state.isLoading = false;
    });
};

// create slice to recieve action and update state
const upComingMoviesSlice = createSlice({
    name: 'upComingMovies',
    reducers: {},
    extraReducers(builder) {
        movieReducerBuilder(builder);
    },
    initialState: initState
});

export default upComingMoviesSlice.reducer;