import { StyleSheet, View, ScrollView, Image, ActivityIndicator, Text, Linking, Platform, StatusBar } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../../redux/reducer/moviedetails/MovieDetailsSlice";
import { RootStackParamList } from "../../navigation/AppNavigation";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Constants } from "../../../common/appconstants/constants";
import { COLOR } from "../../../common/appconstants/Colors";
import LinearGradient from 'react-native-linear-gradient';
import MovieGenreList from "./component/MovieGenericList";
import { GenericModel } from "../../../domain/models/moviedetails/MovieDetailsModels";
import styles from "./MovieDetailsStyles";

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetails'>;

const MovieDetailsScreen = ({ route }: Props) => {
    const { isLoading, movie } = useAppSelector(state => state.movieDetails);
    const dispatch = useAppDispatch();
    const [imageLoading, setImageLoading] = useState(true);
    const moveId = route.params.movieId;


    useEffect(() => {
        dispatch(fetchMovieDetails(moveId))
        return () => {
            if (Platform.OS == 'android') {
                StatusBar.setBackgroundColor('white');
                StatusBar.setBarStyle('dark-content');
            }
        }
    }, [])

    return (
        <>
            {(Platform.OS == 'android') && <StatusBar translucent backgroundColor={'transparent'} barStyle="dark-content" />}

            {(isLoading || imageLoading) &&
                (<View style={styles.imageLoader}>
                    <ActivityIndicator color={COLOR.primaryColor} />
                </View>)}

            {(!isLoading && movie != null) && (
                <ScrollView style={styles.mainContainer}>
                    <View style={styles.posterContainer}>
                        <Image
                            style={styles.posterImage}
                            source={{ uri: `${Constants.IMAGE_URL}${movie?.posterPath}` }}
                            onLoadEnd={() => {
                                setImageLoading(false);
                            }}
                        />
                        <LinearGradient
                            colors={['transparent', COLOR.background]}
                            style={styles.linearGradient}
                        />
                        <View style={styles.posterBottomBar}>
                            <Text style={styles.year}>{movie?.releaseDate}</Text>
                            <Text style={styles.title}>{movie?.originalTitle}</Text>
                            <MovieGenreList genrs={movie?.generes.map((item: GenericModel) => {
                                return item.name
                            }) || []} />
                        </View>

                    </View>


                    <View style={styles.bodyContainer}>
                        <View style={styles.headContainer}>
                            <View style={styles.headGrid}>
                                <Text style={styles.popularity}>
                                    {movie?.popularity.toPrecision(5)}
                                </Text>
                                <Text style={styles.headText}>Popularity</Text>
                            </View>
                            <View style={styles.headGrid}>
                                <Text style={styles.popularity}>
                                    {movie?.voteAverage}
                                </Text>
                                <Text style={styles.headText}>Rating</Text>
                            </View>
                            <View style={styles.headGrid}>
                                <Text style={styles.popularity}>
                                    {movie?.budget}
                                </Text>
                                <Text style={styles.headText}>Budget</Text>
                            </View>
                        </View>

                        <Text style={styles.sectionTitle}>Overview</Text>
                        <Text style={styles.textContent}>{movie?.overview}</Text>
                        <Text style={styles.sectionTitle}>Status</Text>
                        <Text style={styles.textContent}>{movie?.status}</Text>
                        {movie?.homepage !== '' && (
                            <>
                                <Text style={styles.sectionTitle}>Homepage</Text>
                                <Text
                                    style={StyleSheet.flatten([styles.textContent, styles.link])}
                                    onPress={() => Linking.openURL(movie?.homepage!!)}>
                                    {movie?.homepage!!}
                                </Text>
                            </>
                        )}
                    </View>

                </ScrollView>
            )}
        </>
    );
};


export default MovieDetailsScreen;