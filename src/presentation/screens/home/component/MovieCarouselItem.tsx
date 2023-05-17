import type { PropsWithChildren } from 'react';
import { MovieItemModel } from "../../../../domain/models/MovieModels";
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Constants } from "../../../../common/appconstants/constants";

type MovieCarouselItemProps = PropsWithChildren<{
    movie: MovieItemModel;
}>;

const MovieCarouselItem = ({ children, movie }: MovieCarouselItemProps) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Image style={styles.thumbnail} source={{ uri: `${Constants.IMAGE_URL}${movie.poster_path}` }} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {},
    thumbnail: {
        height: 220,
        resizeMode: 'cover',
        borderRadius: 8,
    }
});
export default MovieCarouselItem;