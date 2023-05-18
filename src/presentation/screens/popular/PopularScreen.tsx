import { View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux';
import { useEffect } from 'react';
import styles from './PopluarStyle';
import Loading from '../../components/loading/Loading';
import MovieList from '../../components/movieList/MovieList';
import { fetchPopularMovies } from '../../redux/reducer/popularmovie/PopularMoviesSlice';
import EndScrollLoading from '../../components/loading/EndScollLoading';

let pageNum = 1
const PopularScreen = () => {
  const { isLoading, movies } = useAppSelector(state => state.popularMovieList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies(`${pageNum}`));
  }, []);

  return (<View style={styles.mainView}>
    <>
      {(isLoading && movies == null) && (<Loading />)}
      {(movies != null) && (
        <View style={{
          flex: 1,
          backgroundColor: 'red',
          justifyContent: 'flex-end'
        }}>
          <MovieList
            movies={movies}
            loadMoreData={() => {
              dispatch(fetchPopularMovies(`${++pageNum}`));
            }}
          />

          {(isLoading && movies != null) && <EndScrollLoading />}

        </View>
      )}
    </>
  </View>);
};
export default PopularScreen;
