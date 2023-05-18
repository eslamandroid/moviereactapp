import type { PropsWithChildren } from 'react';
import { MovieItemModel } from "../../../../domain/models/movielist/MovieModels";
import { Image, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import { Constants } from "../../../../common/appconstants/constants";
import { COLOR } from '../../../../common/appconstants/Colors';

const { width: viewportWidth } = Dimensions.get('window');
const contentPadding = 16;

type MovieCarouselItemProps = PropsWithChildren<{
    movie: MovieItemModel;
}>;

const MovieCarouselItem = ({ movie }: MovieCarouselItemProps) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Image style={styles.thumbnail} source={{ uri: `${Constants.IMAGE_URL}${movie.poster_path}` }} />
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.overview} numberOfLines={2} lineBreakMode='tail'>{movie.overview}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: viewportWidth - 2 * contentPadding,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:15,
        color:COLOR.black,
    },
    overview:{
        fontWeight:'600',
        marginTop:8,
        color:COLOR.secondaryText,
    },
    thumbnail: {
        height: 250,
        width:'100%',
        resizeMode: 'cover',
        borderRadius: 8,
    }
});
export default MovieCarouselItem;