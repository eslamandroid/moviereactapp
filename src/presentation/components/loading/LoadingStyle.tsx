import {Dimensions, StyleSheet} from 'react-native';
import {COLOR} from '../../../common/appconstants/Colors';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  containerLoading: {
    width,
    height,
    position: 'relative',
    backgroundColor: COLOR.loadingBackgroundColor,
    top: 0,
    left: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.transparentColor,
    height: 100,
    width: width / 1.2,
    borderRadius: 2,
  },
  loadingTextStyle: {
    fontSize: 25,
    color: COLOR.black,
    marginLeft: 20,
  },
});

export default styles;
