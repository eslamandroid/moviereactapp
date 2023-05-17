/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux';
import {useEffect} from 'react';
import styles from './PopluarStyle';
import Loading from '../../components/loading/Loading';
import MovieList from '../../components/movieList/MovieList';
import { fetchPopularMovies } from '../../redux/reducer/popularmovie/PopularMoviesSlice';

let pageNum = 1
const PopularScreen = () => {
  const {isLoading, movies} = useAppSelector(state => state.popularMovieList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies(`${pageNum}`));
  }, []);


  return (<View style={styles.mainView}>
    <MovieList
      movies={movies}
      loadMoreData={()=>{
        dispatch(fetchPopularMovies(`${++pageNum}`));
      }}
      onPress={(_item: any)=>console.log('eslam')
      }
     />
    {isLoading && <Loading />}
    </View>);
};
export default PopularScreen;
