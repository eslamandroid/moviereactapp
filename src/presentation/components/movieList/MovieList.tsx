import { FlatList, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Constants } from '../../../common/appconstants/constants';
import { PropsWithChildren } from 'react';
import { MovieItemModel } from '../../../domain/models/movielist/MovieModels';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigation';

type MovieListProps = PropsWithChildren<{
  movies: MovieItemModel[],
  loadMoreData: () => void
}>;
const MovieList = ({ movies, loadMoreData }: MovieListProps) => {
  const navigation = useNavigation<RootStackParamList>();

  const movieItem = ({ item }: PropsWithChildren<{ item: MovieItemModel }>) => {

    const onNavigateClick = () => {
      navigation.navigate('MovieDetails', {
        movieId: item.id
      });
    };

    return (
      <TouchableOpacity onPress={onNavigateClick} style={styles.movieItemContainer}>
        <Image
          style={styles.imageView}
          source={{
            uri: `${Constants.IMAGE_URL}${item.poster_path}`,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainView}>
      <FlatList
        style={styles.flatListContainer}
        scrollEventThrottle={160}
        showsVerticalScrollIndicator={false}
        data={movies}
        extraData={movies}
        renderItem={movieItem}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.2}
        onEndReached={() => loadMoreData()} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  flatListContainer: {

  },
  movieItemContainer: {
    flex: 1 / 2,
    margin: 4
  },
  imageView: {
    height: 270,
    resizeMode: 'cover',
    borderRadius: 18,
  }
});


export default MovieList;
