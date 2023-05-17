/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux';
import {useEffect} from 'react';
import styles from './TopRateStyle';
import Loading from '../../components/loading/Loading';
import MovieList from '../../components/movieList/MovieList';
import { fetchTopRateMovies } from '../../redux/reducer/topratemovie/TopRateMovieSlice';

let pageNum = 1
const TopRateScreen = () => {
  const {isLoading, movies} = useAppSelector(state => state.topRateMovieList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTopRateMovies(`${pageNum}`));
  }, []);

  return (<View style={styles.mainView}>
    <MovieList
      movies={movies}
      loadMoreData={()=>{
        dispatch(fetchTopRateMovies(`${++pageNum}`));
      }}
      onPress={(_item: any)=>console.log('eslam')
      }
     />
    {isLoading && <Loading />}
    </View>);
};
export default TopRateScreen;
