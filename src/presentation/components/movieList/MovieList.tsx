import { FlatList, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Constants } from '../../../common/appconstants/constants';
import { PropsWithChildren } from 'react';
import { MovieItemModel } from '../../../domain/models/MovieModels';

type MovieListProps = PropsWithChildren<{
  movies: MovieItemModel[],
  onPress: (item: MovieItemModel) => void,
  loadMoreData: () => void
}>;
const MovieList = ({ movies, onPress, loadMoreData }: MovieListProps) => {
  const movieItem = ({ item }: PropsWithChildren<{ item: MovieItemModel }>) => {
    return (
      <TouchableOpacity onPress={() => onPress(item)} style={styles.movieItemContainer}>
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
