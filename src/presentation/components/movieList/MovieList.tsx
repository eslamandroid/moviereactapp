import {FlatList, Image, View, TouchableOpacity} from 'react-native';
import {Constants} from '../../../common/appconstants/constants';
import styles from './MovieListStyle';

const MovieList = ({ movies, onPress, loadMoreData }) => {
  const movieItem = ({item}) => {
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
            onEndReached={() => loadMoreData()}/>
    </View>
  );
};

export default MovieList;
