import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import HomePageReducer from '../redux/reducer/homepage/HomePageSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import PopularMoviesReducer from './reducer/popularmovie/PopularMoviesSlice';
import TopRateMovieReducer from './reducer/topratemovie/TopRateMovieSlice';
import UpComingMovieReducer from './reducer/upcomingmovie/UpComingMovieSlice';
import MovieDetailsReducer from './reducer/moviedetails/MovieDetailsSlice';

export const store = configureStore({
  reducer: {
    homePage: HomePageReducer,
    popularMovieList: PopularMoviesReducer,
    topRateMovieList: TopRateMovieReducer,
    upComingMovieList: UpComingMovieReducer,
    movieDetails: MovieDetailsReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
