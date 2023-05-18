import type { PropsWithChildren } from 'react';
import { MovieItemModel } from "../../../../domain/models/movielist/MovieModels"
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, Text, StyleSheet } from 'react-native'
import { Constants } from "../../../../common/appconstants/constants";
import { COLOR } from "../../../../common/appconstants/Colors";
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/AppNavigation';

type HorizontalMovieCardProps = PropsWithChildren<{
    movie: MovieItemModel
}>;

const HorizontalMovieCard = ({ movie }: HorizontalMovieCardProps) => {
    const navigation = useNavigation<RootStackParamList>();

    const onNavigateClick = () => {
        navigation.navigate('MovieDetails', {
            movieId: movie.id
        });
    };
    return (<TouchableOpacity style={styles.card} onPress={onNavigateClick}>
        <Image style={styles.thumbnail} source={{ uri: `${Constants.IMAGE_URL}${movie.poster_path}` }} />
        <Text style={styles.title}>{movie.title}</Text>
    </TouchableOpacity>);
}


const styles = StyleSheet.create({
    card: {
        width: 200,
        height: 300,
        marginRight: 20,
    },
    thumbnail: {
        height: 250,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
    },
    title: {
        color: COLOR.black,
        width: "100%",
        fontSize: 16,
        marginTop: 8,
        fontWeight: '500'
    }
});

export default HorizontalMovieCard;