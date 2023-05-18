import { PropsWithChildren } from "react";
import { MovieItemModel } from "../../../../domain/models/movielist/MovieModels";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Image, View, Text } from 'react-native';
import { Constants } from "../../../../common/appconstants/constants";
import { COLOR } from "../../../../common/appconstants/Colors";
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigation/AppNavigation";

type VerticalMovieCardType = PropsWithChildren<{
    movie: MovieItemModel
}>;

const VerticalMovieCard = ({ movie }: VerticalMovieCardType) => {
    const navigation = useNavigation<RootStackParamList>();

    const onNavigateClick = () => {
        navigation.navigate('MovieDetails', {
            movieId: movie.id
        });
    };
    return (
        <TouchableOpacity style={styles.card} onPress={onNavigateClick}>
            <Image style={styles.thumbnail} source={{ uri: `${Constants.IMAGE_URL}${movie.poster_path}` }} />
            <View style={styles.movieDetail}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.description} numberOfLines={4} ellipsizeMode='tail'>{movie.overview}</Text>
                <View style={styles.rateContainer}>
                    <Icon name="star" size={20} style={styles.starIcon} />
                    <Text style={styles.rating}>{movie.vote_average}</Text>
                    <Text style={styles.rating}> / 10</Text>
                </View>
                <Text style={styles.voteCount}>{movie.vote_count} Votes</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 2,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16
    },
    thumbnail: {
        height: 180,
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    movieDetail: {
        flex: 1,
        maxWidth: '50%',
        marginStart: 10,
        marginEnd: 2,
        height: 180
    },
    title: {
        color: COLOR.black,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 1,
        marginTop: 8,
        width: '100%',

    },
    description: {
        fontSize: 14,
        color: COLOR.secondaryText
    },
    rateContainer: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 8,
        alignContent: 'center'
    },
    starIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
        color: 'red'
    },
    rating: {
        marginTop: 2,
        fontSize: 16,
        fontWeight: '500',
        color: 'red'
    },
    voteCount: {
        fontSize: 14,
    }
});

export default VerticalMovieCard;