import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import container from "../../../../di/di";
import { GetPopularMovies } from "../../../../domain/usecases/movie/MovieUseCases";
import { Status } from "../../../../common/domain/either";
import { MovieItemModel, MovieModel } from "../../../../domain/models/movielist/MovieModels";

const getPopularMovies = container.get<GetPopularMovies>('GetPopularMovies');


// define state
export interface PopularState {
    movies?: MovieItemModel[];
    isLoading: boolean;
    movie?: MovieModel;
}

// init default state
const initState: PopularState = {
    isLoading: false
}

// create thunk to execute promis functions
export const fetchPopularMovies = createAsyncThunk('popularMoviesSlice/fetchPopularMovies', async (page?: string) => {
    const resultMovie = await getPopularMovies.execute(page);
    if (resultMovie.status === Status.SUCCESS) {
        return resultMovie.data;
    } else {
        return resultMovie.message;
    }
});

// handle cases for thunk whether loading , success, error
const movieReducerBuilder = (
    builder: ActionReducerMapBuilder<PopularState>,
) => {
    builder.addCase(fetchPopularMovies.pending, (state: PopularState) => {
        // show loading
        state.isLoading = true;
    });

    builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
        // logic here
        state.isLoading = false;
        state.movie = action.payload as MovieModel;
        const currentList = state.movies ?? [];
        currentList?.push(...(action.payload as MovieModel).movieList);
        state.movies = currentList;
    });

    builder.addCase(fetchPopularMovies.rejected, (state, _) => {
        // error here
        state.isLoading = false;
    });
};

// create slice to recieve action and update state
const popularMoviesSlice = createSlice({
    name: 'popularMovie',
    reducers: {},
    extraReducers(builder) {
        movieReducerBuilder(builder);
    },
    initialState: initState
});

export default popularMoviesSlice.reducer;