import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    flatListContainer: {
        marginHorizontal: 4,
        marginTop: 8,
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

export default styles;