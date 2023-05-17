/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {FlatList, View,Text} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux';
import {useEffect} from 'react';
import {fetchMovies} from '../../redux/reducer/movielist/MovieListSlice';
import styles from './HomeStyle';
import Loading from '../../components/loading/Loading';
import MovieList from '../../components/movieList/MovieList';
//    "babel-plugin-parameter-decorator": "^1.0.16",

let pageNum = 1
const HomeScreen = () => {
  const {isLoading, movies} = useAppSelector(state => state.movieList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies(`${pageNum}`));
  }, []);


  return (<View style={styles.mainView}>
    <MovieList
      movies={movies}
      loadMoreData={()=>{
        dispatch(fetchMovies(`${++pageNum}`));
      }}
      onPress={(_item: any)=>console.log('eslam')
      }
     />
    {isLoading && <Loading />}
    </View>);
};
export default HomeScreen;
