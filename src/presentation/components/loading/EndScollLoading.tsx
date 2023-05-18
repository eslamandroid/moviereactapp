import { View, ActivityIndicator } from "react-native";
import { COLOR } from "../../../common/appconstants/Colors";

const EndScrollLoading = () => {
    return (<View style={{
        flex: 1,
        position: 'absolute',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        bottom: 25
    }}>
        <ActivityIndicator size={'large'} color={COLOR.black} style={{
            backgroundColor: 'white',
            padding: 16,
            borderRadius: 45,
        }} />
    </View>);
};

export default EndScrollLoading;