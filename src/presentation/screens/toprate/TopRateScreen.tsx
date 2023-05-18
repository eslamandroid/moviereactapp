import { View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux';
import { useEffect } from 'react';
import styles from './TopRateStyle';
import Loading from '../../components/loading/Loading';
import MovieList from '../../components/movieList/MovieList';
import { fetchTopRateMovies } from '../../redux/reducer/topratemovie/TopRateMovieSlice';
import EndScrollLoading from '../../components/loading/EndScollLoading';

let pageNum = 1
const TopRateScreen = () => {
  const { isLoading, movies } = useAppSelector(state => state.topRateMovieList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTopRateMovies(`${pageNum}`));
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
              dispatch(fetchTopRateMovies(`${++pageNum}`));
            }}
          />

          {(isLoading && movies != null) && <EndScrollLoading />}

        </View>
      )}
    </>
  </View>);
};
export default TopRateScreen;
