import { View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux';
import { useEffect } from 'react';
import styles from './UpComingStyle';
import Loading from '../../components/loading/Loading';
import MovieList from '../../components/movieList/MovieList';
import { fetchUpComingMovies } from '../../redux/reducer/upcomingmovie/UpComingMovieSlice';
import EndScrollLoading from '../../components/loading/EndScollLoading';

let pageNum = 1
const UpComingScreen = () => {
  const { isLoading, movies } = useAppSelector(state => state.upComingMovieList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUpComingMovies(`${pageNum}`));
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
              dispatch(fetchUpComingMovies(`${++pageNum}`));
            }}
          />

          {(isLoading && movies != null) && <EndScrollLoading />}

        </View>
      )}
    </>
  </View>);
};
export default UpComingScreen;
