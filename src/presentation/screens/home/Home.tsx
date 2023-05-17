import { FlatList, Text, Dimensions, View, SafeAreaView } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux';
import { PropsWithChildren, useEffect } from 'react';
import { fetchMovies } from '../../redux/reducer/movielist/MovieListSlice';
import styles from './HomeStyle';
import Loading from '../../components/loading/Loading';
import Carousel from 'react-native-snap-carousel';
import MovieCarouselItem from './component/MovieCarouselItem';
import { MovieItemModel } from '../../../domain/models/MovieModels';
import { ScrollView } from 'react-native-gesture-handler';
import HorizontalMovieCard from './component/HorizontalMovieCard';
import EmptyView from '../../components/emptyview';
import VerticalMovieCard from './component/VerticalMovieCard';

const { width: viewportWidth } = Dimensions.get('window');

let pageNum = 1
const contentPadding = 16;

const HomeScreen = () => {
  const { isLoading, movies } = useAppSelector(state => state.movieList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies(`${pageNum}`));
  }, []);

  const renderNowPlaying = ({ item }: { item: MovieItemModel }) => {
    return <HorizontalMovieCard movie={item} />;
  };


  const NowPlayingList = () => {
    return (<View>
      <Text style={styles.sectionTitle}>Now Playing</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={movies}
        renderItem={renderNowPlaying}
        keyExtractor={(movie: MovieItemModel, index) => index.toString()}
        horizontal={true}
      />
    </View>);
  }

  const CarsouelView = ({ children, movies }: PropsWithChildren<{ movies: MovieItemModel[] }>) => {
    return (<Carousel
      autoplay={true}
      data={movies}
      sliderWidth={viewportWidth - 2 * contentPadding}
      itemWidth={viewportWidth - 2 * contentPadding}
      loop={true}
      renderItem={({ item }: { item: MovieItemModel; index: number }) => (
        <MovieCarouselItem movie={item} key={item.id} />
      )}
    />)
  }

  return (<SafeAreaView style={styles.mainView}>
    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:10, padding:16,marginBottom:10}}>
      {movies != null ? <CarsouelView movies={movies} /> : <EmptyView />}

      {movies != null ? <NowPlayingList /> : <EmptyView />}

      <Text style={styles.sectionTitle}>Popular</Text>

      {movies?.slice(0, 6).map((movie: MovieItemModel, index) => (
        <VerticalMovieCard movie={movie} key={index.toString()} />
      ))}

      {isLoading && <Loading />}
    </ScrollView>
  </SafeAreaView>);
};
export default HomeScreen;
