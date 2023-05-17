/* eslint-disable react/react-in-jsx-scope */
import {ActivityIndicator, View, Text} from 'react-native';
import {COLOR} from '../../../common/appconstants/Colors';
import styles from './LoadingStyle';

const Loading = () => {
  return (
    <View style={styles.containerLoading}>
      <View style={styles.containerIndicator}>
        <ActivityIndicator size={'large'} color={COLOR.black} />
        <Text style={styles.loadingTextStyle}>Loading....</Text>
      </View>
    </View>
  );
};
export default Loading;
