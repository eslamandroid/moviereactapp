import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../../../common/domain/either";
import { MovieItemModel, MovieModel } from "../../../../domain/models/MovieModels";
import container from "../../../../di/di";
import { GetTopRateMoview } from "../../../../domain/usecases/movie/MovieUseCases";

// define state
export interface TopRateState {
    movies?: MovieItemModel[];
    isLoading: boolean;
    movie?: MovieModel;
}

// init default state
const initState: TopRateState = {
    isLoading: false
}

const getTopRateMovies = container.get<GetTopRateMoview>('GetTopRateMoview');

// create thunk to execute promis functions
export const fetchTopRateMovies = createAsyncThunk('topRateMoviesSlice/fetchTopRateMovies', async (page?: string) => {
    const resultMovie = await getTopRateMovies.execute(page);
    if (resultMovie.status === Status.SUCCESS) {
        return resultMovie.data;
    } else {
        return resultMovie.message;
    }
});

// handle cases for thunk whether loading , success, error
const movieReducerBuilder = (
    builder: ActionReducerMapBuilder<TopRateState>,
) => {
    builder.addCase(fetchTopRateMovies.pending, (state: TopRateState) => {
        // show loading
        state.isLoading = true;
    });

    builder.addCase(fetchTopRateMovies.fulfilled, (state, action) => {
        // logic here
        state.isLoading = false;
        state.movie = action.payload as MovieModel;        
        const currentList = state.movies ?? [];
        currentList?.push(...(action.payload as MovieModel).movieList);
        state.movies = currentList;
    });

    builder.addCase(fetchTopRateMovies.rejected, (state, _) => {
        // error here
        state.isLoading = false;
    });
};


// create slice to recieve action and update state
const topRateMoviesSlice = createSlice({
    name: 'topRateMovie',
    reducers: {},
    extraReducers(builder) {
        movieReducerBuilder(builder);
    },
    initialState: initState
});

export default topRateMoviesSlice.reducer;