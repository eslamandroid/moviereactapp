import { PropsWithChildren } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { COLOR } from "../../../../common/appconstants/Colors";

type MovieGenreProps = PropsWithChildren<{
    genr: string
}>;

type MovieGenreListProps = PropsWithChildren<{
    genrs: string[]
}>;

const MovieGenre = ({ genr }: MovieGenreProps) => {
    return (
        <View style={styles.genreContainer}>
            <Text style={styles.genreText}>{genr}</Text>
        </View>
    );
};

const MovieGenreList = ({ genrs }: MovieGenreListProps) => {

    return (
        <View style={styles.genresContainer}>
            <FlatList
                style={styles.genresContainer}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={genrs}
                keyExtractor={(_, index: number) => index.toString()}
                renderItem={({ item }: { item: string }) => <MovieGenre genr={item} />} />
        </View>
    );
};

const styles = StyleSheet.create({
    genreContainer: {
        borderRadius: 5,
        borderColor: COLOR.black,
        borderWidth: 1,
        paddingHorizontal: 8,
        marginRight: 8,
    },
    genreText: {
        fontSize: 16,
        fontWeight: '500',
        color: COLOR.black
    },
    genresContainer: {
        width: '100%'
    },


});

export default MovieGenreList;