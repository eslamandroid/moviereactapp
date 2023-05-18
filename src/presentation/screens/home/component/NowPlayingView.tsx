import { PropsWithChildren } from "react";
import { MovieItemModel } from "../../../../domain/models/movielist/MovieModels";
import { View, FlatList, Text, StyleSheet } from "react-native";
import HorizontalMovieCard from "./HorizontalMovieCard";
import { COLOR } from "../../../../common/appconstants/Colors";

type NowPlayProps = PropsWithChildren<{
    movies: MovieItemModel[]
}>;

const renderNowPlaying = ({ item }: { item: MovieItemModel }) => {
    return <HorizontalMovieCard movie={item} />;
};

const NowPlayingList = ({ movies }: NowPlayProps) => {
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

const styles = StyleSheet.create({
    sectionTitle: {
        color: COLOR.black,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 16,
        marginTop: 25,
    }
});
export default NowPlayingList;