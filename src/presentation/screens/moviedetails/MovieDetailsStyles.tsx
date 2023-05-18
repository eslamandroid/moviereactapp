import { Dimensions, StyleSheet } from "react-native";
import { COLOR } from "../../../common/appconstants/Colors";

const { height: viewportHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLOR.background
    },
    imageLoader: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: COLOR.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    posterContainer: {
        width: '100%',
        height: viewportHeight / 2,
    },
    posterImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    linearGradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 200
    },
    posterBottomBar: {
        position: 'absolute',
        left: 20,
        right: 20,
        bottom: 20,
    },
    year: {
        color: COLOR.primaryColor,
        fontSize: 16,
        marginBottom: 1,
        fontWeight: '600',
    },
    title: {
        color: COLOR.primaryColor,
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10
    },
    bodyContainer: {
        padding: 16,
    },
    popularity: {
        fontSize: 18,
        fontWeight: '600',
        color: 'red',
        marginBottom: 2,
    },
    headGrid: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 16,
    },
    headText: {
        color: COLOR.black,
        fontSize: 15,
        fontWeight: 'bold'

    },
    sectionTitle: {
        color: COLOR.black,
        fontSize: 24,
        marginTop: 16,
        marginBottom: 6,
        fontWeight: 'bold'
    },
    textContent: {
        color: COLOR.secondaryText,
        fontSize: 20,
        fontWeight: '500'
    },
    link: {
        textDecorationLine: 'underline'
    },
});

export default styles;