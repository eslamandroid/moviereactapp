/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux';
import {useEffect} from 'react';
import styles from './UpComingStyle';
import Loading from '../../components/loading/Loading';
import MovieList from '../../components/movieList/MovieList';
import { fetchUpComingMovies } from '../../redux/reducer/upcomingmovie/UpComingMovieSlice';

let pageNum = 1
const UpComingScreen = () => {
  const {isLoading, movies} = useAppSelector(state => state.upComingMovieList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUpComingMovies(`${pageNum}`));
  }, []);

  return (<View style={styles.mainView}>
    <MovieList
      movies={movies}
      loadMoreData={()=>{
        dispatch(fetchUpComingMovies(`${++pageNum}`));
      }}
      onPress={(_item: any)=>console.log('eslam')
      }
     />
    {isLoading && <Loading />}
    </View>);
};
export default UpComingScreen;
